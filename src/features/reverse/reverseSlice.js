import { createSlice } from '@reduxjs/toolkit';

export const reverseSlice = createSlice({
  name: 'reverse',
  initialState: {
    reversedString: ''
  },
  reducers: {
    reverse: (state, action) => {
      state.reversedString = reverseString(action.payload);
    }
  }
});

export const { reverse } = reverseSlice.actions;

export default reverseSlice.reducer;

function reverseString (str) {
  let charsArray = str.split('');
  let reversedChars = charsArray.reverse();
  return reversedChars.join('');
}
