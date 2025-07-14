import React from 'react'
import MessageBox from './MessageBox'
import ReplyBox from './ReplyBox'
import maleDp from '../assets/images/man.png'
import femaleDp from '../assets/images/woman.png'
import ShareFileBtn from './ShareFileBtn'
import SendMsgBtn from './SendMsgBtn'

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

    <div className=" chat-box w-3/4 h-full min-w-[400px] flex flex-col bg-fixed bg-contain bg-no-repeat">

      {/* Scrollable messages */}
      <div className="flex flex-col overflow-y-auto custom-scrollbar p-4 space-y-3 text-end">
        {[...Array(8)].map((_, i) => (
          <React.Fragment key={i}>
            <MessageBox img={femaleDp} />
            <ReplyBox img={maleDp} />
          </React.Fragment>
        ))}
      </div>

      {/* Input at bottom */}
      <div className=" w-full h-14 bg-white p-2">

        <div className="reply-input h-full w-full flex items-center gap-2 pr-2">
          <ShareFileBtn />
          {/* <button className=' h-3/4'>
            <img src="/images/attach.png" className='h-full cursor-pointer' alt="" />
          </button> */}

          <input
            type="text"
            placeholder="Type a message..."
            className="h-full flex-1 px-3 border outline-none rounded-lg"
          />
          <button className=' h-3/4'>
            <img src="/images/send.png" className='h-full cursor-pointer' alt="" />
          </button>
          {/* <SendMsgBtn/> */}

        </div>

      </div>
    </div>
  )
}

export default Chatbox;