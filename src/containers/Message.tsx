import React from 'react';

import { Label } from '../components';

interface IMessage {
    message: string;
    style?: React.CSSProperties;
}

const Message: React.FC<IMessage> = ({ message, style }) => {
    return (
        <div style={style}>
            <Label>{message}</Label>
        </div>
    );
};
export default Message;
