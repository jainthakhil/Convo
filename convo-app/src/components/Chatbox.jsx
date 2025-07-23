import React from 'react'
import MessageBox from './MessageBox'
import ReplyBox from './ReplyBox'
import maleDp from '../assets/images/man.png'
import femaleDp from '../assets/images/woman.png'
import ShareFileBtn from './ShareFileBtn'
import SendMsgBtn from './SendMsgBtn'
import ProfilePicture from './ProfilePicture'
import ChatHeader from './ChatHeader'

const Chatbox = () => {
  return (

    <main className=" chat-box w-3/4 h-full min-w-[400px] flex flex-col bg-fixed bg-contain bg-no-repeat">

      <ChatHeader
        img={maleDp}
        name={"Akhil"}
      />

      {/* Scrollable messages */}
      <section className="flex w-full flex-col overflow-y-auto custom-scrollbar p-4 space-y-3">

        {[...Array(8)].map((_, i) => (
          <React.Fragment key={i}>
            <MessageBox img={femaleDp} />
            <ReplyBox img={maleDp} />
          </React.Fragment>
        ))}
      </section>

      {/* Input at bottom */}
      <section className=" w-full h-14 bg-white p-2">

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

      </section>
    </main>
  )
}

export default Chatbox;