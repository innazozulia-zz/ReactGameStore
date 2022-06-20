import { configureStore, createSlice } from "@reduxjs/toolkit";
import gameSlice from "./slices/gameSlice";

export const store = configureStore({
  reducer: {
    cart: gameSlice,
  },
});
