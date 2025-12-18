import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IDialoguesState, IDialoguesStateItem, ISendMessagePayload, CreateDialoguePayload } from "../types";

const initialState: IDialoguesState = {
   dialogues: []
};

const dialoguesSlice = createSlice({
   name: 'dialogues',
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
         
         const existingDialogueIndex = state.dialogues.findIndex((dialogue) => dialogue.dialogueWith === receiver);

         if (existingDialogueIndex !== -1) {
            state.dialogues[existingDialogueIndex].messagesData.push(newMsg);
         }
         else {
            const newDialogue: IDialoguesStateItem = {
               id: receiver,
               dialogueWith: receiver,
               dialogueWithIconUrl: receiverIconUrl,
               messagesData: [newMsg]
            };

            state.dialogues.push(newDialogue);
         }
      },
      createDialogue: (state, action: PayloadAction<CreateDialoguePayload>) => {
         const { dialogueWith, dialogueWithIconUrl } = action.payload;

         const dialogueExists = state.dialogues.find((dialogue) => dialogue.dialogueWith === dialogueWith);

         if (!dialogueExists) {
            const newDialogue: IDialoguesStateItem = {
               id: dialogueWith,
               dialogueWith,
               dialogueWithIconUrl,
               messagesData: []
            }

            state.dialogues.push(newDialogue);
         }
      }
   }
});

export const { sendMessage, createDialogue } = dialoguesSlice.actions;
export default dialoguesSlice.reducer;