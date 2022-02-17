import { Paper } from '@mui/material';
import React, { FC, useEffect, useRef } from 'react';
import { IMessage } from '../../interfaces/message';
import { Message } from './Message';
import styles from './messages.module.css'
interface IMessagesProps {
    messages: IMessage[]
}

export function Messages({ messages }: IMessagesProps): JSX.Element {

    const messagesEndRef = useRef<null | HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);
    return (
        < Paper
            elevation={2}
            className={styles.messagesWrapper}
            style={
                {
                    backgroundColor: '#212121',
                    boxShadow: '9px 12px 8px -10px rgba(0, 0, 0, 0.4) inset'
                }
            } >
            {messages.map((message) => <Message message={message} />)}
            <div className="" ref={messagesEndRef}></div>
        </Paper>
    );
}
