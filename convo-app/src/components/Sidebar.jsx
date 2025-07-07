import React from 'react'
import ChatItem from './ChatItem'
import maleDP from '../assets/images/man.png'

const Sidebar = () => {
  return (


    // <div className=' sidebar w-1/4 h-full  bg-cover bg-fixed p-4'>

    //   <div className=" space-y-4 overflow-y-auto">

    //         <div className='chat-option w-full h-20'><ChatItem img={maleDP} name={"Akhil"} /></div>
    //         <div className='chat-option w-full h-20'><ChatItem img={maleDP} name={"Akhil"} /></div>
    //         <div className='chat-option w-full h-20'><ChatItem img={maleDP} name={"Akhil"} /></div>
    //         <div className='chat-option w-full h-20'><ChatItem img={maleDP} name={"Akhil"} /></div>
    //         <div className='chat-option w-full h-20'><ChatItem img={maleDP} name={"Akhil"} /></div>
    //         <div className='chat-option w-full h-20'><ChatItem img={maleDP} name={"Akhil"} /></div>
    //         <div className='chat-option w-full h-20'><ChatItem img={maleDP} name={"Akhil"} /></div>
    //         <div className='chat-option w-full h-20'><ChatItem img={maleDP} name={"Akhil"} /></div>
    //         <div className='chat-option w-full h-20'><ChatItem img={maleDP} name={"Akhil"} /></div>
    //         <div className='chat-option w-full h-20'><ChatItem img={maleDP} name={"Akhil"} /></div>
        

    //   </div>
    // </div>

     <div
      className="sidebar w-1/4 h-full bg-fixed bg-cover p-6 overflow-y-auto custom-scrollbar">

      <div className="search-box h-10 w-full mb-5 relative flex items-center justify-center backdrop-blur-3xl">
        <input type="text" className='w-full h-full border-2 border-gray-500 rounded-sm p-2 placeholder-black font-medium' placeholder='Search in chat' />
        <button className='absolute right-1 h-8 w-8 bg-gray-600 rounded-sm flex items-center justify-center '>
           <img src="/public/images/search.png" className='h-3/4 cursor-pointer' alt="" />
        </button>
       
      </div>

      <div className="space-y-4">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="chat-option w-full h-20">
            <ChatItem img={maleDP} name={`Akhil ${i + 1}`} lastmsg={"Good morning"} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar