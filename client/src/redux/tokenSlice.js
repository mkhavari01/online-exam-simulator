import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const config = {
  headers: { token: localStorage.getItem("token") },
};

export const checkToken = createAsyncThunk("api/user/check-token", async () => {
  console.log("here");
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}api/user/check-token`,
    null,
    config
  );
  console.log("here2", response.data);
  return response.data;
});

const initialState = {
  loading: false,
  error: null,
  isTokenValid: false,
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkToken.fulfilled, (state, action) => {
        state.loading = false;
        state.isTokenValid = action.payload.data;
        console.log(state.isTokenValid);
      })
      .addCase(checkToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default tokenSlice.reducer;
