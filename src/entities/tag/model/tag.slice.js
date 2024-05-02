import { createSlice } from '@reduxjs/toolkit';

const tagSlice = createSlice({
    name: 'tagSlice',
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