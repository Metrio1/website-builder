import { createSlice } from '@reduxjs/toolkit';

const templateSlice = createSlice({
  name: 'templateSlice',
  initialState: {
    websiteTemplate: null,
  },
  reducers: {
    setTemplateId: (state, action) => {
      state.websiteTemplate = action.payload;
    },
  },
});

export const { setTemplateId } = templateSlice.actions;
export default templateSlice.reducer;
