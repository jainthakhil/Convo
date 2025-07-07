import React from 'react'

const ChatItem = (prop) => {
    return (
        <div className="chat-item w-full h-20 flex items-center justify-start rounded-md text-gray-800">
            <img src={prop.img} alt="DP" className='rounded-full h-15 w-15 border-3 p-1 border-white backdrop-blur-3xl' />

            <div className=' text-md h-max w-fit p-3 text-left'> 
            <p className='text-lg font-bold'>{prop.name}</p>
            <p className="last-msg">
                {prop.lastmsg}
            </p>
            </div>

        </div>
    )
}

export default ChatItem