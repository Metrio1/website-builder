import { createSlice } from '@reduxjs/toolkit';

const selectedOptionSlice = createSlice({
  name: 'selectedOption',
  initialState: '',
  reducers: {
    setSelectedOption: (state, action) => action.payload,
  },
});

export const { setSelectedOption } = selectedOptionSlice.actions;
export default selectedOptionSlice.reducer;
