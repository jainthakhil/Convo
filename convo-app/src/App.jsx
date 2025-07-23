import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import './App.css'
import './index.css'
import Chatbox from './components/Chatbox'
import Sidebar from './components/Sidebar'
import MainChatPage from './components/MainChatPage';
import Home from './pages/Home';
import Login from './authentication/Login';
import Signup from './authentication/Signup'

import { logOut } from './firebase/firebase';
import { useSelector } from 'react-redux';
import MainChatPage from './components/MainChatPage';



const App = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <Router>
      <div className='app h-screen w-full'>
        {/* <ForgotPassword/> */}
        {/* <Login/> */}
        {/* //formerly overflow-hidden */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/:uid' element={<MainChatPage />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <a href="/">HOME </a>
        <a href="/signin"> LOGIN </a>
        <a href="/signup">SIGNUP</a>

        <button onClick={logOut}>LOGOUT</button>
        {/* <Sidebar />
        <Chatbox /> */}


      </div>

    </Router>

  )
}

export default App