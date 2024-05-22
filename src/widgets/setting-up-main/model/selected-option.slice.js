import { createSlice } from '@reduxjs/toolkit';

const selectedOptionSlice = createSlice({
  name: 'selectedOptions',
  initialState: {},
  reducers: {
    setSelectedOption: (state, action) => {
      const { index, option } = action.payload;
      state[index] = option;
    },
  },
});

export const { setSelectedOption } = selectedOptionSlice.actions;
export default selectedOptionSlice.reducer;