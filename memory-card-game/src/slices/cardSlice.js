import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards: [],
  },
  reducers: {
    loadCards: (state, action) => {
      state.cards = [...state.cards, action.payload];
    },
  },
});

export const { loadCards } = cardSlice.actions;

export const selectCards = (state) => state.card.cards;

export default cardSlice.reducer;
