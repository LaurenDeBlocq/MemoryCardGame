import { createSlice } from "@reduxjs/toolkit";

export const playerTwoSlice = createSlice({
  name: "playerTwo",
  initialState: {
    name: "playerTwo",
    score: 0,
    active: false,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    incrementScore: (state) => {
      state.score += 2;
    },
    toggleActive: (state) => {
      state.active = !state.active;
    },
  },
});

export const { setName, incrementScore, toggleActive } = playerTwoSlice.actions;

export const selectName = (state) => state.playerTwo.name;
export const selectScore = (state) => state.playerTwo.score;
export const selectActive = (state) => state.playerTwo.active;

export default playerTwoSlice.reducer;
