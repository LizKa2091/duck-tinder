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

export interface IMessageData {
   id: string;
   sender: string;
   receiver: string;
   timeStamp: string;
   message: string;
}

export interface IMessagesState {
   messages: IMessageData[];
}

export type ISendMessagePayload = Omit<IMessageData, 'id' | 'timeStamp'>;