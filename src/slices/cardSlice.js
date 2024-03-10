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
    removeCardFromPlay: (state, action) => {
      state.cards[action.payload].isRemoved = true;
    },
    removeCardsFromChosen: (state) => {
      state.chosen.pop();
      state.chosen.pop();
    },
  },
  selectors: {
    selectCards: (state) => state.cards,
    selectOneCard: (state, cardIndex) => state.cards[cardIndex],
    getCardIndex: (state, action) => {
      state.cards.indexOf(action.payload);
    },
    selectChosenCards: (state) =>
      state.cards.filter((card) => card.isTurnedOver),
    selectChosenCardsIndex: (state) => state.chosen,
  },
});

export const {
  loadCards,
  loadChosenCard,
  toggleCard,
  removeCardFromPlay,
  removeCardsFromChosen,
} = cardSlice.actions;

export const {
  selectCards,
  selectOneCard,
  selectChosenCards,
  getCardIndex,
  selectChosenCardsIndex,
} = cardSlice.selectors;

export default cardSlice.reducer;
