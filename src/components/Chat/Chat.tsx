import styles from './chat.module.css'

import React, { FC, useCallback, useEffect, useRef } from 'react';
import { SocketClient } from "@cognigy/socket-client"
import { IOutput } from '../../interfaces/message';
import { messages, getMessage, sendMessage } from '../../features/messagesSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Messages } from '../Messages/Messages';
import BottomPanel from '../BottomPanel/BottomPanel';
import { Divider, Paper } from '@mui/material';


const Chat: FC = () => {
    const ws = useRef<SocketClient | null>(null);

    const dispatch = useAppDispatch();

    const messagesData = useAppSelector(messages)

    useEffect(() => {
        ws.current = new SocketClient(" https://endpoint-trial.cognigy.ai", "c62c5fbea632152a4e3265f21862b91e21eacca1f135a1a07b031a0c6f5c6274", {
            // if you use node, internet explorer or safari, you need to enforce websockets
            forceWebsockets: true,
        });
        ws.current.connect()
        gettingData()
    }, [])


    const gettingData = useCallback(() => {
        if (!ws.current) return;

        ws.current.on('output', (output: IOutput) => {
            dispatch(getMessage({ message: output, type: 'received' }))
            console.log(output.text, output.data);
        })

    }, []);

    const sendingData = (message: string) => {
        if (!ws.current) return;
        const messageItem = {
            message: {
                text: message,
                data: null
            },
            type: 'sent'
        }
        dispatch(
            getMessage(messageItem)
        )
        ws.current.sendMessage(message)
    }

    return (
        <Paper className={styles.chat} >
            <Messages messages={messagesData.messages} />
            <Divider />
            <BottomPanel sendData={sendingData} />
        </Paper>

    );
}

export default React.memo(Chat)
