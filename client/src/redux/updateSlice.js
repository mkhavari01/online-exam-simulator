import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const config = {
  headers: { token: localStorage.getItem("token") },
};

const sendUpdateRequestAsync = (data) => async (dispatch) => {
  try {
    dispatch(sendUpdateRequest());
    const response = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/api/answer`,
      data,
      config
    );
    dispatch(sendUpdateSuccess(response.data));
  } catch (error) {
    dispatch(sendUpdateError(error.response.data.data));
  }
};

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const updateSlice = createSlice({
  name: "update",
  initialState,
  reducers: {
    sendUpdateRequest: (state) => {
      state.isLoading = true;
    },
    sendUpdateSuccess: (state, action) => {
      console.log("payload is", action.payload);
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
    },
    sendUpdateError: (state, action) => {
      console.log("Error:", action.payload);
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    },
  },
});

export const { sendUpdateRequest, sendUpdateSuccess, sendUpdateError } =
  updateSlice.actions;

export default updateSlice.reducer;

export { sendUpdateRequestAsync };
