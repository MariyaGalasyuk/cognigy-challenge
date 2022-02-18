import { Button, InputBase } from '@mui/material';
import React, { useState } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import style from './bottomPanel.module.css'
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';

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
            <InputBase
                id="filled-basic"
                startAdornment={
                    <InputAdornment position="start">
                      <PersonOutlineIcon sx={{color: "white !important"}} />
                    </InputAdornment>
                  }
                value={textMessage}
                sx={{ width: '70%', color: "white !important" }}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleEnterPressed}
            />
            <Button
                size="medium"
                style={{ width: '25%' }}
                endIcon={<SendIcon />}
                onClick={handleButtonClick}
                onKeyDown={handleEnterPressed}
                sx={{color:"white !important"}}
            >
                Send
            </Button>
        </div>
    );

}
