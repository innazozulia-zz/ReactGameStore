import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./slices/gameSlice";
import descriptionSlice from "./slices/descriptionSlice";
import consoleSlice from "./slices/comsolesSlice";

export const store = configureStore({
  reducer: {
    cart: gameSlice,
    games: descriptionSlice,
    console: consoleSlice,
  },
});
