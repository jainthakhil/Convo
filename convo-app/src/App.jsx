
import React from 'react'
import MessageShape from './components/MessageShape'
import './App.css'
import './index.css'
import ReplyShape from './components/ReplyShape'
import Chatbox from './components/Chatbox'
import Sidebar from './components/Sidebar'


const App = () => {
  return (
    <div className='app h-screen flex overflow-hidden'>
    <Sidebar/>
    <Chatbox/>
    
      
    </div>
  )
}

export default App