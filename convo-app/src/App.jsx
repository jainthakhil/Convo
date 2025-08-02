import { useEffect } from "react";
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
import MainChatPage from './pages/MainChatPage';
import Home from './pages/Home';
import Login from './authentication/Login';
import Signup from './authentication/Signup'
import ForgotPassword from './authentication/ForgotPassword';

import { useSelector } from 'react-redux';

import { ToastContainer } from "react-toastify";

const App = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user); // Get entire user object

  useEffect(() => {
    if (user && user.uid) {
      navigate()
      navigate(`/${user.uid}`);
    }
    // if (!user) {
    //   navigate('/signin'); // Redirect to login if not authenticated
    // } else {
    //   navigate(`/${user.uid}`); // Redirect to main chat page if logged in
    // }
  }, [user, navigate]);

  return (
    <div className='app h-screen w-full'>
      {/* <ForgotPassword/> */}
      {/* <Login/> */}
      {/* //formerly overflow-hidden */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path='/:uid' element={<MainChatPage />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* <Sidebar />
        <Chatbox /> */}
       <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

    </div>



  )
}

export default App