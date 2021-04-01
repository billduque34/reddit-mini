import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../../RedditAPI/Reddit";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', 
    async (subreddit) => {
        return await getPosts(subreddit);
    });

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoadingPosts: false,
        errorPosts: false
    },
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.isLoadingPosts = true;
            state.errorPosts = false;
        }, 
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoadingPosts = false;
            state.errorPosts = false;
        }, 
        [fetchPosts.rejected]: (state, action) => {
            state.isLoadingPosts = false;
            state.errorPosts = true;
        }
    }
});

export const selectPosts = state => state.posts.posts;
export default postsSlice.reducer;