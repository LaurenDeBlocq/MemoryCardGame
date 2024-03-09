import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "../slices/scoreSlice";
import playerOneReducer from "../slices/playerOneSlice";
import playerTwoReducer from "../slices/playerTwoSlice";

export default configureStore({
  reducer: {
    score: scoreReducer,
    playerOne: playerOneReducer,
    playerTwo: playerTwoReducer,
  },
});
