import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AddMatchPayload, IMatchesState } from "../types";

const initialSate: IMatchesState = {
   matches: []
}

const matchesSlice = createSlice({
   name: 'matches',
   initialState: initialSate,
   reducers: {
      addToMatches: (state, action: PayloadAction<AddMatchPayload>) => {
         const itemToMatch = action.payload;
         const isAlreadyMatched = state.matches.some((match) => match.id === itemToMatch.id);

         if (!isAlreadyMatched) {
            state.matches.push({
               ...itemToMatch,
               matchDate: Date.now().toString()
            });
         }
      },
      removeFromMatches: (state, action: PayloadAction<{ id: string }>) => {
         const itemToRemove = action.payload;

         state.matches.filter((match) => match.id !== itemToRemove.id)
      }
   }
})

export const { addToMatches, removeFromMatches } = matchesSlice.actions;
export default matchesSlice.reducer;