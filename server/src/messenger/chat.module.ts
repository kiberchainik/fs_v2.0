import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { MessageService } from './message.service';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getJwtConfig } from '@/config';

@Module({
    imports: [PrismaModule, JwtModule.registerAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: getJwtConfig
    })],
    providers: [ChatGateway, MessageService],
})
export class ChatModule { }