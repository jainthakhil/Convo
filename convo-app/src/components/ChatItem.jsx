import React from 'react'
import ProfilePicture from './ProfilePicture';

const ChatItem = ({ img, name, lastmsg }) => {

    const timeFun = () => {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

        return `${hours}:${minutes} ${ampm}`;
    }
    const time = timeFun();

    return (
        <article className="chat-item w-full flex items-center justify-center text-gray-800 border-1 border-gray-500 rounded-4xl cursor-pointer hover:backdrop-blur-[2px]">
            {/* <img src={prop.img} alt="DP" className='rounded-full w-12 aspect-square border-3 p-1 border-white backdrop-blur-3xl' /> */}
            <ProfilePicture
                img={img}
                // size={'h-8 w-8'}
                border="border-gray-500"
            />

            <div className=' text-sm h-max w-fit flex-1 p-3 text-left'>
                <p className='font-bold'>{name}</p>
                <p className="last-msg">
                    {lastmsg}
                </p>
            </div>
            <div className="time-sec w-fit p-2 text-[10px]">
                <p>{time}</p>
            </div>

        </article>
    )
}

export default ChatItem