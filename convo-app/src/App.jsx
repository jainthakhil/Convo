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
import Home from './pages/Home';
import Login from './authentication/Login';
import Signup from './authentication/Signup'


const App = () => {
  return (
    <Router>
      <div className='app h-screen w-full'>
        {/* <ForgotPassword/> */}
        {/* <Login/> */}
        {/* //formerly overflow-hidden */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <a href="/">HOME </a>
         <a href="/signin"> LOGIN </a>
          <a href="/signup">SIGNUP</a>
        {/* <Sidebar />
        <Chatbox /> */}


      </div>

    </Router>

  )
}

export default App