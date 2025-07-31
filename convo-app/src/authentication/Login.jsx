import React, { useState } from 'react'
import mobileBg from "../assets/images/mobile-bg.png";
import logo from "../assets/images/convo-logo.png";
import hand from '../assets/images/hand.png';
import loginImg from '../assets/images/login-img.png';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/features/userSlice';
import { signinWithEmailPass } from '../firebase/firebase';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePassChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async () => {
    try {
      const userCredential = await signinWithEmailPass(email, password);
      if (userCredential)
        dispatch(setUser({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          displayName: userCredential.user.displayName,
          photoURL: userCredential.user.photoURL
        }));
      console.log(userCredential);
      navigate(`/:${userCredential.user.uid}`)

    }
    catch (error) {
      console.log(error);
    }

  }
  return (
    <>
      <div
        className=" login bg-fixed bg-cover bg-center h-screen w-screen"
        style={{ backgroundImage: `url(${mobileBg})` }}
      >

        <div className="flex items-center justify-center pt-4">
          <img src={logo} alt="logo convo" />
        </div>

        <div className="mt-6 relative w-fit items-center justify-center mx-auto">
          <img src={hand} alt="hand img" className="absolute -top-7 -left-9 z-10 w-16" />
          <Box
            component="section"
            sx={{ border: "4px solid black" }}
            className="bg-yellow-300 p-1 md:p-3 md:w-95 w-65 rounded-lg flex flex-col shadow-lg relative z-0"
          >
            <h1 className="font-bold font-akaya text-center">Welcome to Convo! Enter your details to login.</h1>
          </Box>
        </div>

        <div className="mt-4 flex flex-col items-center justify-center">
          <Box
            component="section"
            sx={{ border: "4px solid black" }}
            className="p-1 md:p-2 w-65 md:w-95 bg-white rounded-lg flex flex-col items-center reply-box"
          >
            <form action="" className="flex flex-col mb-2 gap-2 w-60 md:w-85">
              <TextField
                id="standard-basic"
                label="Enter your email"
                variant="standard"
                value={email}
                onChange={handleEmailChange}
                name="email"
              />
              <TextField
                id="standard-basic"
                label="Enter your password"
                variant="standard"
                value={password}
                onChange={handlePassChange}
                name="password"
              />
            </form>
          </Box>
          <button className="text-white md:px-10 px-8 py-2 mt-4 rounded-3xl md:border-4 border-3 border-black font-semibold bg-[linear-gradient(to_right,_#2A7B9B_0%,_#57C785_50%,_#EDDD53_100%)] hover:opacity-90 transition" onClick={handleSubmit}>Submit</button>
          <p className="text-white md:text-base text-sm mt-2">New to Convo? <a className='underline' href="/signup">Signup</a></p>
        </div>
      </div>
    </>
  );
}

export default Login
