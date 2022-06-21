import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./slices/gameSlice";
import descriptionSlice from "./slices/descriptionSlice";

export const store = configureStore({
  reducer: {
    cart: gameSlice,
    games: descriptionSlice,
  },
});
