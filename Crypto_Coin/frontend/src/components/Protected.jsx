import React, { useEffect } from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../providers/auth";

const Protected = ({ children }) => {
const location = useLocation();
const { token, user } = useAuth();
	

  return (
    <>
      {!token ? (
        <Navigate to={"/login"} />
      ) : !user.userId && location.pathname !== "/addusername" ? (
        <Navigate to={"/addusername"} />
      ) : (
        children 
      )}
    </>
  );
};

export default Protected;
