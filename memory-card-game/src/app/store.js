import { configureStore } from "@reduxjs/toolkit";
import playerOneReducer from "../slices/playerOneSlice";
import playerTwoReducer from "../slices/playerTwoSlice";
import cardReducer from "../slices/cardSlice";

export default configureStore({
  reducer: {
    playerOne: playerOneReducer,
    playerTwo: playerTwoReducer,
    card: cardReducer,
  },
});
