import React, { useEffect, useState } from "react";
import mobileBg from "../assets/images/mobile-bg.png";
import logo from "../assets/images/convo-logo.png";
import hand from "../assets/images/hand.png";
import signupImg from "../assets/images/signup-img.png";
import laptopBg from "../assets/images/laptop-bg.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";
import { signupEmailPass, updateUserName } from "../firebase/firebase";

const Signup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const userCredential = await signupEmailPass(email, password);
      updateUserName(name);
      dispatch(
        setUser({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          displayName: userCredential.user.displayName,
          photoURL: userCredential.user.photoURL,
        })
      );
      console.log("User signed up:", userCredential);
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${laptopBg})` }}
    >
      <div className="flex flex-col md:flex-row w-screen md:w-[85%] md:h-[85%] justify-center align-center h-screen rounded-xl overflow-hidden shadow-2xl" style={{ backgroundImage: `url(${laptopBg})` }}>
        {/* Left Side - Image */}
        <div className="hidden md:flex bg-yellow-200 items-center justify-center p-4 w-full md:w-1/2">
          <img src={signupImg} alt="signup character" className="w-full max-w-sm" />
        </div>

        {/* Right Side - Form */}
        <div className="relative flex flex-col items-center justify-center bg-[url('../assets/images/mobile-bg.png')] bg-cover bg-center w-full md:w-1/2 p-4 md:p-8">
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

          <div className="mt-2 flex flex-col items-center justify-center w-[90%] md:w-[22rem]">
            <Box
              component="section"
              sx={{ border: "4px solid black" }}
              className="p-1 lg:w-75 md:w-68  bg-white rounded-lg flex flex-col items-center w-full"
            >
              <form action="" className="flex flex-col mb-2 gap-2 w-full">
                <TextField
                  id="name"
                  label="Enter your name"
                  variant="standard"
                  value={name}
                  onChange={handleNameChange}
                  name="name"
                />
                <TextField
                  id="email"
                  label="Enter your email"
                  variant="standard"
                  value={email}
                  onChange={handleEmailChange}
                  name="email"
                />
                <TextField
                  id="password"
                  label="Enter your password"
                  variant="standard"
                  value={password}
                  onChange={handlePassChange}
                  name="password"
                />
              </form>
            </Box>
            <button
              className="text-white px-8 py-2 mt-4 rounded-3xl md:border-4 border-3 border-black font-semibold bg-[linear-gradient(to_right,_#2A7B9B_0%,_#57C785_50%,_#EDDD53_100%)] hover:opacity-90 transition"
              onClick={handleSubmit}
            >
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
    </div>
  );
};

export default Signup;
