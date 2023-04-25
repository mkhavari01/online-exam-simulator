import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sendAuthRequestAsync = (data, route) => async (dispatch) => {
  try {
    dispatch(sendAuthRequest());
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}api/user/${route}`,
      data
    );
    dispatch(sendAuthSuccess(response.data));
  } catch (error) {
    dispatch(sendAuthError(error.response.data.data));
  }
};

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    sendAuthRequest: (state) => {
      state.isLoading = true;
    },
    sendAuthSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.data.token);
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
    },
    sendAuthError: (state, action) => {
      alert(action.payload);
      if (action.payload === "User was not found") {
        alert("you have to signup first;");
        window.location.href = "/signup";
      }
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    },
  },
});

export const { sendAuthRequest, sendAuthSuccess, sendAuthError } =
  authSlice.actions;

export default authSlice.reducer;

export { sendAuthRequestAsync };
