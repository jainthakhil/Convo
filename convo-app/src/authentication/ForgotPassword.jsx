import React, { useState } from "react";
import forgotImg from "../assets/images/forgot-img.png";
import laptopBg from "../assets/images/laptop-bg.png";
import hand from "../assets/images/hand.png";
import TextField from "@mui/material/TextField";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase"; // adjust path if needed
import { Link } from "react-router-dom";

import mobileBg from "../assets/images/mobile-bg.png";
import logo from "../assets/images/convo-logo.png";
import hand from "../assets/images/hand.png";
import forgotImg from "../assets/images/forgot-img.png";
import laptopBg from "../assets/images/laptop-bg.png";
import hand from "../assets/images/hand.png";
import TextField from "@mui/material/TextField";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase"; // adjust path if needed
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.warning("Please enter your email!");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset link sent to your email!");
      setEmail("");
    } catch (error) {
      toast.error(`Failed: ${error.message}`);
    }
  };

  return (
    <main
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${laptopBg})` }}
    >
      <section
        className="flex flex-col md:flex-row w-screen md:w-[85%] md:h-[85%] justify-center align-center h-screen rounded-xl overflow-hidden shadow-2xl"
        style={{ backgroundImage: `url(${laptopBg})` }}
      >
        {/* Left Side - Illustration */}
        <aside className="hidden md:flex bg-yellow-200 items-center justify-center p-4 w-full md:w-1/2">
          <img src={forgotImg} alt="Forgot Password" className="w-full max-w-sm" />
        </aside>

        {/* Right Side - Form */}
        <section className="relative flex flex-col items-center justify-center bg-[url('../assets/images/mobile-bg.png')] bg-cover bg-center w-full md:w-1/2 p-4 md:p-8">
          {/* Header */}
          <header className="relative mb-4 w-[90%]">
            <img src={hand} alt="Waving hand" className="absolute -top-7 -left-8 w-16 hand-wave z-10" />
            <div className="bg-yellow-300 px-4 py-2 rounded-lg shadow-lg z-0 border-2">
              <h1 className="font-bold font-akaya text-center text-sm md:text-base">
                Oops! Forgot your password? Enter your email to get a reset link
              </h1>
            </div>
          </header>

          {/* Form Section with animation */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-2 flex flex-col items-center justify-center w-full max-w-md"
          >
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4 p-4 bg-white/20 backdrop-blur-md rounded-lg items-center shadow-xl"
            >
              <TextField
                id="email"
                label="Enter your email"
                variant="filled"
                InputProps={{ disableUnderline: true }}
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#ffffffaa",
                  "&:hover": { backgroundColor: "#fff" },
                  input: { paddingLeft: 1 },
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                fullWidth
              />

              <button
                type="submit"
                className="relative overflow-hidden px-8 py-2 rounded-3xl text-white font-semibold bg-gradient-to-r from-[#2A7B9B] via-[#57C785] to-[#EDDD53] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_#2A7B9B88]"
              >
                Send Reset Link
              </button>
            </form>

            <p className="text-white text-sm md:text-base mt-2">
              <Link to="/signin" className="underline">
                Back to login?
              </Link>
            </p>
          </motion.section>
        </section>
      </section>
    </main>
  );
};

export default ForgotPassword;