import React, { useEffect, useState } from "react";
// import http from "axios";
import "./styles/Login.css";

import { useAuth } from "../providers/auth";
import { useNavigate } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { googleAuth, user } = useAuth();

  // const login = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await http.post(
  //       "http://localhost:4000/api/user/form_login",
  //       {
  //         username,
  //         password,
  //         // client,
  //         // redirectUri
  //       }
  //     );
  //     console.log(response.data);
  //     setResData(response.data.message);
  //     // const code = response.data.code
  //     // window.location.href = redirectUri + "?code=" + code
  //   } catch (error) {
  //     setResData(error.response.data.error);
  //   }
  // };

  useEffect(() => {
    if (user?.userId) navigate("/");
  }, []);

  return (
    <>
      <h1 className="login-header">Login</h1>
      <h2 className="login-header">
        A better place for Crypto Currencies to Browse, Save for later or to
        keep track of your Transactions!
      </h2>
      <div className="login-wrapper">
        <div className="login-left"></div>
        <div className="login-right">
          <div className="login-card">
            <p>See all your coins in one place</p>
            <button className="google-login-btn" onClick={googleAuth}>
              Login with Google
            </button>
          </div>
        </div>
        <div className="dog-walk-img"></div>
      </div>

      {/* <form> */}
      {/* <input
          type="text"
          placeholder="Username"
          autoComplete="on"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={(e) => login(e)}>Sign in</button> */}
      {/* <button onClick={(e) => formSignup(e)}>Signup with Facebook</button> */}
      {/* <p>{resData}</p> */}
      {/* </form> */}
      {/* <p>
        Don't have an account?{" "}
        <button onClick={() => navigate("/registrate")}>Sign up here</button>.
      </p> */}
    </>
  );
};

export default Login;
