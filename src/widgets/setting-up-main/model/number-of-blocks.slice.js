import { createSlice } from '@reduxjs/toolkit';

const initialState = 1; // Начальное значение для numberOfBlocks

const numberOfBlocksSlice = createSlice({
  name: 'numberOfBlocks',
  initialState,
  reducers: {
    incrementBlocks: (state) => {
      if (state < 7) {
        return state + 1;
      }
      return state;
    },
    clearBlocks: () => {
      return initialState; // Сбрасываем к начальному значению
    },
  },
});

export const { incrementBlocks, clearBlocks } = numberOfBlocksSlice.actions;
export default numberOfBlocksSlice.reducer;
