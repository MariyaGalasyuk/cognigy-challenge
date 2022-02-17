import { Button, Fab, TextField } from '@mui/material';
import React, { useState } from 'react';
import NavigationIcon from '@mui/icons-material/Navigation';
import style from './bottomPanel.module.css'
import { IMessage } from '../../interfaces/message';

interface IPanelProps {
    sendData: (message: string) => void
}

export default function BottomPanel({ sendData }: IPanelProps): JSX.Element {

    const [textMessage, setText] = useState<string>('')

    const handleButtonClick = () => {
        if (!textMessage) return

        setText('')
        sendData(textMessage)
    }

    const handleEnterPressed = (e: React.KeyboardEvent) => {
        if (e.code !== 'Enter' || !textMessage) return

        setText('')
        sendData(textMessage)
    }
    return (
        <div className={style.bottomPanel}>
            <TextField
                id="filled-basic"
                label="Send message"
                variant="filled"
                value={textMessage}
                style={{ width: '70%' }}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleEnterPressed}
            />
            <Button
                variant="outlined"
                size="large"
                style={{ width: '25%' }}
                onClick={handleButtonClick}
                onKeyDown={handleEnterPressed}
            >
                Send
            </Button>
        </div>
    );

}
