import React from 'react'
import ProfilePicture from './ProfilePicture'
const ChatHeader = (prop) => {
  return (
    <div className="chat-header w-full h-20 flex p-2 ">
          <div className="profile-sec w-1/2 flex items-center justify-start">
            <ProfilePicture
            img={prop.img}
            border="border-none"
            // size="h-40 w-40" 

            />
            <p>Name</p>
          </div>
          <div className="call-sec h-full w-1/2 flex items-center justify-end ">
            <img src="/images/voicecall.png" className='h-6 mx-1' alt="" />
            <img src="/images/videocall.png" className='h-6 mx-1' alt="" />
          </div>

        </div>
  )
}

export default ChatHeader