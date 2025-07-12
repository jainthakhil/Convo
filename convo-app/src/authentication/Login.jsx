import React, { useState } from "react";
import loginImg from "../assets/images/login-img.png";
import laptopBg from "../assets/images/laptop-bg.png";
import hand from "../assets/images/hand.png";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";
import { signinWithEmailPass } from "../firebase/firebase";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { motion } from "framer-motion";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePassChange = (e) => setPassword(e.target.value);
  const toggleShowPass = () => setShowPass((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warning("Please enter both email and password!");
      return;
    }

    try {
      const userCredential = await signinWithEmailPass(email, password);
      dispatch(
        setUser({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          displayName: userCredential.user.displayName,
          photoURL: userCredential.user.photoURL,
        })
      );
      toast.success("Login successful!");
      navigate(`/:${userCredential.user.uid}`);
    } catch (error) {
      toast.error(`Login failed: ${error.message}`);
    }
  };

  return (
    <div>
      
    </div>
  )
}

export default login
