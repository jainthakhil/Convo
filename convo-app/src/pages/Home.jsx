import React from 'react'
import Sidebar from '../components/Sidebar'
import Chatbox from '../components/Chatbox'

const Home = () => {
  return (
    <div className='h-screen w-full flex overflow-auto'>
        <Sidebar/>
        <Chatbox/>
    </div>
  )
}

export default Home