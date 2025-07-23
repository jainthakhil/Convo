import React from 'react';
import logo from '/images/logo.png'; // Replace with your logo path
import ProfilePicture from './ProfilePicture';
import userDP from '../assets/images/man.png'; // Replace with user's image

const Navbar = () => {
    return (
        <nav className="w-full h-16 bg-[#2A2D3E] text-white flex items-center justify-between px-4 shadow-md">
            {/* Logo or Brand */}
            <div className="flex items-center gap-2">
                <img src={logo} alt="Convo Logo" className="h-10 w-10" />
                <h1 className="text-lg font-bold tracking-wide">Convo</h1>
            </div>

            {/* Right Side: Profile / Buttons */}
            <div className="flex items-center gap-4">
                <button className="px-3 py-1 bg-green-500 hover:bg-green-600 rounded text-sm font-medium transition">
                    New Chat
                </button>
                <ProfilePicture img={userDP} border="border-gray-400" />
            </div>
        </nav>
    );
};

export default Navbar;
