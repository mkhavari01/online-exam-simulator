import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const updateArray = (arr, obj) => {
  const index = obj.index;
  const existingObj = arr.find((item) => item.index === index);

  if (existingObj) {
    // Update the existing object
    const updatedArr = arr.map((item) => {
      if (item.index === index) {
        return { ...item, ...obj };
      } else {
        return item;
      }
    });
    return updatedArr;
  } else {
    // Add a new object
    return arr.concat(obj);
  }
};

const config = {
  headers: { token: localStorage.getItem("token") },
};

const fetchAnswers = createAsyncThunk("api/answers", async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}api/answer`,
    config
  );
  return response.data;
});

const answersSlice = createSlice({
  name: "answers",
  initialState: {
    answers: [],
    status: "idle",
    error: null,
    userInput: [],
  },
  reducers: {
    updateAnswer: (state, action) => {
      state.userInput = updateArray(state.userInput, action.payload);
    },
    clearAnswers: (state) => {
      console.log("heredddd");
      state.userInput = [];
      state.answers = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnswers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAnswers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.answers = action.payload;
      })
      .addCase(fetchAnswers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.log(action.payload);
      });
  },
});

export default answersSlice.reducer;

export const selectAllAnswers = (state) => state.answers.answers;

export const userInput = (state) => state.answers.userInput;

export const selectAnswerStatus = (state) => state.answers.status;

export const selectError = (state) => state.answers.error;

export { fetchAnswers };

export const { updateAnswer, clearAnswers } = answersSlice.actions;
