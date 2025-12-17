import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IMessagesState, IDialoguesStateItem, ISendMessagePayload, CreateDialoguePayload } from "../types";

const initialState: IMessagesState = {
   messages: []
};

const messagesSlice = createSlice({
   name: 'messages',
   initialState: initialState,
   reducers: {
      sendMessage: (state, action: PayloadAction<ISendMessagePayload>) => {
         const { receiver, receiverIconUrl } = action.payload;     
         const currDate = Date.now();

         const newMsg = {
            ...action.payload,
            id: `${currDate * Math.floor(Math.random() * 100)}`,
            timeStamp: currDate.toString()
         }
         
         const existingDialogueIndex = state.messages.findIndex((dialogue) => dialogue.dialogueWith === receiver);

         if (existingDialogueIndex !== -1) {
            state.messages[existingDialogueIndex].messagesData.push(newMsg);
         }
         else {
            const newDialogue: IDialoguesStateItem = {
               id: `${currDate}-${Math.random() * 100}`,
               dialogueWith: receiver,
               dialogueWithIconUrl: receiverIconUrl,
               messagesData: [newMsg]
            };

            state.messages.push(newDialogue);
         }
      },
      createDialogue: (state, action: PayloadAction<CreateDialoguePayload>) => {
         const { dialogueWith, dialogueWithIconUrl } = action.payload;

         const dialogueExists = state.messages.find((dialogue) => dialogue.dialogueWith === dialogueWith);

         if (!dialogueExists) {
            const currDate = Date.now();

            const newDialogue: IDialoguesStateItem = {
               id: `${currDate}-${Math.random() * 100}`,
               dialogueWith,
               dialogueWithIconUrl,
               messagesData: []
            }

            state.messages.push(newDialogue);
         }
      }
   }
});

export const { sendMessage, createDialogue } = messagesSlice.actions;
export default messagesSlice.reducer;