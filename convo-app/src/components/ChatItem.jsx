import React from 'react'

const ChatItem = (prop) => {
    return (
        <div className="chat-item w-full h-20 flex items-center justify-start rounded-md text-white pl-5">
            <img src={prop.img} alt="DP" className='rounded-full h-15 w-15 border-4 border-white backdrop-blur-3xl' />

            <div className=' text-sm h-max w-fit p-3'> <p className='text-lg font-bold'>{prop.name}</p></div>
        </div>
    )
}

export default ChatItem