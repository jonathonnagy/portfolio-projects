import React, { useEffect, useState } from "react";
import { useAuth } from "../providers/auth";
import { Navigate, useNavigate } from "react-router-dom";

const AddUsername = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const { token, registerUsername, user } = useAuth();

  // const register = async () => {
  // 	const resp = post('/user/create', (username))

  // 		setUsername('')
  // 		navigate('/profile')
  // }

  useEffect(() => {
    if (!token) navigate('/login')
    if (user?.userId) navigate("/");
  }, [user]);

  // registerUsername(username);


  return (
    <>
      <div>Add Username</div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => registerUsername(username)}>Register</button>
    </>
  );
};

export default AddUsername;
