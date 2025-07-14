import React from 'react'


const ProfilePicture = (prop) => {
  return (
    <div className={`h-fit flex items-center justify-center p-1 border-2 ${prop.border} backdrop-blur-3xl mx-2 rounded-full`}>
      <img src={prop.img} alt="DP" className={`${prop.size} object-cover rounded-full`} />
    </div>
  );
};

export default ProfilePicture

