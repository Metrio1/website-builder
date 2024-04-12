import { createSlice } from '@reduxjs/toolkit';

const templateSlice = createSlice({
  name: 'templateSliced',
  initialState: {
    websiteTemplate: null,
    websiteColorset: null,
  },
  reducers: {
    setTemplateId: (state, action) => {
      state.websiteTemplate = action.payload;
    },
    setColorsetId: (state, action) => {
      state.websiteColorset = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setTemplateId, setColorsetId } = templateSlice.actions;
export default templateSlice.reducer;
