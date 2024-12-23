import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { MessageService } from './message.service';

@Injectable()
@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    constructor(
        private readonly jwtService: JwtService,
        private readonly messageService: MessageService
    ) { }

    async handleConnection(client: Socket) {
        try {
            const token = client.handshake.auth?.token;
            if (!token) throw new UnauthorizedException();
            const user = this.jwtService.verify(token);
            client.data.user = user;

            // Отправляем историю сообщений при подключении
            const chatHistory = await this.messageService.getChatHistory();
            client.emit('chat_history', chatHistory);
        } catch (error) {
            client.disconnect();
        }
    }

    handleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
    }

    @SubscribeMessage('send_message')
    async handleMessage(
        @MessageBody() message: { text: string },
        @ConnectedSocket() client: Socket
    ) {
        const user = client.data.user;
        if (!user) throw new UnauthorizedException();

        // Сохраняем сообщение в базе
        const savedMessage = await this.messageService.createMessage(user.id, message.text);

        // Отправляем сообщение всем пользователям
        this.server.emit('receive_message', {
            user: { id: user.id, name: user.name || 'Anonymous' },
            text: message.text,
            time: savedMessage.createdAt,
        });
    }
}
