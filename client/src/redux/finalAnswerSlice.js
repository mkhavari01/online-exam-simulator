import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const config = {
  headers: { token: localStorage.getItem("token") },
};

const finalAnswer = createAsyncThunk("api/exam/finalAnswer", async (data) => {
  console.log("createAsyncThunk", data);
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}api/exam/finalAnswer`,
    { data },
    config
  );
  return response.data;
});

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const finalAnswerSlice = createSlice({
  name: "finalAnswer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(finalAnswer.pending, (state) => {
        state.loading = true;
      })
      .addCase(finalAnswer.fulfilled, (state, action) => {
        state.loading = false;
        state.sucess = true;
      })
      .addCase(finalAnswer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default finalAnswerSlice.reducer;
export { finalAnswer };
