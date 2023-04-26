import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import authReducer from "./authSlice";
import answersReducer from "./answersSlice";
import updateReducer from "./updateSlice";
import tokenReducer from "./tokenSlice";
import finalAnswerReducer from "./finalAnswerSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    answers: answersReducer,
    update: updateReducer,
    token: tokenReducer,
    finalAnswer: finalAnswerReducer,
  },
});

export default store;
