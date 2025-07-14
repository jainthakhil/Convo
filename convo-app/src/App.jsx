
import React from 'react'
import './App.css'
import './index.css'
import Chatbox from './components/Chatbox'
import Sidebar from './components/Sidebar'


const App = () => {
  return (
    <div className='app h-screen flex overflow-auto'> 
    {/* //formerly overflow-hidden */}
    <Sidebar/>
    <Chatbox/>
    </div>
  )
}

export default App