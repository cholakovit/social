import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../blog/postsSlice';
import usersReducer from '../blog/usersSlice';


export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
})