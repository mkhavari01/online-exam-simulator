import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { checkToken } from "../redux/tokenSlice";
import axios from "axios";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const dispatch = useDispatch();

  // const isLoading = useSelector((state) => state.token.loading);
  // const response = useSelector((state) => state.token.isTokenValid);

  // const [res, setRes] = useState(false);

  // console.log("res is", res);

  // useEffect(() => {
  //   dispatch(checkToken());
  // }, []);
  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}api/user/check-token`,
          null,
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div style={{ color: "black" }}>Loading...</div>;
  }

  if (data) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }

  if (error) {
    return <div style={{ color: "black" }}>Error: {error.message}</div>;
  }
};

export { PrivateRoute };
