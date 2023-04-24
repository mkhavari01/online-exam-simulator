import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendAuthRequestAsync } from "../redux/authSlice";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("mkhavari0120@gmail.com");
  const [password, setPassword] = useState("1234");
  const [emailError, setEmailError] = useState(false);

  const isLoading = useSelector((state) => state.auth.isLoading);
  const isSuccess = useSelector((state) => state.auth.isSuccess);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      // show error message or apply CSS class for invalid input
      setEmailError(true);
    } else {
      // remove error message or apply CSS class for valid input
      setEmailError(false);
    }
    return;
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sendAuthRequestAsync({ email, password }));
  };

  if (isSuccess) {
    return history.push("/about");
  }

  if (isLoading) {
    return <h1 className="loader">Loading ....</h1>;
  }

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <h1>Welcome</h1>

          <form className="form" onSubmit={handleSubmit}>
            {emailError && (
              <span className="err-message">Please provide a valid Email</span>
            )}
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button type="submit" id="login-button">
              Login
            </button>
          </form>
        </div>

        <ul className="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export { LoginPage };
