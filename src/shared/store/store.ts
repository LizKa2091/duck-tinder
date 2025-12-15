import { configureStore } from "@reduxjs/toolkit";
import matchesReducer from '@entities/user/model/matchesSlice';
import messagesReducer from '@entities/user/model/messagesSlice';
import userDataReducer from '@entities/user/model/userDataSlice';

export const store = configureStore({
   reducer: {
      matches: matchesReducer,
      messages: messagesReducer,
      userData: userDataReducer
   }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;