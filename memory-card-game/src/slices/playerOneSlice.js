import { createSlice } from "@reduxjs/toolkit";

export const playerOneSlice = createSlice({
  name: "playerOne",
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

export const { setName, incrementScore } = playerOneSlice.actions;

export default playerOneSlice.reducer;
