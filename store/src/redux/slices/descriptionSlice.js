import { createSlice } from "@reduxjs/toolkit";

const descriptionSlice = createSlice({
  name: "games",
  initialState: {
    currentGame: null,
  },
  reducers: {
    setCurrentGame: (state, action) => {
      state.currentGame = action.payload;
    },
  },
});

export const { setCurrentGame } = descriptionSlice.actions;
export default descriptionSlice.reducer;
