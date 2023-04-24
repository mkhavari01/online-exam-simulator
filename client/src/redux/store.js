import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import authReducer from "./authSlice";
import answersReducer from "./answersSlice";
import updateReducer from "./updateSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    answers: answersReducer,
    update: updateReducer,
  },
});

export default store;
