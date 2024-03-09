import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards: [],
  },
  reducers: {
    loadCard: (state, action) => {
      state.cards.push(action.payload);
    },
  },
});

export const { loadCard } = cardSlice.actions;

export const selectCards = (state) => state.card.cards;
// export const selectScore = (state) => state.card.score;

export default cardSlice.reducer;
