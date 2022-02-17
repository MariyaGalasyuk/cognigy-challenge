export interface IMessage {
    message: IOutput;
    type: 'sent' | 'received'
}

export interface IOutput {
    text: string;
    data?: {
        imgSrc?: string
    }
} 