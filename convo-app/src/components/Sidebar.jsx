import React from 'react'
import ChatItem from './ChatItem'
import maleDP from '../assets/images/man.png'

const Sidebar = () => {
  return (

    <div className="sidebar-cont w-1/4 h-full min-w-[350px] flex flex-col items-center">

    <div className="logo-sec h-10 w-full flex items-center justify-start p-4">
    <h2 className='text-white font-bold '>CONVO</h2>

    </div>

      <div className="search-box h-15 w-full flex items-center bg-fixed z-10 p-4">

        <input type="text" className=' flex-1 h-10 placeholder-gray font-xs outline-none focus:outline-none backdrop-blur-3xl border-1 border-gray-500 rounded-tl-md rounded-bl-md p-2' placeholder='Search in chat ' />

        <button className=' h-10 w-10 bg-gray-600 rounded-tr-md rounded-br-md flex items-center justify-center '>
          <img src="/images/search.png" className='h-1/2 cursor-pointer hover:scale-[1.1] transition-all ease-in-out' alt="" />
        </button>

      </div>

      {/* <div
        className="sidebar custom-scrollbar overflow-y-auto "> */}

        <div className=" w-full flex-1 flex-col overflow-y-auto custom-scrollbar p-4 space-y-3 ">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="chat-option w-full h-max my-2">
              <ChatItem img={maleDP} name={`Akhil ${i + 1}`} lastmsg={"Good morning"} />
            </div>
          ))}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Sidebar