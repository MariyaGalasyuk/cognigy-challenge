import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMessage } from '../interfaces/message';

import { RootState, AppThunk } from '../store/store'

export interface MessagesState {
    messages: IMessage[]
}

const initialState: MessagesState = {
    messages: [
        {
            message: { text: "test-text", data: {} },
            type: "received"
        },
        {
            message: { text: "lorems", data: {} },
            type: "sent"
        }
    ]
};

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {

        getMessage: (state, action) => {
            state.messages.push(action.payload)
        },
        sendMessage: (state, action) => {
            state.messages.push(action.payload)
        }
    }
})

export default messagesSlice.reducer

export const messages = (state: RootState) => state.messages

export const { getMessage, sendMessage } = messagesSlice.actions