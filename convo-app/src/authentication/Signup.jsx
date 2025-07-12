import React, { useState } from "react";
import signupImg from "../assets/images/signup-img.png";
import laptopBg from "../assets/images/laptop-bg.png";
import hand from "../assets/images/hand.png";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";
import { signupEmailPass, updateUserName } from "../firebase/firebase";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { motion } from "framer-motion";

const Signup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const toggleShowPass = () => setShowPass(prev => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.warning("Please fill in all fields!");
      return;
    }

    try {
      const userCredential = await signupEmailPass(email, password);
      await updateUserName(name);

      dispatch(setUser({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName,
        photoURL: userCredential.user.photoURL,
      }));

      toast.success("Signup successful!");
    } catch (error) {
      toast.error(`Signup failed: ${error.message}`);
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
          <img src={signupImg} alt="Signup character" className="w-full max-w-sm" />
        </aside>

        {/* Right Side - Signup Form */}
        <section className="relative flex flex-col items-center justify-center bg-[url('../assets/images/mobile-bg.png')] bg-cover bg-center w-full md:w-1/2 p-4 md:p-8">
          {/* Header */}
          <header className="relative mb-4 w-[90%]">
            <img src={hand} alt="Waving hand" className="absolute -top-7 -left-8 w-16 hand-wave z-10" />
            <div className="bg-yellow-300 px-4 py-2 rounded-lg shadow-lg z-0 border-2">
              <h1 className="font-bold font-akaya text-center text-sm md:text-base">
                Heyy! Enter below your details to signup
              </h1>
            </div>
          </header>

          {/* Form Section with Framer Motion */}
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
                variant="filled"
                InputProps={{ disableUnderline: true }}
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#ffffffaa",
                  "&:hover": { backgroundColor: "#fff" },
                  input: { paddingLeft: 1 },
                }}
                id="name"
                label="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                fullWidth
              />
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
              <TextField
                id="password"
                label="Enter your password"
                variant="filled"
                type={showPass ? "text" : "password"}
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleShowPass} edge="end">
                        {showPass ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#ffffffaa",
                  "&:hover": { backgroundColor: "#fff" },
                  input: { paddingLeft: 1 },
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                fullWidth
              />

              <button
                type="submit"
                className="relative overflow-hidden px-8 py-2 rounded-3xl text-white font-semibold bg-gradient-to-r from-[#2A7B9B] via-[#57C785] to-[#EDDD53] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_#2A7B9B88]"
              >
                Submit
              </button>
            </form>

            <p className="text-white text-sm md:text-base mt-2">
              Already have an account?{" "}
              <a href="/signin" className="underline">
                Login
              </a>
            </p>
          </motion.section>
        </section>
      </section>
    </main>
  );
};

export default Signup;
