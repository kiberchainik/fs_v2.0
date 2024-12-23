// hooks/useChat.ts

import { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

interface Message {
    id: string;
    userId: string;
    content: string;
    createdAt: string;
}

export const useChat = (accessToken: string) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');

    useEffect(() => {
        if (!accessToken) {
            console.error('Access token is required');
            return;
        }

        // Устанавливаем соединение с WebSocket
        const socketConnection = io('http://localhost:3000', {
            auth: { token: accessToken },
        });

        setSocket(socketConnection);

        // Получение истории сообщений
        socketConnection.on('messages', (initialMessages: Message[]) => {
            setMessages(initialMessages);
        });

        // Обработка новых сообщений
        socketConnection.on('newMessage', (message: Message) => {
            setMessages((prev) => [...prev, message]);
        });

        // Обработка ошибок подключения
        socketConnection.on('connect_error', (err) => {
            console.error('Ошибка подключения:', err.message);
        });

        // Очистка при размонтировании компонента
        return () => {
            socketConnection.disconnect();
        };
    }, [accessToken]);

    const sendMessage = () => {
        if (!socket || !newMessage.trim()) return;

        // Отправка нового сообщения
        socket.emit('sendMessage', { content: newMessage });
        setNewMessage('');
    };

    return {
        messages,
        newMessage,
        setNewMessage,
        sendMessage,
    };
};