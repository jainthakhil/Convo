import React from 'react'
import MessageShape from './components/MessageShape'
import './App.css'
import './index.css'

// import ReplyShape from './components/ReplyShape'
// import Chatbox from './components/Chatbox'
// import Sidebar from './components/Sidebar'
// import Signup from './authentication/Signup'
import Login from './authentication/Login'
// import ForgotPassword from './authentication/ForgotPassword'

const App = () => {
  return (
    <div className='app h-screen flex overflow-auto'> 
    {/* <ForgotPassword/> */}
    <Login/>
    {/* //formerly overflow-hidden */}
    {/* <Signup/> */}
    {/* <Sidebar/>
    <Chatbox/> */}
    
      
    </div>
  )
}

export default App