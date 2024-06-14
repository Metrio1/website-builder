import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const uploadImage = createAsyncThunk('image/upload', async (formData, thunkAPI) => {
  try {
    const response = await fetch('http://127.0.0.1:5000/upload', {
      method: 'POST',
      body: formData,
    });
    return await response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// const imageSlice = createSlice({
//   name: 'image',
//   initialState: {
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(uploadImage.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(uploadImage.fulfilled, (state) => {
//         state.loading = false;
//       })
//       .addCase(uploadImage.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });
//
// export default imageSlice.reducer;
