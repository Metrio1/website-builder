import { createSlice } from '@reduxjs/toolkit';

const logoImageSlice = createSlice({
  name: 'logoImageSlice',
  initialState: {
    logoImage: null,
  },
  reducers: {
    setLogoImage: (state, action) => {
      state.logoImage = action.payload;
    },
  },
});

export const { setLogoImage} = logoImageSlice.actions;

export default logoImageSlice.reducer;
