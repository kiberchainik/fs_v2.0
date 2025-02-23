// pages/chat.tsx

import React from 'react';
import Chat from '@/features/messenger/components/Chat';

const ChatPage: React.FC = () => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        return <div>Вы не авторизованы. Пожалуйста, войдите в систему.</div>;
    }

    return <Chat accessToken={accessToken} />;
};

export default ChatPage;