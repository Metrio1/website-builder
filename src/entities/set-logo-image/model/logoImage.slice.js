import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  logoImage: null,
}

const logoImageSlice = createSlice({
  name: 'logoImageSlice',
  initialState,
  reducers: {
    setLogoImage: (state, action) => {
      state.logoImage = action.payload;
    },
    clearLogoImage: () => {
      return initialState;
    }
  },
});

export const { setLogoImage, clearLogoImage} = logoImageSlice.actions;

export default logoImageSlice.reducer;
