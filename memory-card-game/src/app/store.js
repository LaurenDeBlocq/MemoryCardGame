import { configureStore } from "@reduxjs/toolkit";
import playerOneReducer from "../slices/playerOneSlice";
import playerTwoReducer from "../slices/playerTwoSlice";

export default configureStore({
  reducer: {
    playerOne: playerOneReducer,
    playerTwo: playerTwoReducer,
  },
});
