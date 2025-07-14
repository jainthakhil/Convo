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
      className="sidebar w-1/4 h-full min-w-[200px] bg-fixed bg-cover p-6 overflow-y-auto custom-scrollbar">

      <div className="search-box h-10 w-full mb-5 flex items-center justify-center backdrop-blur-3xl border-1 border-gray-500 rounded-sm p-1">

        <input type="text" className='w-full h-full placeholder-gray font-xs outline-none focus:outline-none' placeholder='Search in chat ' />

        <button className=' h-full aspect-square bg-gray-600 rounded-sm flex items-center justify-center '>
           <img src="/public/images/search.png" className='h-3/4 cursor-pointer hover:scale-[1.1] transition-all ease-in-out' alt="" />
        </button>
       
      </div>

      <div className="mb-5">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="chat-option w-full h-max my-2">
            <ChatItem img={maleDP} name={`Akhil ${i + 1}`} lastmsg={"Good morning"} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar