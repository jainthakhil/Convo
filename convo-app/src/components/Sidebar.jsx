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
      className="sidebar w-1/4 h-full bg-fixed bg-cover p-4 overflow-y-auto custom-scrollbar"
    >
      <div className="space-y-4">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="chat-option w-full h-20">
            <ChatItem img={maleDP} name={`Akhil ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar