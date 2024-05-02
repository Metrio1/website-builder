import { createSlice } from '@reduxjs/toolkit';

const tagSlice = createSlice({
  name: 'tagSlice',
  initialState: {
    selectedHeader: null,
    selectedSidebar: null,
    selectedFooter: null,
  },
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
  },
});

export const { setSelectedHeaderId, setSelectedSidebarId, setSelectedFooterId } = tagSlice.actions;
export default tagSlice.reducer;