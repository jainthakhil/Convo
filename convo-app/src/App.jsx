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
    <div className='app h-screen flex overflow-auto'> 
    <Login/>
    {/* //formerly overflow-hidden */}
    <Signup/>
    {/* <Sidebar/>
    <Chatbox/> */}
    
      
    </div>



  )
}

export default App