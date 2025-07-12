import React from "react";

import mobileBg from "../assets/images/mobile-bg.png";
import logo from "../assets/images/convo-logo.png";
import hand from '../assets/images/hand.png';

import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';

const Signup = () => {
  return (
    <>
      <div
        className="bg-fixed bg-cover bg-center h-screen w-screen"
        style={{ backgroundImage: `url(${mobileBg})` }}
      >

        <div className="flex items-center justify-center mt-4">
          <img src={logo} alt="logo convo" />
        </div>

        <div className="mt-6 relative w-fit items-center justify-center mx-auto">
          <img src={hand} alt="hand img" className="absolute -top-7 -left-9 z-10 w-16"/>
          <Box
            component="section"
            sx={{ p: 1, border: "4px solid black" }}
            className="bg-yellow-300 w-65 rounded-lg flex flex-col shadow-lg relative z-0"
          >
            <h1 className="font-bold font-akaya text-center">Welcome to Convo! Enter your details to get started.</h1>
          </Box>
        </div>

        <div className="mt-4 flex flex-col items-center justify-center">
          <Box
            component="section"
            sx={{ p: 1, border: "4px solid black" }}
            className="w-65 bg-white rounded-lg flex flex-col items-center justify-center shadow-lg"
          >
          <form action="" className="flex flex-col mt-0 gap-2 w-60">
            <TextField id="standard-basic" label="Enter your name" variant="standard" />
            <TextField id="standard-basic" label="Enter your email" variant="standard" />
            <TextField id="standard-basic" label="Enter your password" variant="standard" />
          </form>
          </Box>
          <button className="text-white px-8 py-2 mt-4 rounded-3xl border-3 border-black font-semibold bg-[linear-gradient(to_right,_#2A7B9B_0%,_#57C785_50%,_#EDDD53_100%)] hover:opacity-90 transition">Submit</button>
          <p className="text-white text-sm mt-2">Already have an account? <a href="/">Login</a></p>
        </div>
      </div>
    </>
  );
};

export default Signup;
