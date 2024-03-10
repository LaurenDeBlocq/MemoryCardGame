import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards: [],
    chosen: [],
  },
  reducers: {
    loadCards: (state, action) => {
      // action.payload.map((card) => state.cards.push(card));
      state.cards = action.payload;
    },
    loadChosenCard: (state, action) => {
      state.chosen = [...state.chosen, action.payload];
    },
    toggleCard: (state, action) => {
      state.cards[action.payload].isTurnedOver =
        !state.cards[action.payload].isTurnedOver;
    },
    // clearChosenCards: (state) => {
    //   state.chosen = [];
    // },
  },
  selectors: {
    selectCards: (state) => state.cards,
    selectOneCard: (state, cardIndex) => state.cards[cardIndex],
    selectChosenCards: (state) =>
      state.cards.filter((card) => card.isTurnedOver),
  },
});

export const { loadCards, loadChosenCard, toggleCard } = cardSlice.actions;

export const { selectCards, selectOneCard, selectChosenCards } =
  cardSlice.selectors;

export default cardSlice.reducer;
