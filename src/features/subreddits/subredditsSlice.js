import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from "../../RedditAPI/Reddit";

export const fetchSubreddits = createAsyncThunk('subreddits/fetchSubreddits', 
    async () => {
        return await getSubreddits();
    });

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        isLoadingSubreddits: false,
        errorSubreddits: false
    }, 
    reducers: {},
    extraReducers: {
        [fetchSubreddits.pending]: (state, action) => {
            state.isLoadingSubreddits = true;
            state.errorSubreddits = false;
        },
        [fetchSubreddits.fulfilled]: (state, action) => {
            state.subreddits = action.payload;
            state.isLoadingSubreddits = false;
            state.errorSubreddits = false;
        },
        [fetchSubreddits.rejected]: (state, action) => {
            state.isLoadingSubreddits = false;
            state.errorSubreddits = true;
        }
    }
});

export const selectSubreddits = state => state.subreddits.subreddits;
export default subredditsSlice.reducer;