import { createSlice } from "@reduxjs/toolkit";

export const playerTwoSlice = createSlice({
  name: "playerTwo",
  initialState: {
    name: "",
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
  },
});

export const { setName, incrementScore } = playerTwoSlice.actions;

export default playerTwoSlice.reducer;
