import React from 'react'


const ProfilePicture = (prop) => {
  return (
    <div className={`h-10 aspect-square flex items-center justify-center p-1 border-2 ${prop.border} backdrop-blur-3xl mx-2 rounded-full`}>
      <img src={prop.img} alt="DP" className={`${prop.size} h-8 w-8 object-cover rounded-full`} />
    </div>
  );
};

export default ProfilePicture

