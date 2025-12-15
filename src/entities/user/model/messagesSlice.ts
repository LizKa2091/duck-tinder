import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IMessagesState, ISendMessagePayload } from "../types";

const initialState: IMessagesState = {
   messages: []
};

const messagesSlice = createSlice({
   name: 'messages',
   initialState: initialState,
   reducers: {
      sendMessage: (state, action: PayloadAction<ISendMessagePayload>) => {
         const currDate = Date.now();

         state.messages.push({
            ...action.payload,
            id: `${currDate * Math.floor(Math.random() * 100)}`,
            timeStamp: currDate.toString()
         })
      }
   }
});

export const { sendMessage } = messagesSlice.actions;
export default messagesSlice.reducer;