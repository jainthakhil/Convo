import React from 'react'
import MessageShape from './components/MessageShape'
import './App.css'
import './index.css'
// import Login from './authentication/Login'
// import ReplyShape from './components/ReplyShape'
// import Chatbox from './components/Chatbox'
// import Sidebar from './components/Sidebar'
import Signup from './authentication/Signup'


const App = () => {
  return (
    <div className='app h-screen flex overflow-auto'> 
    {/* <Login/> */}
    {/* //formerly overflow-hidden */}
    <Signup/>
    {/* <Sidebar/>
    <Chatbox/> */}
    
      
    </div>
  )
}

export default App