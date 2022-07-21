import React, { useState } from "react";
import http from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/auth";

const Registrate = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [resData, setResData] = useState("");

  const { googleAuth } = useAuth();

  const formSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await http.post(
        "http://localhost:4000/api/user/form_register",
        {
          username,
          password,
          cpassword,
        }
      );
      console.log(response);
      setResData(response.data.message);
    } catch (error) {
      // console.log(error)
      setResData(error.response.data.error);
    }
  };

  return (
    <>
      <h1>Collect coins in one place</h1>
      <form>
        <h2>Signup</h2>
        <input
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
        <input
          type="password"
          placeholder="Password again"
          autoComplete="on"
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
        />
        <button onClick={(e) => formSignup(e)}>Signup</button>
        <button onClick={googleAuth}>Signup with Google</button>
        {/* <button onClick={(e) => formSignup(e)}>Signup with Facebook</button> */}
        <p>{resData}</p>
      </form>
      <p>
        Allready have an account?{" "}
        <button onClick={() => navigate("/login")}>Sign in here</button>.
      </p>
    </>
  );
};

export default Registrate;
