import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendAuthRequestAsync } from "../redux/authSlice";
import { useHistory, Link } from "react-router-dom";

const SignupPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("mkhavari0120@gmail.com");
  const [name, setName] = useState("Mahdi Khavari");
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
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sendAuthRequestAsync({ email, password, name }, "signup"));
  };

  if (isSuccess) {
    return history.push("/form");
  }

  if (isLoading) {
    return <h1 className="loader">Loading ....</h1>;
  }

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <h1>Signup</h1>

          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
              Signup
            </button>
          </form>
          <a style={{ zIndex: 1000 }} href="/login">
            <h2>Login</h2>
          </a>
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

export { SignupPage };
