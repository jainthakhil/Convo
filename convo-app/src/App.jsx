
import React from 'react'
import MessageShape from './components/MessageShape'
import './App.css'
import './index.css'
import ReplyShape from './components/ReplyShape'
import chatbg from '../public/images/chatbg.jpg'
import Chatbox from './components/Chatbox'
import Sidebar from './components/Sidebar'


const App = () => {
  return (
    <div className='app min-h-screen w-full flex justify-between'>
    <Sidebar/>
    <Chatbox/>
    
      
    </div>
  )
}

export default App