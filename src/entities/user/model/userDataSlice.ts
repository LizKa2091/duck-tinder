import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUserData } from "../types";

const initialState: IUserData = {
   name: '',
   gender: 'male',
   country: ''
}

const userDataSlice = createSlice({
   name: 'userData',
   initialState: initialState,
   reducers: {
      setUserData: (state, action: PayloadAction<IUserData>) => {
         const { name, gender, country } = action.payload;

         if (!name.trim() || !gender.trim() || !country.trim()) {
            state.name = name;
            state.gender = gender;
            state.country = country;
         }
      },
      updateUserData: (state, action: PayloadAction<IUserData>) => {
         const { name, gender, country } = action.payload;

         if (name !== state.name || gender !== state.gender || country !== state.country) {
            state.name = name;
            state.gender = gender;
            state.country = country;
         }
      }
   }
});

export const { setUserData, updateUserData } = userDataSlice.actions;
export default userDataSlice.reducer;