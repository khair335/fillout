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
      <div className='bg-secondary w-full pt-[146px] pb-[160px]'>
        <div className='max-w-[1432px] w-full xl:pl-[40px] md:pl-5 xxl:pl-[79.53px] pl-4 xl:pr-[33px] md:pr-5 xxl:pr-[63px] pr-5 mx-auto'>
          <div className='w-full  mx-auto flex justify-center items-center'>
            <h1 className='text-primary relative md:leading-[111.6px] leading-[49.92px] font-medium md:text-[124px] text-[48px] text-center'>
              <span className='block  relative'>
                <div className='md:max-w-[76px] max-w-[40px] flex justify-center items-center w-full md:h-[76px] h-[40px] rotate-12 md:top-[-35px] top-[-20px] md:left-[-45px] left-[-22px] bg-[#22C55E] rounded lg:rounded-md absolute'>
                  <FaAsterisk className='text-white text-2xl lg:text-5xl' />
                </div>
                Easy to use.</span>
              <span className='block relative'>

                Endlessly
                <div className='md:max-w-[76px] max-w-[40px] w-full flex justify-center items-center md:h-[76px] h-[40px] -rotate-12 top-[0px] md:right-4 right-[-6px] bg-[#F7502B] rounded lg:rounded-md absolute'>
                  <FaCode className='text-white font-semibold  text-2xl lg:text-5xl' />
                </div></span>
              <span className='block'>customizable</span>
            </h1>

          </div>
          <p className='text-center md:text-[32px] text-[23px]  font-normal text-white md:pt-14 pt-5 lg:pt-10'>Build the exact form you need, in minutes.</p>

          <div className='mt-[20px] lg:mt-[72px] flex flex-col lg:gap-[90px] gap-[24px]'>
            <div className='bg-tertiary px-5 lg:px-[29.84px] lg:pt-[29.84px] pt-5 rounded-2xl flex lg:flex-row flex-col justify-between overflow-y-hidden xxl:gap-[68px] gap-5'>
              <div className='max-w-[555px] w-full pb-8'>
                <h3 className='xxl:text-[32px] text-[23px] text-black font-medium leading-[23px] lg:leading-[38.4px] pb-3 lg:pb-10'>Collect the right answers with 50+ customizable field types.</h3>
                <p className='text-lg text-black leading-[25.2px]'>Collect the right answers with 50+ customizable field types.
                  One question at a time or multiple questions per page you choose.</p>

                <div className='mt-5 lg:mt-12 lg:flex hidden justify-start items-center xxl:gap-[30px] gap-3'>
                  <div style={{ boxShadow: '7.96px 7.96px 15.91px 0px #241B051A' }} className='rounded-2xl xxl:max-w-[165px] max-w-[130px] w-full h-[162px] bg-white xxl:p-[26px] p-3 flex flex-col justify-center items-center gap-5'>
                    <div className='xxl:max-w-[76px] max-w-[60px] flex justify-center items-center w-full xxl:h-[76px] h-[60px] border-[1px] border-[#00B09A] bg-[#17CCB6] rounded-lg'>
                      <FaCheck className='text-white text-2xl lg:text-5xl' />
                    </div>
                    <p className='text-[#374151] text-[17px] font-medium leading-[10.09px]'>Checkbox</p>
                  </div>
                  <div style={{ boxShadow: '7.96px 7.96px 15.91px 0px #241B051A' }} className='rounded-2xl xxl:max-w-[165px] max-w-[130px] w-full h-[162px] bg-white xxl:p-[26px] p-3 flex flex-col justify-center items-center gap-5'>
                    <div className='xxl:max-w-[76px] max-w-[60px] flex justify-center items-center w-full xxl:h-[76px] h-[60px] border-[1px] border-[#CFA12D] bg-primary rounded-lg'>
                      <FaToggleOff className='text-white text-2xl lg:text-5xl' />
                    </div>
                    <p className='text-[#374151] text-[17px] font-medium leading-[10.09px]'>Checkbox</p>
                  </div>
                  <div style={{ boxShadow: '7.96px 7.96px 15.91px 0px #241B051A' }} className='rounded-2xl xxl:max-w-[165px]  max-w-[130px] w-full h-[162px] bg-white xxl:p-[26px] p-3 flex flex-col justify-center items-center gap-5'>
                    <div className='xxl:max-w-[76px] max-w-[60px] w-full xxl:h-[76px] h-[60px] flex justify-center items-center  border-[1px] border-[#179C48] bg-[#22C55E] rounded-lg'>
                      <FaImage className='text-white text-2xl lg:text-4xl' />
                    </div>
                    <p className='text-[#374151] text-[17px] font-medium leading-[10.09px]'>Checkbox</p>
                  </div>
                </div>
              </div>
              <div className='bg-[#e9e9e9] xxl:p-[65px] xl:p-3 p-[19px] xxl:pb-0 rounded-[10px] grid grid-cols-3 gap-[15px] lg:-mb-8 -mb-9'>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='xxl:max-w-[117.33px] lg:max-w-[73px] max-w-[62.82px] w-full lg:h-[120.34px] h-[64.44px] lg:px-[24.86px] px-[13.41px] lg:py-[15.65px] py-[8.38px] bg-white lg:rounded-lg rounded-[4.28px] flex flex-col justify-center items-center lg:gap-[20px] gap-[5px]'>
                  <div className='lg:w-[43.94px] w-[23.53px] lg:h-[43.94px] h-[23.53px] rounded-[3.14px] lg:rounded-[5.86px] bg-[#F0FDF4] border-[#BBF7D0] border-[1.46px] flex justify-center items-center'>
                    <FaEquals className='text-sm lg:text-xl text-[#22C55E]' />
                  </div>
                  <p className='lg:text-[13.92px] text-[7.46px] text-[#374151] font-medium lg:leading-[13.92px] leading-[7.46px] text-center'>Short Answer</p>
                </div>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='xxl:max-w-[117.33px] lg:max-w-[73px] max-w-[62.82px] w-full lg:h-[120.34px] h-[64.44px] lg:px-[24.86px] px-[13.41px] lg:py-[15.65px] py-[8.38px] bg-white lg:rounded-lg rounded-[4.28px] flex flex-col justify-center items-center lg:gap-[20px] gap-[5px]'>
                  <div className='lg:w-[43.94px] w-[23.53px] lg:h-[43.94px] h-[23.53px] rounded-[3.14px] lg:rounded-[5.86px] bg-[#F0FDF4] border-[#BBF7D0] border-[1.46px] flex justify-center items-center'>
                    <PiDotsThreeCircleFill className='text-base lg:text-2xl text-[#22C55E]' />
                  </div>
                  <p className='lg:text-[13.92px] text-[7.46px] text-[#374151] font-medium lg:leading-[13.92px] leading-[7.46px] text-center'>Multiple choice</p>
                </div>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='xxl:max-w-[117.33px] lg:max-w-[73px] max-w-[62.82px] w-full lg:h-[120.34px] h-[64.44px] lg:px-[24.86px] px-[13.41px] lg:py-[15.65px] py-[8.38px] bg-white lg:rounded-lg rounded-[4.28px] flex flex-col justify-center items-center lg:gap-[20px] gap-[5px]'>
                  <div className='lg:w-[43.94px] w-[23.53px] lg:h-[43.94px] h-[23.53px] rounded-[3.14px] lg:rounded-[5.86px] bg-[#F0FDF4] border-[#BBF7D0] border-[1.46px] flex justify-center items-center'>
                    <HiMail className='text-base lg:text-2xl text-[#22C55E]' />
                  </div>
                  <p className='lg:text-[13.92px] text-[7.46px] text-[#374151] font-medium lg:leading-[13.92px] leading-[7.46px] text-center'>Email Input</p>
                </div>


                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='xxl:max-w-[117.33px] lg:max-w-[73px] max-w-[62.82px] w-full lg:h-[120.34px] h-[64.44px] xxl:px-[24.86px] px-[13.41px] xxl:py-[15.65px] py-[8.38px] bg-[#FFFFFFB2] backdrop-blur-[2px] bg-opacity-[.02] lg:scale-[1.82] scale-[1.7] lg:-translate-y-2 -translate-y-[8px] rotate-[7deg] lg:-translate-x-20 -translate-x-4 rounded-lg flex flex-col justify-center items-center lg:gap-[20px] gap-[5px]'>
                  <div className='lg:max-w-[43.94px] max-w-[30px] w-full lg:h-[43.94px] h-[54.89px] font-Inter lg:rounded-lg rounded-[4.28px] bg-[#8C3BF3] text-white  flex justify-center items-center ' >
                    H1
                  </div>
                  <p className='lg:text-[13.92px] text-[7.46px] text-[#374151] font-medium lg:leading-[13.92px] leading-[7.46px] text-center'>Heading</p>
                </div>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='xxl:max-w-[117.33px] lg:max-w-[73px] max-w-[62.82px] w-full lg:h-[120.34px] h-[64.44px] lg:px-[24.86px] px-[13.41px] lg:py-[15.65px] py-[8.38px] bg-white lg:rounded-lg rounded-[4.28px] flex flex-col justify-center items-center lg:gap-[20px] gap-[5px]'>
                  <div className='lg:w-[43.94px] w-[23.53px] lg:h-[43.94px] h-[23.53px] rounded-[3.14px] lg:rounded-[5.86px] bg-[#F8FAFC] border-[#E2E8F0] border-[1.46px] flex justify-center items-center'>
                    <HiDocumentText className='text-base lg:text-2xl text-[#64748B]' />
                  </div>
                  <p className='lg:text-[13.92px] text-[7.46px] text-[#374151] font-medium lg:leading-[13.92px] leading-[7.46px] text-center'>  Paragraph</p>
                </div>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='xxl:max-w-[117.33px] lg:max-w-[73px] max-w-[62.82px] w-full lg:h-[120.34px] h-[64.44px] lg:px-[24.86px] px-[13.41px] lg:py-[15.65px] py-[8.38px] bg-white lg:rounded-lg rounded-[4.28px] flex flex-col justify-center items-center lg:gap-[20px] gap-[5px]'>
                  <div className='lg:w-[43.94px] w-[23.53px] lg:h-[43.94px] h-[23.53px] rounded-[3.14px] lg:rounded-[5.86px] bg-[#F8FAFC] border-[#E2E8F0] border-[1.46px] flex justify-center items-center'>
                    <RiNotification2Fill className='text-sm lg:text-xl text-[#64748B]' />
                  </div>
                  <p className='lg:text-[13.92px] text-[7.46px] text-[#374151] font-medium lg:leading-[13.92px] leading-[7.46px] text-center'>  Banner</p>
                </div>

                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='xxl:max-w-[117.33px] lg:max-w-[73px] max-w-[62.82px] w-full lg:h-[120.34px] h-[64.44px] lg:px-[24.86px] px-[13.41px] lg:py-[15.65px] py-[8.38px] bg-white lg:rounded-lg rounded-[4.28px] flex flex-col justify-center items-center lg:gap-[20px] gap-[5px]'>
                  <div className='lg:w-[43.94px] w-[23.53px] lg:h-[43.94px] h-[23.53px] rounded-[3.14px] lg:rounded-[5.86px] bg-[#FFFBEB] border-[#FFE4A0] border-[1.46px] flex justify-center items-center'>
                    <IoCodeOutline className='text-sm lg:text-xl text-primary rotate-90' />
                  </div>
                  <p className='lg:text-[13.92px] text-[7.46px] text-[#374151] font-medium lg:leading-[13.92px] leading-[7.46px] text-center'>  Dropdown</p>
                </div>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='xxl:max-w-[117.33px] lg:max-w-[73px] max-w-[62.82px] w-full lg:h-[120.34px] h-[64.44px] lg:px-[24.86px] px-[13.41px] lg:py-[15.65px] py-[8.38px] bg-white lg:rounded-lg rounded-[4.28px] flex flex-col justify-center items-center lg:gap-[20px] gap-[5px]'>
                  <div className='lg:w-[43.94px] w-[23.53px] lg:h-[43.94px] h-[23.53px] rounded-[3.14px] lg:rounded-[5.86px] bg-[#FFFBEB] border-[#FFE4A0] border-[1.46px] flex justify-center items-center'>
                    <HiDocumentSearch className='text-base lg:text-2xl text-primary' />
                  </div>
                  <p className='lg:text-[13.92px] text-[7.46px] text-[#374151] font-medium lg:leading-[13.92px] leading-[7.46px] text-center'>  Submission</p>
                </div>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='xxl:max-w-[117.33px] lg:max-w-[73px] max-w-[62.82px] w-full lg:h-[120.34px] h-[64.44px] lg:px-[24.86px] px-[13.41px] lg:py-[15.65px] py-[8.38px] bg-white lg:rounded-lg rounded-[4.28px] flex flex-col justify-center items-center lg:gap-[20px] gap-[5px]'>
                  <div className='lg:w-[43.94px] w-[23.53px] lg:h-[43.94px] h-[23.53px] rounded-[3.14px] lg:rounded-[5.86px] bg-[#FFFBEB] border-[#FFE4A0] border-[1.46px] flex justify-center items-center'>
                    <HiMiniSquares2X2 className='text-base lg:text-xl text-primary' />
                  </div>
                  <p className='lg:text-[13.92px] text-[7.46px] text-[#374151] font-medium lg:leading-[13.92px] leading-[7.46px] text-center'>  Choice Matrix</p>
                </div>



              </div>
            </div>
            <div className='flex lg:flex-row flex-col justify-between items-stretch lg:gap-[8px] gap-[24px]'>
              <div className='bg-tertiary  rounded-2xl lg:px-[29.84px] px-5 lg:pt-[29.84px] pt-5 xxl:max-w-[603px] lg:max-w-[45%] max-w-full w-full flex-1 lg:overflow-y-clip  overflow-y-hidden'>
                <h3 className='text-black xxl:text-[32px] text-[23px] lg:px-[29.84px] px-0 font-medium lg:leading-[38.4px] leading-6 pr-3 lg:pr-20'>Compute prices, quiz scores, and dynamic variables with calculations.</h3>
                <div className='flex items-center relative '>
                  <div className='xxl:max-w-[265.54px] xxl:min-w-[265.54px] lg:max-w-[153.92px] lg:min-w-[153.92px] min-w-[153.92px]  max-w-full w-full relative z-[2]  bg-[#E9E9E9] px-2 lg:px-[15px] lg:pt-5 pt-2 rounded-lg mt-9 pb-16 rounded-b-none '>
                    <div className='max-w-[26px] flex justify-center items-center w-full h-[26px] bg-[#8C3BF3] rounded absolute -right-2 -top-2 rotate-6'>

                      <HiDocumentText className='text-white' />

                    </div>
                    <h4 className='lg:text-lg text-[10px] font-semibold text-[#64748B] text-center '>Number of Employees</h4>
                    <div className='mt-4 flex flex-col gap-[10px] relative'>

                      <div className='lg:h-[34px] h-[19.71px] w-full bg-white rounded lg:rounded-lg flex justify-start items-center px-[10px] gap-[10px]'>
                        <div className='w-[11.53px] h-[11.53px] lg:w-5 lg:h-5 border-[1px] border-[#E9E9E9] rounded-full bg-white'></div>
                        <p className='text-[#64748B] text-[8.12px] lg:text-sm font-normal'>0-50</p>
                      </div>
                      <div className='lg:h-[34px] h-[19.71px] w-full bg-white rounded lg:rounded-lg flex justify-start items-center px-[10px] gap-[10px]'>
                        <div className='w-[11.53px] h-[11.53px] lg:w-5 lg:h-5 border-[3px] border-[#E9E9E9] rounded-full bg-[#64748B]'></div>
                        <p className='text-[#64748B] text-[8.12px] lg:text-sm font-normal'>50-200</p>
                      </div>
                      <div className='lg:h-[34px] h-[19.71px] w-full bg-white rounded lg:rounded-lg flex justify-start items-center px-[10px] gap-[10px]'>
                        <div className='w-[11.53px] h-[11.53px] lg:w-5 lg:h-5 border-[1px] border-[#E9E9E9] rounded-full bg-white'></div>
                        <p className='text-[#64748B] text-[8.12px] lg:text-sm font-normal'>200-500</p>
                      </div>
                      <div className='lg:h-[34px] h-[19.71px] w-full bg-white rounded lg:rounded-lg flex justify-start items-center px-[10px] gap-[10px]'>
                        <div className='w-[11.53px] h-[11.53px] lg:w-5 lg:h-5 border-[1px] border-[#E9E9E9] rounded-full bg-white'></div>
                        <p className='text-[#64748B] text-[8.12px] lg:text-sm font-normal'>500-More</p>
                      </div>
                    </div>
                  </div>
                  <div className='h-[3px] lg:block hidden w-[58%] bg-[#B7BBBE] absolute z-[1]'>

                  </div>
                  <div
                    style={{ boxShadow: '7.96px 7.96px 15.91px 0px #241B0526' }}
                    className='border-[#A96CF6] lg:border-[1px] border-[0.58px] lg:rounded-2xl rounded-[9.27px] px-[10px] relative z-[2] flex gap-3 lg:h-[74.84px] h-[48.9px] items-center lg:max-w-[272.65px] max-w-[160.28px] w-full lg:translate-x-12 -translate-x-8 bg-[#E4DDFD] -rotate-2'
                  >
                    <div className='lg:max-w-[55.24px] lg:min-w-[55.24px] max-w-[32.02px] min-w-[32.02px]   w-full lg:h-[53.46px] h-[30.99px] bg-[#8C3BF3] border-[1px] border-[#A96CF6] flex  justify-center items-center rounded-[4.64px] lg:rounded-lg text-center text-white lg:text-[35.64px] text-[20.66px] font-medium'>
                      %
                    </div>
                    <p className='text-[#8C3BF3] font-medium lg:text-[28.91px] text-[16.53px]'>Calculating...</p>

                  </div>
                  <div className=' block lg:hidden w-[100%] h-full border-[2px] right-0 border-[#B7BBBE] rounded-lg border-l-0 border-b-0 top-[49%] absolute z-[1]'></div>
                </div>
              </div>
              <div className='bg-tertiary  relative rounded-2xl  lg:pt-[29.84px] pt-5 xxl:max-w-[603px] lg:max-w-[45%] max-w-full w-full  flex-1 overflow-y-clip'>
                <h3 className='text-black xxl:text-[32px] text-[23px] lg:px-[29.84px] px-5  font-medium lg:leading-[38.4px] leading-6 pr-[21px] lg:pr-20'>Dynamically show or hide questions, modify page logic, enforce validation, and more.</h3>

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
                <div className='relative lg:h-[260px] h-auto lg:hidden block'>
                  <div style={{width:"calc(101% + 46px)"}} className='lg:absolute relative top-[-136px] bottom-0 right-0 lg:h-[260px] h-auto left-[-46px] '>
                    <Image
                    src={details_svg_1_mobile}
                    height="auto"
                    width="auto"
                    alt=''
                    className='w-full'
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
