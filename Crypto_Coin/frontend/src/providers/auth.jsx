import React, { useContext, createContext, useState, useEffect } from "react";
import http from "axios";
import jwt from "jwt-decode";
const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [reloadPage, setReloadPage] = useState(false)

  const googleAuth = (e) => {
    e.preventDefault();
    const googleBaseUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const searchParams = new URLSearchParams();
    searchParams.append(
      "client_id",
      "458401439788-9te84kq1atnpao4epma7o6kir8oo6sam.apps.googleusercontent.com"
    );
    searchParams.append("scope", "openid");
    searchParams.append("redirect_uri", "http://localhost:3000/callback");
    searchParams.append("response_type", "code");
    // searchParams.append('prompt', 'select_account')

    const fullUrl = googleBaseUrl + "?" + searchParams.toString();
    window.open(fullUrl, "_self");
  };

  const socialLogin = async (code, provider) => {
    try {
      const response = await http.post("http://localhost:4000/api/user/login", {
        code,
        provider,
      });
      console.log(response);
      if (response?.status === 200) {
        setToken(response.data);
        setUser(jwt(response.data));
        localStorage.setItem("token", response.data);
      }
    } catch (error) {
      console.log(error);
      setToken(null);
    }
  };

  const logout = () => {
    setToken(null);
  };

  const registerUsername = async (username) => {
    try {
      const response = await http.post("http://localhost:4000/api/user/create", {
        username
      }, {
        headers: {
          'authorization': localStorage.getItem('token')
        }
      })
      console.log(response)
      if (response?.status === 200) {
        setToken(response.data);
        setUser(jwt(response.data));
        localStorage.setItem("token", response.data);
      }

    } catch (error) {
      console.log(error.response.data.error);
      console.log(error);

    }
  };


  const contextValue = {
    token,
    googleAuth,
    logout,
    socialLogin,
    user,
    setUser,
    registerUsername,
    reloadPage,
    setReloadPage
  };

  useEffect(() => {
    const tokenInStorage = localStorage.getItem("token");
    if (tokenInStorage) {
      setToken(tokenInStorage);
      setUser(jwt(tokenInStorage));
    }
  }, []);
  // console.log(user);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("add authProvider to root");
  return context;
};

export { AuthProvider, useAuth };
