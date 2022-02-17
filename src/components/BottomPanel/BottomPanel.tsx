import { Button, Input } from '@mui/material';
import React, { useState } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import style from './bottomPanel.module.css'
import InputAdornment from '@mui/material/InputAdornment';

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
            <Input
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
