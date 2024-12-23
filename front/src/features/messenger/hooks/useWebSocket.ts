import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const useWebSocket = (token: string) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [messages, setMessages] = useState<{ user: any; text: string; time: string }[]>([]);

    useEffect(() => {
        const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_URL!, {
            auth: { token },
        });

        newSocket.on('chat_history', (history) => {
            setMessages(history.reverse());
        });

        newSocket.on('receive_message', (message) => {
            setMessages((prev) => [...prev, message]);
        });

        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, [token]);

    const sendMessage = (text: string) => {
        socket?.emit('send_message', { text });
    };

    return { messages, sendMessage };
};

export default useWebSocket;