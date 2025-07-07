import React from 'react'
import MessageShape from './MessageShape'
import ReplyShape from './ReplyShape'
import maleDp from '../assets/images/man.png'
import femaleDp from '../assets/images/woman.png'

const Chatbox = () => {
  return (
    // <div className='fixed inset-0 flex justify-end'>
    //   <div className=" chat-box h-full w-3/4 flex pt-10 ">
    //     <div className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col">
    // <div className="w-3/4 h-full overflow-y-scroll">
    //   <div className="chat-box h-full w-full overflow-y-scroll ">

    //     <div className="h-full w-full flex flex-col gap-2 p-4 ">
    //       <MessageShape
    //         img={femaleDp}
    //       />
    //       <ReplyShape
    //         img={maleDp}
    //       />

    //       <MessageShape
    //         img={femaleDp}
    //       />
    //       <ReplyShape
    //         img={maleDp}
    //       />
    //       <MessageShape
    //         img={femaleDp}
    //       />
    //       <ReplyShape
    //         img={maleDp}
    //       />

    //       <MessageShape
    //         img={femaleDp}
    //       />
    //       <ReplyShape
    //         img={maleDp}
    //       />

    //       <MessageShape
    //         img={femaleDp}
    //       />
    //       <ReplyShape
    //         img={maleDp}
    //       />
    //     </div>
    //     <div className="chat-input w-full h-10 fixed bottom-0 right-5 bg-white rounded-lg border-4">
    //       <input type="text" placeholder='Message' />
    //     </div>
    //   </div>
    // </div>
    /* </div> */
    //    </div>
    //  </div>

     <div className=" chat-box w-3/4 h-full flex flex-col bg-fixed bg-contain bg-no-repeat">
      
      {/* Scrollable messages */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3">
        {[...Array(8)].map((_, i) => (
          <React.Fragment key={i}>
            <MessageShape img={femaleDp} />
            <ReplyShape img={maleDp} />
          </React.Fragment>
        ))}
      </div>

      {/* Input at bottom */}
      <div className=" w-full h-14 bg-white  p-2">
      <div className="reply-input relative h-full w-full flex items-center jusitfy-center">
           <input
          type="text"
          placeholder="Type a message..."
          className="w-full h-full px-3 rounded-lg border outline-none"
        />
        <button className='absolute top-1/2 right-3 transform -translate-y-1/2 h-3/4'>
             <img src="/public/images/send.png" className='h-full cursor-pointer' alt="" />
        </button>
       
      </div>
       
      </div>
    </div>
  )
}

export default Chatbox