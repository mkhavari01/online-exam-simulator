import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import authReducer from "./authSlice";
import answersReducer from "./answersSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    answers: answersReducer,
  },
});

export default store;
