import React from 'react'
import ProfilePicture from './ProfilePicture';

const ReplyBox = ({ img, message }) => {

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
    <div className="reply self-end flex">

      {/* <img src={prop.img} alt="DP" className='rounded-full h-15 w-15 p-1 border-2 border-gray-300 backdrop-blur-3xl m-2' /> */}

      <div className='reply-box text-xs h-max max-w-100 w-fit p-3 text-justify bg-[#98A1BC] border-1 border-blue-300'>
        <p className=''> {message || "ReplyShape Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem magni, natus, provident quae voluptatibus ."}</p>
        <p className="text-xs text-gray-500 block text-right mt-1">{time}</p>
      </div>
      <ProfilePicture
        img={img}
        // size="w-8 h-8"
        border="border-blue-400"
      />

    </div>

  )
}

export default ReplyBox;