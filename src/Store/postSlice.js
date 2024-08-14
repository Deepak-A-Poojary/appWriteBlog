import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    posts: null
}

const postSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        allPost: (state, action) => {
            state.status = true;
            state.posts = action.payload.posts;
        },
        userPosts: (state) => {
            state.status = false;
            state.posts = null;
        }
     }
})

export const {allPost, userPosts} = postSlice.actions;

export default postSlice.reducer;