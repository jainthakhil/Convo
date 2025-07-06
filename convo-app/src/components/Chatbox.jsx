import React from 'react'
import MessageShape from './MessageShape'
import ReplyShape from './ReplyShape'
const Chatbox = () => {
  return (
    <div className='chat-box fixed inset-0 top-0 left-0 min-h-screen w-3/4 flex flex-col gap-2 p-4 overflow-y-auto self-end'>

    
    <MessageShape/>
      <ReplyShape/>

       <MessageShape/>
      <ReplyShape/>

       <MessageShape/>
      <ReplyShape/>

      <MessageShape/>
      <ReplyShape/>

      <MessageShape/>
      <ReplyShape/>
    
      
    </div>
  )
}

export default Chatbox