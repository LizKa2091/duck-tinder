import type { ICatItem } from "@entities/cat/types";

export interface IMatch {
   cat: ICatItem;
   matchDate: string;
}

export interface IMatchesState {
   matches: IMatch[];
}

export type AddMatchPayload = Omit<IMatch, 'matchDate'>;

export type Gender = 'male' | 'female';

export interface IUserData {
   name: string;
   gender: Gender;
   country: string;
}

export interface IDialoguesStateItem {
   id: string;
   dialogueWith: string;
   dialogueWithIconUrl: string;
   messagesData: IMessageData[];
}

export interface IMessageData {
   id: string;
   sender: string;
   receiver: string;
   timeStamp: string;
   message: string;
}

export interface IDialoguesState {
   dialogues: IDialoguesStateItem[];
}

// export type ISendMessagePayload = Omit<IMessageData, 'id' | 'timeStamp'>;
export interface ISendMessagePayload {
   sender: string;
   receiver: string;
   message: string;
   receiverIconUrl: string;
}

export type CreateDialoguePayload = Omit<IDialoguesStateItem, 'id' | 'messagesData'>;