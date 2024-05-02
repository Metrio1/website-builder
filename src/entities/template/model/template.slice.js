import { createSlice } from '@reduxjs/toolkit';

const templateSlice = createSlice({
  name: 'templateSlice',
  initialState: {
    websiteTemplate: null,
    websiteColorset: null,
    websiteTag: null,
  },
  reducers: {
    setTemplateId: (state, action) => {
      state.websiteTemplate = action.payload;
    },
    setColorsetId: (state, action) => {
      state.websiteColorset = action.payload;
    },
  },
});

export const { setTemplateId, setColorsetId } = templateSlice.actions;
export default templateSlice.reducer;