// components/Chat.tsx

import React, { useState } from 'react';
import { useChat } from '../hooks/useChat';
import { FaCommentDots } from 'react-icons/fa'; // Используем иконку сообщения

interface ChatProps {
    accessToken: string;
}

const Chat: React.FC<ChatProps> = ({ accessToken }) => {
    const { messages, newMessage, setNewMessage, sendMessage } = useChat(accessToken);
    const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

    const toggleChat = () => {
        setIsChatOpen((prev) => !prev);
    };

    return (
        <>
            {/* Иконка чата */}
            <div
                onClick={toggleChat}
                className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full cursor-pointer shadow-lg"
            >
                <FaCommentDots size={24} />
            </div>

            {/* Окно чата */}
            {isChatOpen && (
                <div className="fixed bottom-8 right-8 w-96 h-96 bg-white border rounded-lg shadow-xl p-4 flex flex-col">
                    <div className="flex-1 overflow-y-auto mb-4">
                        {messages.map((msg) => (
                            <div key={msg.id} className="mb-2">
                                <p className="text-sm text-gray-500">
                                    <strong>Пользователь {msg.userId}:</strong>
                                </p>
                                <p>{msg.content}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-2">
                        <input
                            type="text"
                            className="border flex-1 p-2"
                            placeholder="Введите сообщение"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Отправить
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chat