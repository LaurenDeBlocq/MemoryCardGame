import { configureStore } from '@reduxjs/toolkit'
import scoreReducer from '../slices/scoreSlice'

export default configureStore({
    reducer: {
      score: scoreReducer,
  },
})