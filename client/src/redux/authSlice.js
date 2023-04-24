import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sendAuthRequestAsync = (data) => async (dispatch) => {
  try {
    dispatch(sendAuthRequest());
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}api/user/login`,
      data
    );
    dispatch(sendAuthSuccess(response.data));
  } catch (error) {
    dispatch(sendAuthError());
  }
};

const initialState = {
  email: "",
  password: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    sendAuthRequest: (state) => {
      state.isLoading = true;
    },
    sendAuthSuccess: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.email = "";
      state.password = "";
    },
    sendAuthError: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    },
  },
});

export const {
  setEmail,
  setPassword,
  sendAuthRequest,
  sendAuthSuccess,
  sendAuthError,
} = authSlice.actions;

export default authSlice.reducer;

export { sendAuthRequestAsync };
