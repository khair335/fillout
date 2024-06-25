import React from 'react';

const IconCard = ({ icon: Icon, bgColor, borderColor, label }) => {
  return (
    <div  className='rounded-2xl custom-1:max-w-[165px] max-w-[130px] w-full h-[162px] bg-white custom-1:p-[26px] p-3 flex flex-col justify-center items-center gap-5 shadow-custom-1 w-'>
      <div className={`custom-1:max-w-[76px] max-w-[60px] flex justify-center items-center w-full custom-1:h-[76px] h-[60px] border-[1px] ${borderColor} ${bgColor} rounded-lg`}>
        <Icon className='text-white text-2xl custom-2:text-5xl' />
      </div>
      <p className='text-custom-blue text-[17px] font-medium leading-[10px]'>{label}</p>
    </div>
  );
};

export default IconCard;
