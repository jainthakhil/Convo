import React from 'react'
import Sidebar from '../components/Sidebar'
import Chatbox from '../components/Chatbox'

const Home = () => {
  return (
    <div className='h-screen w-full flex'>
      <a href="/">HOME </a> <br />
      <a href="/signin"> LOGIN </a> <br />
      <a href="/signup">SIGNUP</a>
    </div>
  )
}

export default Home