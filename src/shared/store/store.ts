import { configureStore } from "@reduxjs/toolkit";

import matchesReducer from '@entities/user/model/matchesSlice';
import dialoguesReducer from '@entities/user/model/dialoguesSlice';
import userDataReducer from '@entities/user/model/userDataSlice';
import type { IMatchesState, IDialoguesState, IUserData } from "@entities/user/types";

interface ICatTinderState {
   matches: IMatchesState;
   dialogues: IDialoguesState;
   userData: IUserData;
}

const persistedState = (): ICatTinderState | undefined => {
   const savedData = localStorage.getItem('duckTinder');

   return savedData ? JSON.parse(savedData) : undefined;
};

export const store = configureStore({
   reducer: {
      matches: matchesReducer,
      dialogues: dialoguesReducer,
      userData: userDataReducer
   },
   preloadedState: persistedState()
});

store.subscribe(() => {
   localStorage.setItem('duckTinder', JSON.stringify(store.getState()));
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;