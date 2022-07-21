import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/auth";
import Button from '@mui/material/Button';


const Navbar = () => {
	const navigate = useNavigate()
  const { setUser } = useAuth()
  const token = localStorage.getItem('token')

  // const nav = (path) =>{
	// 	console.log('routing in progress') //Barmilyen route elotti logika
	// 	navigate(path)
	// }

  const removeToken = ()=> {
    localStorage.removeItem('token')
    setUser(null)
    navigate('/login')

  }

  // useEffect(() => {
  //  console.log(isToken)
  // }, [isToken])
  
  return (
    <>
    
    {token && 
      <nav>
        <Button onClick={() => navigate("/")} size="large" sx={{color:'#B4945A'}}>Browse</Button>
        <Button onClick={() => navigate("/mycoins")} size="large" sx={{color:'#B4945A'}}>MyCoins</Button>
        <Button onClick={() => navigate("/profile")} size="large" sx={{color:'#B4945A'}}>Profile</Button>
        <Button onClick={removeToken} variant="contained" size="large" sx={{bgcolor: "text.secondary"}}>Logout</Button>
      </nav>

    }
    </>
     
  );
};

export default Navbar;
