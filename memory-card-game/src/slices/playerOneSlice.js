import { createSlice } from "@reduxjs/toolkit";

export const playerOneSlice = createSlice({
  name: "playerOne",
  initialState: {
    name: "",
    score: 0,
    active: true,
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

export const { setName, incrementScore, toggleActive } = playerOneSlice.actions;

export const selectName = (state) => state.playerOne.name;
export const selectScore = (state) => state.playerOne.score;
export const selectActive = (state) => state.playerOne.active;

export default playerOneSlice.reducer;
