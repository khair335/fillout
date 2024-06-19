import Image from 'next/image';
import img1 from '../assets/Screenshot_5 (1).png'
import details_svg_1 from '../assets/details-img.svg'
import details_svg_1_mobile from '../assets/details-img-mobile.svg'
import IconCollection from './IconCollection/IconCollection';
import { FaAsterisk, FaCheck, FaCode, FaEquals, FaImage, FaToggleOff } from "react-icons/fa6";
import { PiDotsThreeCircleFill } from "react-icons/pi";
import { HiDocumentSearch, HiDocumentText, HiMail } from "react-icons/hi";
import { RiNotification2Fill } from "react-icons/ri";
import { IoCodeOutline } from "react-icons/io5";
import { HiMiniSquares2X2 } from "react-icons/hi2";
export default function Home() {
  return (
    <div className='mx-auto'>
      <div className='bg-secondary w-full pt-[146px] pb-[160px] overflow-hidden'>
        <div className='max-w-[1432px] w-full xl:pl-[40px] md:pl-5 xxl:pl-[80px] pl-4 xl:pr-[33px] md:pr-8 xxl:pr-[63px] pr-5 mx-auto'>
          <div className='w-full  mx-auto flex justify-center items-center'>
            <h1 className='text-primary relative lg:leading-[111px] leading-[50px] font-medium lg:text-[124px] text-[48px] text-center'>
              <span className='block  relative'>
                <div className='lg:max-w-[76px] max-w-[40px] flex justify-center items-center w-full lg:h-[76px] h-[40px] rotate-12 lg:top-[-35px] top-[-20px] lg:left-[-45px] left-[-22px] bg-[#22C55E] rounded lg:rounded-lg absolute'>
                  <FaAsterisk className='text-white text-2xl lg:text-5xl' />
                </div>
                Easy to use.</span>
              <span className='block relative'>

                Endlessly
                <div className='lg:max-w-[76px] max-w-[40px] w-full flex justify-center items-center lg:h-[76px] h-[40px] -rotate-12 top-[0px] lg:right-4 right-[-6px] bg-[#F7502B] rounded lg:rounded-lg absolute'>
                  <FaCode className='text-white font-semibold  text-2xl lg:text-5xl' />
                </div></span>
              <span className='block'>customizable</span>
            </h1>

          </div>
          <p className='text-center lg:text-[32px] text-[23px]  font-normal text-white lg:pt-14 pt-5 '>Build the exact form you need, in minutes.</p>

          <div className='mt-[20px] lg:mt-[72px] flex flex-col lg:gap-[90px] gap-[24px] lg:max-w-full max-w-[460px] mx-auto'>
            <div className='bg-tertiary px-5 lg:px-[30px] lg:pt-[30px] pt-5 rounded-2xl flex lg:flex-row flex-col justify-between overflow-y-hidden xxl:gap-[68px] lg:gap-[84px] gap-[33px]'>
              <div className='max-w-[477px] w-full lg:pb-8 pb-0'>
                <h3 className='xxl:text-[32px] text-[23px] text-black font-medium leading-[23px] lg:leading-[38px] pb-3 lg:pb-10'>Collect the right answers with 50+ customizable field types.</h3>
                <p className='text-lg text-black leading-[25px]'>Collect the right answers with 50+ customizable field types.
                  One question at a time or multiple questions per page you choose.</p>

                <div className='mt-5 lg:mt-12 lg:flex hidden justify-start items-center xxl:gap-[30px] gap-3'>
                  <div style={{ boxShadow: '7.96px 7.96px 15.91px 0px #241B051A' }} className='rounded-2xl xxl:max-w-[165px] max-w-[130px] w-full h-[162px] bg-white xxl:p-[26px] p-3 flex flex-col justify-center items-center gap-5'>
                    <div className='xxl:max-w-[76px] max-w-[60px] flex justify-center items-center w-full xxl:h-[76px] h-[60px] border-[1px] border-[#00B09A] bg-[#17CCB6] rounded-lg'>
                      <FaCheck className='text-white text-2xl lg:text-5xl' />
                    </div>
                    <p className='text-[#374151] text-[17px] font-medium leading-[10px]'>Checkbox</p>
                  </div>
                  <div style={{ boxShadow: '7.96px 7.96px 15.91px 0px #241B051A' }} className='rounded-2xl xxl:max-w-[165px] max-w-[130px] w-full h-[162px] bg-white xxl:p-[26px] p-3 flex flex-col justify-center items-center gap-5'>
                    <div className='xxl:max-w-[76px] max-w-[60px] flex justify-center items-center w-full xxl:h-[76px] h-[60px] border-[1px] border-[#CFA12D] bg-primary rounded-lg'>
                      <FaToggleOff className='text-white text-2xl lg:text-5xl' />
                    </div>
                    <p className='text-[#374151] text-[17px] font-medium leading-[10px]'>Checkbox</p>
                  </div>
                  <div style={{ boxShadow: '7.96px 7.96px 15.91px 0px #241B051A' }} className='rounded-2xl xxl:max-w-[165px]  max-w-[130px] w-full h-[162px] bg-white xxl:p-[26px] p-3 flex flex-col justify-center items-center gap-5'>
                    <div className='xxl:max-w-[76px] max-w-[60px] w-full xxl:h-[76px] h-[60px] flex justify-center items-center  border-[1px] border-[#179C48] bg-[#22C55E] rounded-lg'>
                      <FaImage className='text-white text-2xl lg:text-4xl' />
                    </div>
                    <p className='text-[#374151] text-[17px] font-medium leading-[10px]'>Checkbox</p>
                  </div>
                </div>
              </div>
              <div className='lg:max-w-1/2 lg:ml-0 ml-[14%] max-w-full bg-[#e9e9e9] xxl:p-[35px] xl:p-3 p-[19px] xxl:pb-0 rounded-[10px] grid grid-cols-3 gap-[15px] lg:-mb-10 -mb-9'>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='xxl:max-w-[117px] lg:max-w-full max-w-full w-full lg:h-[120px] h-[65px] lg:px-[25px] px-[13px] lg:py-[16px] py-[8px] bg-white lg:rounded-lg rounded-[4px] flex flex-col justify-center items-center lg:gap-[20px] gap-[5px]'>
                  <div className='lg:w-[50px] w-[24px] lg:h-[44px] h-[24px] rounded-[3px] lg:rounded-[6px] bg-[#F0FDF4] border-[#BBF7D0] border-[1px] flex justify-center items-center'>
                    <FaEquals className='text-sm lg:text-xl text-[#22C55E]' />
                  </div>
                  <p className='lg:text-[14px] text-[7px] text-[#374151] font-medium lg:leading-[14px] leading-[7px] text-center'>Short Answer</p>
                </div>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='xxl:max-w-[117px] lg:max-w-full max-w-full w-full lg:h-[120px] h-[65px] lg:px-[25px] px-[13px] lg:py-[16px] py-[8px] bg-white lg:rounded-lg rounded-[4px] flex flex-col justify-center items-center lg:gap-[20px] gap-[5px]'>
                  <div className='lg:w-[44px] w-[24px] lg:h-[44px] h-[24px] rounded-[3px] lg:rounded-[6px] bg-[#F0FDF4] border-[#BBF7D0] border-[1px] flex justify-center items-center'>
                    <PiDotsThreeCircleFill className='text-base lg:text-2xl text-[#22C55E]' />
                  </div>
                  <p className='lg:text-[14px] text-[7px] text-[#374151] font-medium lg:leading-[14px] leading-[7px] text-center'>Multiple choice</p>
                </div>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='xxl:max-w-[117px] lg:max-w-full max-w-full w-full lg:h-[120px] h-[64px] lg:px-[25px] px-[13px] lg:py-[16px] py-[8px] bg-white lg:rounded-lg rounded-[4px] flex flex-col justify-center items-center lg:gap-[20px] gap-[5px]'>
                  <div className='lg:w-[44px] w-[24px] lg:h-[44px] h-[24px] rounded-[3px] lg:rounded-[6px] bg-[#F0FDF4] border-[#BBF7D0] border-[1px] flex justify-center items-center'>
                    <HiMail className='text-base lg:text-2xl text-[#22C55E]' />
                  </div>
                  <p className='lg:text-[14px] text-[7px] text-[#374151] font-medium lg:leading-[14px] leading-[7px] text-center'>Email Input</p>
                </div>


                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='xxl:max-w-[117px] lg:max-w-[107px] max-w-[63px] w-full lg:h-[120px] h-[64px] xxl:px-[25px] px-[13px] xxl:py-[16px] py-[8px] bg-[#FFFFFFB2] backdrop-blur-[2px] bg-opacity-[.02] lg:scale-[1.82] scale-[1.7] lg:-translate-y-2 -translate-y-[8px] rotate-[7deg] lg:-translate-x-20 -translate-x-4 lg:rounded-lg rounded-md flex flex-col justify-center items-center lg:gap-[20px] gap-[5px]'>
                  <div className='lg:max-w-[44px] max-w-[30px] w-full lg:h-[44px] h-[30px] font-Inter lg:rounded-lg rounded-[2px] bg-[#8C3BF3] text-white  flex justify-center items-center ' >
                    H1
                  </div>
                  <p className='lg:text-[14px] text-[7px] text-[#374151] font-medium lg:leading-[14px] leading-[7px] text-center'>Heading</p>
                </div>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='xxl:max-w-[117px] lg:max-w-full max-w-full w-full lg:h-[120px] h-[64px] lg:px-[25px] px-[13px] lg:py-[16px] py-[8px] bg-white lg:rounded-lg rounded-[4px] flex flex-col justify-center items-center lg:gap-[20px] gap-[5px]'>
                  <div className='lg:w-[44px] w-[24px] lg:h-[44px] h-[24px] rounded-[3px] lg:rounded-[6px] bg-[#F8FAFC] border-[#E2E8F0] border-[1px] flex justify-center items-center'>
                    <HiDocumentText className='text-base lg:text-2xl text-[#64748B]' />
                  </div>
                  <p className='lg:text-[14px] text-[7px] text-[#374151] font-medium lg:leading-[14px] leading-[7px] text-center'>  Paragraph</p>
                </div>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='xxl:max-w-[117px] lg:max-w-full max-w-full w-full lg:h-[120px] h-[64px] lg:px-[25px] px-[13px] lg:py-[16px] py-[8px] bg-white lg:rounded-lg rounded-[4px] flex flex-col justify-center items-center lg:gap-[20px] gap-[5px]'>
                  <div className='lg:w-[44px] w-[24px] lg:h-[44px] h-[24px] rounded-[3px] lg:rounded-[6px] bg-[#F8FAFC] border-[#E2E8F0] border-[1px] flex justify-center items-center'>
                    <RiNotification2Fill className='text-sm lg:text-xl text-[#64748B]' />
                  </div>
                  <p className='lg:text-[14px] text-[7px] text-[#374151] font-medium lg:leading-[14px] leading-[7px] text-center'>  Banner</p>
                </div>

                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='xxl:max-w-[117px] lg:max-w-full max-w-full w-full lg:h-[120px] h-[64px] lg:px-[25px] px-[13px] lg:py-[16px] py-[8px] bg-white lg:rounded-lg rounded-[4px] flex flex-col justify-center items-center lg:gap-[20px] gap-[5px]'>
                  <div className='lg:w-[44px] w-[24px] lg:h-[44px] h-[24px] rounded-[3px] lg:rounded-[6px] bg-[#FFFBEB] border-[#FFE4A0] border-[1px] flex justify-center items-center'>
                    <IoCodeOutline className='text-sm lg:text-xl text-primary rotate-90' />
                  </div>
                  <p className='lg:text-[14px] text-[7px] text-[#374151] font-medium lg:leading-[14px] leading-[7px] text-center'>  Dropdown</p>
                </div>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='xxl:max-w-[117px] lg:max-w-full max-w-full w-full lg:h-[120px] h-[65px] lg:px-[25px] px-[13px] lg:py-[16px] py-[8px] bg-white lg:rounded-lg rounded-[4px] flex flex-col justify-center items-center lg:gap-[20px] gap-[5px]'>
                  <div className='lg:w-[44px] w-[24px] lg:h-[44px] h-[24px] rounded-[3px] lg:rounded-[6px] bg-[#FFFBEB] border-[#FFE4A0] border-[1px] flex justify-center items-center'>
                    <HiDocumentSearch className='text-base lg:text-2xl text-primary' />
                  </div>
                  <p className='lg:text-[14px] text-[7px] text-[#374151] font-medium lg:leading-[14px] leading-[7px] text-center'>  Submission</p>
                </div>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='xxl:max-w-[117px] lg:max-w-full max-w-full w-full lg:h-[120px] h-[64px] lg:px-[24px] px-[13px] lg:py-[16px] py-[8px] bg-white lg:rounded-lg rounded-[4px] flex flex-col justify-center items-center lg:gap-[20px] gap-[5px]'>
                  <div className='lg:w-[44px] w-[24px] lg:h-[44px] h-[24px] rounded-[3px] lg:rounded-[6px] bg-[#FFFBEB] border-[#FFE4A0] border-[1px] flex justify-center items-center'>
                    <HiMiniSquares2X2 className='text-base lg:text-xl text-primary' />
                  </div>
                  <p className='lg:text-[14px] text-[7px] text-[#374151] font-medium lg:leading-[14px] leading-[7px] text-center'>  Choice Matrix</p>
                </div>



              </div>
            </div>
            <div className='flex lg:flex-row flex-col justify-between items-stretch lg:gap-[8px] gap-[24px]'>
              <div className='bg-tertiary  rounded-2xl lg:px-[30px] px-5 lg:pt-[30px] pt-5 xxl:max-w-[603px] lg:max-w-[48%] max-w-full w-full flex-1 lg:overflow-y-clip  overflow-y-hidden'>
                <h3 className='text-black xxl:text-[32px] text-[23px] lg:px-[30px] px-0 font-medium lg:leading-[38px] leading-6 pr-3 lg:pr-20'>Compute prices, quiz scores, and dynamic variables with calculations.</h3>
                <div className='flex items-center relative '>
                  <div className='xxl:max-w-[265px] xxl:min-w-[265px] xl:max-w-[245px] xl:min-w-[245px] lg:max-w-[154px] lg:min-w-[154px] min-w-[154px]  max-w-full w-full relative z-[2]  bg-[#E9E9E9] px-2 lg:px-[15px] lg:pt-5 pt-2 rounded-lg mt-9 pb-16 rounded-b-none '>
                    <div className='max-w-[26px] flex justify-center items-center w-full h-[26px] bg-[#8C3BF3] rounded absolute -right-2 -top-2 rotate-6'>

                      <HiDocumentText className='text-white' />

                    </div>
                    <h4 className='lg:text-lg text-[10px] font-semibold text-[#64748B] text-center '>Number of Employees</h4>
                    <div className='mt-4 flex flex-col gap-[10px] relative'>

                      <div className='lg:h-[34px] h-[20px] w-full bg-white rounded lg:rounded-lg flex justify-start items-center px-[10px] gap-[10px]'>
                        <div className='w-[12px] h-[12px] lg:w-5 lg:h-5 border-[1px] border-[#E9E9E9] rounded-full bg-white'></div>
                        <p className='text-[#64748B] text-[8px] lg:text-sm font-normal'>0-50</p>
                      </div>
                      <div className='lg:h-[34px] h-[20px] w-full bg-white rounded lg:rounded-lg flex justify-start items-center px-[10px] gap-[10px]'>
                        <div className='w-[12px] h-[12px] lg:w-5 lg:h-5 border-[3px] border-[#E9E9E9] rounded-full bg-[#64748B]'></div>
                        <p className='text-[#64748B] text-[8px] lg:text-sm font-normal'>50-200</p>
                      </div>
                      <div className='lg:h-[34px] h-[20px] w-full bg-white rounded lg:rounded-lg flex justify-start items-center px-[10px] gap-[10px]'>
                        <div className='w-[12px] h-[12px] lg:w-5 lg:h-5 border-[1px] border-[#E9E9E9] rounded-full bg-white'></div>
                        <p className='text-[#64748B] text-[8px] lg:text-sm font-normal'>200-500</p>
                      </div>
                      <div className='lg:h-[34px] h-[20px] w-full bg-white rounded lg:rounded-lg flex justify-start items-center px-[10px] gap-[10px]'>
                        <div className='w-[12px] h-[12px] lg:w-5 lg:h-5 border-[1px] border-[#E9E9E9] rounded-full bg-white'></div>
                        <p className='text-[#64748B] text-[8px] lg:text-sm font-normal'>500-More</p>
                      </div>
                    </div>
                  </div>
                  <div className='h-[3px] lg:block hidden w-[58%] bg-[#B7BBBE] absolute z-[1]'>

                  </div>
                  <div
                    style={{ boxShadow: '7.96px 7.96px 15.91px 0px #241B0526' }}
                    className='border-[#A96CF6] lg:border-[1px] border-[1px] lg:rounded-2xl rounded-[9px] px-[10px] relative z-[2] flex gap-3 lg:h-[75px] h-[49px] items-center lg:max-w-[273px] max-w-[160px] w-full lg:translate-x-12 -translate-x-8 bg-[#E4DDFD] -rotate-2'
                  >
                    <div className='lg:max-w-[55px] lg:min-w-[55px] max-w-[32px] min-w-[32px]   w-full lg:h-[53px] h-[31px] bg-[#8C3BF3] border-[1px] border-[#A96CF6] flex  justify-center items-center rounded-[5px] lg:rounded-lg text-center text-white lg:text-[36px] text-[21px] font-medium'>
                      %
                    </div>
                    <p className='text-[#8C3BF3] font-medium lg:text-[29px] text-[16px]'>Calculating...</p>

                  </div>
                  <div className=' block lg:hidden w-[100%] h-full border-[2px] right-0 border-[#B7BBBE] rounded-lg border-l-0 border-b-0 top-[49%] absolute z-[1]'></div>
                </div>
              </div>
              <div className='bg-tertiary  relative rounded-2xl  lg:pt-[30px] pt-5 xxl:max-w-[603px] lg:max-w-[48%] max-w-full w-full  flex-1 overflow-y-clip'>
                <h3 className='text-black xxl:text-[32px] text-[23px] lg:px-[30px] px-5  font-medium lg:leading-[38px] leading-6 pr-[21px] lg:pr-20 md:max-w-[95%] lg:max-w-[100%]'>Dynamically show or hide questions, modify page logic, enforce validation, and more.</h3>

                <div className='relative lg:h-[260px] h-auto lg:block hidden'>
                  <div className='lg:absolute relative top-0 bottom-0 right-[-56px] lg:h-[260px] h-auto left-0'>
                    <Image
                    src={details_svg_1}
                    height="auto"
                    width="auto"
                    alt=''
                    className=''
                  />
                </div>
                </div>
                <div className='relative lg:h-[260px] h-[250px] md:h-[242px] lg:hidden block'>
                  <div
                    // style={{ width: "calc(101% + 46px)" }}
                    className='custom-width lg:absolute relative top-[-136px] bottom-0 right-0 lg:h-[260px] h-auto left-[-46px] '>
                    <Image
                    src={details_svg_1_mobile}
                    height="auto"
                    width="auto"
                    alt=''
                    className='w-full max-h-[377px]'
                  />
                </div>
                </div>

              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
