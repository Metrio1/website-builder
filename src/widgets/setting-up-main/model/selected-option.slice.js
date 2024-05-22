import { createSlice } from '@reduxjs/toolkit';

const selectedOptionSlice = createSlice({
  name: 'selectedOptions',
  initialState: {},
  reducers: {
    setSelectedOption: (state, action) => {
      const { index, option } = action.payload;
      state[index] = option;
    },
    clearAllSelectedOptions: (state) => {
      return {}; // возвращаем пустой объект, чтобы очистить все опции
    },
  },
});

export const { setSelectedOption, clearAllSelectedOptions } = selectedOptionSlice.actions;
export default selectedOptionSlice.reducer;