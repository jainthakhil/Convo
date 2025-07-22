import React, { useEffect, useState } from "react";
import mobileBg from "../assets/images/mobile-bg.png";
import logo from "../assets/images/convo-logo.png";
import hand from "../assets/images/hand.png";
import signupImg from "../assets/images/signup-img.png";
import laptopBg from '../assets/images/laptop-bg.png'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signupEmailPass, updateUserName, onAuthStateChange } from "../firebase/firebase";

const Signup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePassChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async () => {
    try {
      const userCredential = await signupEmailPass(email, password);
      updateUserName(name);
      dispatch(setUser({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName,
        photoURL: userCredential.user.photoURL
      }));
      console.log('User signed up:', userCredential);
    } catch (error) {
      console.error('Signup error:', error.message);
    }

  }

  return (
    <>
      <div className="w-screen h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${laptopBg})` }}>
        <div
          className="bg-fixed bg-cover bg-center h-[80%] w-[80%] rounded-xl shadow-2xl border-2 border-white flex flex-col items-center justify-start overflow-y-auto"
          style={{ backgroundImage: `url(${mobileBg})` }}
        >
          <div className="flex items-center justify-center mt-4">
            <img src={logo} alt="logo convo" />
          </div>

          <div className="mt-4 relative w-fit items-center justify-center mx-auto">
            <img
              src={hand}
              alt="hand img"
              className="absolute -top-7 -left-9 z-10 w-16"
            />
            <Box
              component="section"
              sx={{ border: "4px solid black" }}
              className="bg-yellow-300 p-1 md:p-2 md:w-95 w-65 rounded-lg flex flex-col shadow-lg relative z-0"
            >
              <h1 className="font-bold font-akaya text-center">
                Welcome to Convo! Enter your details to get started.
              </h1>
            </Box>
          </div>

          <div className="mt-2 flex flex-col items-center justify-center">
            <Box
              component="section"
              sx={{ border: "4px solid black" }}
              className="p-1 md:p-2 w-65 md:w-95 bg-white rounded-lg flex flex-col items-center"
            >
              <form action="" className="flex flex-col mb-2 gap-2 w-60 md:w-85">
                <TextField
                  id="standard-basic"
                  label="Enter your name"
                  variant="standard"
                  value={name}
                  onChange={handleNameChange}
                  name="name"
                />
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
            <button className="text-white px-8 py-2 mt-4 rounded-3xl md:border-4 border-3 border-black font-semibold bg-[linear-gradient(to_right,_#2A7B9B_0%,_#57C785_50%,_#EDDD53_100%)] hover:opacity-90 transition" onClick={handleSubmit}>
              Submit
            </button>
            <p className="text-white text-sm md:text-base mt-2">
              Already have an account?{" "}
              <a href="/signin" className="underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
