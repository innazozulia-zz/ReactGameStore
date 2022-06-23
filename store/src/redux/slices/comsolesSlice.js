import { createSlice } from "@reduxjs/toolkit";

const consoleSlice = createSlice({
  name: console,
  initialState: {
    consoleInCart: [],
  },
  reducers: {
    setConsoleInCart: (state, action) => {
      state.consoleInCart.push(action.payload);
    },
    deleteConsoleFromCart: (state, action) => {
      state.consoleInCart = state.consoleInCart.filter(
        (console) => console.id !== action.payload
      );
    },
  },
});

export const { setConsoleInCart, deleteConsoleFromCart } = consoleSlice.actions;
export default consoleSlice.reducer;
