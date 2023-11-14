"use client";
// slices/tokenSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface TokenState {
  token: string;
}

const initialState: TokenState = {
  token: "",
};

const tokenSlice = createSlice({
  name: "token",
  initialState, // Initial state is an empty string
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      // Update the state with the value provided in the action payload
      state.token = action.payload;
    },
  },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
