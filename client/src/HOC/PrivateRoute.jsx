import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { checkToken } from "../redux/tokenSlice";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.token.loading);
  const response = useSelector((state) => state.token.isTokenValid);

  useEffect(() => {
    dispatch(checkToken());
  }, []);

  if (!response) {
    return <Redirect to={{ pathname: "/login" }} />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export { PrivateRoute };
