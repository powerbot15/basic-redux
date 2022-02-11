import { configureStore } from '@reduxjs/toolkit';
import shuffleReducer from '../features/shuffle/shuffleSlice';
import reverseReducer from '../features/reverse/reverseSlice';

export const store = configureStore({
  reducer: {
    shuffle: shuffleReducer,
    reverse: reverseReducer,
  },
});
