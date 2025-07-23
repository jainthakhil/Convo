import React, { useState } from 'react';
import logo from '/images/logo.png'; // Replace with your logo path
import ProfilePicture from './ProfilePicture';
import userDP from '../assets/images/man.png'; // Replace with user's image
import { logOut } from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUser } from '../redux/features/userSlice';
import { useSelector } from 'react-redux';

const Navbar = (img, name) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();

    let userName = "User";
    if (user?.displayName) {
        userName = user.displayName;
    }
    const handleLogout = async () => {
        try {
            dispatch(clearUser());
            await logOut()
            navigate('/signin')
        }
        catch (error) {
            console.log(error)
        }

    }
    return (
        <nav className="w-full h-16 bg-[#2A2D3E] text-white flex items-center justify-between px-4 shadow-md">
            {/* Logo or Brand */}
            <div className="flex items-center gap-2">
                <img src={logo} alt="Convo Logo" className="h-10 w-10" />
                <h1 className="text-lg font-bold tracking-wide">Convo</h1>
            </div>

            {/* Right Side: Profile / Buttons */}
            <div className="flex items-center gap-4">
                <button onClick={handleLogout} className="px-3 py-1 bg-blue-300 hover:bg-blue-500 rounded text-sm font-medium transition">
                    Logout
                </button>
                <span>{userName || "User"}</span>

                <ProfilePicture img={userDP} border="border-gray-400" />
            </div>
        </nav>
    );
};

export default Navbar;
