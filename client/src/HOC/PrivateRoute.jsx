import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const PrivateRoute = ({ component: Component, ...rest }) => {
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
    return (
      <h1 className="loader">
        <CircularProgress />
      </h1>
    );
  }

  if (data) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }

  // if (error) {
  //   return <Redirect to={{ pathname: "/login" }} />;
  // }

  if (error) {
    return (window.location.href = "login");
  }
};

export { PrivateRoute };
