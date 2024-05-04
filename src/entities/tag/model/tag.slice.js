import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedHeader: null,
  selectedSidebar: null,
  selectedFooter: null,
}

const tagSlice = createSlice({
  name: 'tagSlice',
  initialState,
  reducers: {
    setSelectedHeaderId: (state, action) => {
      state.selectedHeader = action.payload;
    },
    setSelectedSidebarId: (state, action) => {
      state.selectedSidebar = action.payload;
    },
    setSelectedFooterId: (state, action) => {
      state.selectedFooter = action.payload;
    },
    resetSelectedTags: () => {
      return initialState;
    }
  },
});

export const { setSelectedHeaderId, setSelectedSidebarId,
  setSelectedFooterId, resetSelectedTags } = tagSlice.actions;
export default tagSlice.reducer;