import { createSlice } from '@reduxjs/toolkit';

export const shuffleSlice = createSlice({
  name: 'shuffle',
  initialState: {
    shuffledString: ''
  },
  reducers: {
    shuffle: (state, action) => {
      state.shuffledString = shuffleString(action.payload);
    }
  }
});

export const { shuffle } = shuffleSlice.actions;

export default shuffleSlice.reducer;

function shuffleString (str) {
  let charsArray = str.split('');
  let shuffledChars = [];
  while(charsArray.length) {
    const index = charsArray.length > 1 ? getRandomInt(charsArray.length - 1) : 0;
    shuffledChars.push(charsArray[index]);
    charsArray.splice(index, 1);
  }
  return shuffledChars.join('');
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
