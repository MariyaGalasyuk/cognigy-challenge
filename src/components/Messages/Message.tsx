import React, { FC } from 'react';
import { IMessage } from '../../interfaces/message';

import style from './message.module.css'

export function Message({ message }: { message: IMessage }) {
    const messageImage = message.message.data?.imgSrc

    return (
        <div className={`${style.messageItem} ${style[message.type]}`} >
            <div className={`${style.imageContainer} ${message.type === 'received' ? style.sb1: style.sb2}`}>
                {messageImage ?
                    <img src={messageImage} alt="" />
                    : ''
                }
            </div>
            <span>
                {message.message.text}
            </span>
        </div>
    );
}
