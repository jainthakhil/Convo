import React from "react";

import mobileBg from "../assets/images/mobile-bg.png";
import logo from "../assets/images/convo-logo.png";
import hand from "../assets/images/hand.png";
import signupImg from "../assets/images/signup-img.png";
import laptopBg from '../assets/images/laptop-bg.png';

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Signup = () => {
  return (
    <div
      className="overflow-hidden w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${laptopBg})` }}
    >
      <div className="flex flex-col md:flex-row w-[90%] md:w-[70%] h-[90%] rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundImage: `url(${laptopBg})` }}>
        {/* Left Side - Image */}
        <div className="bg-yellow-200 flex items-center justify-center p-4 w-full md:w-1/2">
          <img src={signupImg} alt="signup character" className="w-full max-w-sm" />
        </div>

        {/* Right Side - Form */}
        <div
          className="relative flex flex-col items-center justify-center bg-[url('../assets/images/mobile-bg.png')] bg-cover bg-center w-full md:w-1/2 p-4 md:p-8"
        >
          {/* Header */}
          <div className="relative mb-4 w-fit">
            <img src={hand} alt="hand wave" className="absolute -top-6 -left-7 w-12 z-10" />
            <Box
              component="section"
              sx={{ border: "4px solid black" }}
              className="bg-yellow-300 px-4 py-2 rounded-lg shadow-lg z-0"
            >
              <h1 className="font-bold font-akaya text-center text-sm md:text-base">
                Heyy! Enter below your details to signup
              </h1>
            </Box>
          </div>

          {/* Form */}
          <Box
            component="section"
            sx={{ border: "4px solid black" }}
            className="bg-white rounded-lg p-4 w-64 md:w-80"
          >
            <form className="flex flex-col gap-3">
              <TextField label="Enter your email" variant="standard" required/>
              <TextField label="Enter your email" variant="standard" required/>
              <TextField label="Enter your Password" variant="standard" required/>
            </form>

            {/* OR Divider */}
            <div className="flex items-center justify-center gap-2 my-3 text-sm font-semibold">
              <span className="w-1/3 h-px bg-black" />
              <span>or</span>
              <span className="w-1/3 h-px bg-black" />
            </div>

            {/* Social Buttons (use your actual icons if needed) */}
            <div className="flex items-center justify-center gap-4 mt-2">
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="w-6 h-6 cursor-pointer" />
              <img src="https://img.icons8.com/ios-filled/50/000000/email-open.png" alt="Email" className="w-6 h-6 cursor-pointer" />
              <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook" className="w-6 h-6 cursor-pointer" />
            </div>
          </Box>

          {/* Submit Button */}
          <button className="cursor-pointer text-white px-8 py-2 mt-4 rounded-3xl border-4 border-black font-semibold bg-[linear-gradient(to_right,#2A7B9B_0%,#57C785_50%,_#EDDD53_100%)] hover:opacity-90 transition">
            submit
          </button>

          {/* Login Link */}
          <p className="text-white text-sm md:text-base mt-2">
            Already have an account?{" "}
            <a href="/signin" className="underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
