import React from 'react'


const ProfilePicture = ({ img, size, border }) => {
  return (
    <div className={`h-10 aspect-square flex items-center justify-center p-1 border-2 ${border} backdrop-blur-3xl mx-2 rounded-full`}>
      <img src={img} alt="DP" className={`${size} h-8 w-8 object-cover rounded-full`} />
    </div>
  );
};

export default ProfilePicture

