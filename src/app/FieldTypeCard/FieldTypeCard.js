import React from 'react';

const FieldTypeCard = ({ icon: Icon, bgColor, borderColor, label, IconClass }) => {
  return (
    Icon ? <div className='custom-1:max-w-[117px] custom-2:max-w-full max-w-full w-full custom-2:h-[120px] h-[65px] custom-2:px-[25px] px-[13px] custom-2:py-[16px] py-[8px] bg-white custom-2:rounded-lg rounded-[4px] flex flex-col justify-center items-center custom-2:gap-[20px] gap-[5px] shadow-custom-2'>
      <div className={`custom-2:w-[44px] w-[24px] custom-2:h-[44px] h-[24px] rounded-[3px] custom-2:rounded-[6px] ${bgColor} ${borderColor} border-[1px] flex justify-center items-center`}>
        <Icon className={IconClass} />
      </div>
      <p className='custom-2:text-[14px] text-[7px] text-custom-blue font-medium custom-2:leading-[14px] leading-[7px] text-center'>{label}</p>
    </div>
      :
      <div className='custom-1:max-w-[117px] custom-2:max-w-[107px] max-w-[63px] w-full custom-2:h-[120px] h-[64px] custom-1:px-[25px] px-[13px] custom-1:py-[16px] py-[8px] bg-[#FFFFFFB2] backdrop-blur-[2px] bg-opacity-[.02] custom-2:scale-[1.82] scale-[1.7] custom-2:-translate-y-2 -translate-y-[8px] rotate-[7deg] custom-2:-translate-x-20 -translate-x-4 custom-2:rounded-lg rounded-md flex flex-col justify-center items-center custom-2:gap-[20px] gap-[5px]'>
        <div className='custom-2:max-w-[44px] max-w-[30px] w-full custom-2:h-[44px] h-[30px] font-Inter custom-2:rounded-lg rounded-[2px] bg-purple-custom-2 text-white  flex justify-center items-center ' >
          H1
        </div>
        <p className='custom-2:text-[14px] text-[7px] text-custom-blue font-medium custom-2:leading-[14px] leading-[7px] text-center'>{label}</p>
      </div>
  );
};

export default FieldTypeCard;
