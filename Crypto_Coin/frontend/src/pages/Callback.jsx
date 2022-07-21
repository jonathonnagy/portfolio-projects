import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/auth";

import CircularProgress from '@mui/material/CircularProgress';

const Callback = () => {
	const { socialLogin } = useAuth();
	const navigate = useNavigate()
  
	useEffect(() => {
		const loginWithCode = async () =>{
			const params = new URLSearchParams(window.location.search);
			const code = params.get("code");
			// console.log(code)
	
			if (code) {
				await socialLogin(code, "google");
				// return navigate('/profile')
			}
			navigate('/')
		}
		loginWithCode()
	  // eslint-disable-next-line
	  }, []);

  return (
	<div className='loading-spinner'>
		<CircularProgress color="inherit" size={80} />
	</div>
  )
}

export default Callback