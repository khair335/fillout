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
      <div >
        <div className='bg-custom-green font-bl-melody py-20 md:py-[146px] px-4 md:px-20 flex flex-col overflow-hidden'>
          <div className='w-full  mx-auto flex justify-center items-center'>
            <h1 className='text-primary relative custom-2:leading-[111px] leading-[50px] font-medium custom-2:text-[124px] text-[48px] text-center mb-[40px] custom-1:mb-[55px]'>
              <span className='block  relative'>
                <div className='custom-2:max-w-[76px] max-w-[40px] flex justify-center items-center w-full custom-2:h-[76px] h-[40px] rotate-12 custom-2:top-[-35px] top-[-20px] custom-2:left-[-45px] left-[-22px] bg-[#22C55E] rounded custom-2:rounded-lg absolute'>
                  <FaAsterisk className='text-white text-2xl custom-2:text-5xl' />
                </div>
                Easy to use.</span>
              <span className='block relative'>

                Endlessly
                <div className='custom-2:max-w-[76px] max-w-[40px] w-full flex justify-center items-center custom-2:h-[76px] h-[40px] -rotate-12 top-[0px] custom-2:right-4 right-[-6px] bg-[#F7502B] rounded custom-2:rounded-lg absolute'>
                  <FaCode className='text-white font-semibold  text-2xl custom-2:text-5xl' />
                </div></span>
              <span className='block'>customizable</span>
            </h1>

          </div>
          <p className='text-center custom-2:text-[32px] text-[23px]  font-normal text-white mb-[40px]  custom-1:mb-[72px]'>Build the exact form you need, in minutes.</p>

          <div className=' flex flex-col custom-2:gap-[60px] gap-[24px] custom-5:max-w-3xl custom-2:max-w-[1280px] mx-auto w-full max-w-md'>
            <div className='bg-tertiary px-5 custom-2:px-[30px] custom-2:pt-[30px] pt-5 rounded-2xl flex custom-2:flex-row flex-col justify-between overflow-y-hidden custom-1:gap-[68px] custom-2:gap-[84px] gap-[33px]'>
              <div className='max-w-[477px] w-full custom-2:pb-8 pb-0'>
                <h3 className='custom-1:text-[32px] text-[23px] text-black font-medium leading-[23px] custom-2:leading-[38px] pb-3 custom-2:pb-10'>Collect the right answers with 50+ customizable field types.</h3>
                <p className='text-lg text-black leading-[25px]'>Collect the right answers with 50+ customizable field types.
                  One question at a time or multiple questions per page you choose.</p>

                <div className='mt-5 custom-2:mt-12 custom-2:flex hidden justify-start items-center custom-1:gap-[30px] gap-3'>
                  <div style={{ boxShadow: '7.96px 7.96px 15.91px 0px #241B051A' }} className='rounded-2xl custom-1:max-w-[165px] max-w-[130px] w-full h-[162px] bg-white custom-1:p-[26px] p-3 flex flex-col justify-center items-center gap-5'>
                    <div className='custom-1:max-w-[76px] max-w-[60px] flex justify-center items-center w-full custom-1:h-[76px] h-[60px] border-[1px] border-[#00B09A] bg-[#17CCB6] rounded-lg'>
                      <FaCheck className='text-white text-2xl custom-2:text-5xl' />
                    </div>
                    <p className='text-[#374151] text-[17px] font-medium leading-[10px]'>Checkbox</p>
                  </div>
                  <div style={{ boxShadow: '7.96px 7.96px 15.91px 0px #241B051A' }} className='rounded-2xl custom-1:max-w-[165px] max-w-[130px] w-full h-[162px] bg-white custom-1:p-[26px] p-3 flex flex-col justify-center items-center gap-5'>
                    <div className='custom-1:max-w-[76px] max-w-[60px] flex justify-center items-center w-full custom-1:h-[76px] h-[60px] border-[1px] border-[#CFA12D] bg-primary rounded-lg'>
                      <FaToggleOff className='text-white text-2xl custom-2:text-5xl' />
                    </div>
                    <p className='text-[#374151] text-[17px] font-medium leading-[10px]'>Checkbox</p>
                  </div>
                  <div style={{ boxShadow: '7.96px 7.96px 15.91px 0px #241B051A' }} className='rounded-2xl custom-1:max-w-[165px]  max-w-[130px] w-full h-[162px] bg-white custom-1:p-[26px] p-3 flex flex-col justify-center items-center gap-5'>
                    <div className='custom-1:max-w-[76px] max-w-[60px] w-full custom-1:h-[76px] h-[60px] flex justify-center items-center  border-[1px] border-[#179C48] bg-[#22C55E] rounded-lg'>
                      <FaImage className='text-white text-2xl custom-2:text-4xl' />
                    </div>
                    <p className='text-[#374151] text-[17px] font-medium leading-[10px]'>Checkbox</p>
                  </div>
                </div>
              </div>
              <div className='md:max-w-[455px] max-w-[250px]   ml-auto  bg-[#e9e9e9] custom-1:p-[35px] xl:p-3 p-[19px] custom-1:pb-0 rounded-[10px] grid grid-cols-3 gap-[15px] custom-2:-mb-10 -mb-9'>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='custom-1:max-w-[117px] custom-2:max-w-full max-w-full w-full custom-2:h-[120px] h-[65px] custom-2:px-[25px] px-[13px] custom-2:py-[16px] py-[8px] bg-white custom-2:rounded-lg rounded-[4px] flex flex-col justify-center items-center custom-2:gap-[20px] gap-[5px]'>
                  <div className='custom-2:w-[50px] w-[24px] custom-2:h-[44px] h-[24px] rounded-[3px] custom-2:rounded-[6px] bg-[#F0FDF4] border-[#BBF7D0] border-[1px] flex justify-center items-center'>
                    <FaEquals className='text-sm custom-2:text-xl text-[#22C55E]' />
                  </div>
                  <p className='custom-2:text-[14px] text-[7px] text-[#374151] font-medium custom-2:leading-[14px] leading-[7px] text-center'>Short Answer</p>
                </div>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='custom-1:max-w-[117px] custom-2:max-w-full max-w-full w-full custom-2:h-[120px] h-[65px] custom-2:px-[25px] px-[13px] custom-2:py-[16px] py-[8px] bg-white custom-2:rounded-lg rounded-[4px] flex flex-col justify-center items-center custom-2:gap-[20px] gap-[5px]'>
                  <div className='custom-2:w-[44px] w-[24px] custom-2:h-[44px] h-[24px] rounded-[3px] custom-2:rounded-[6px] bg-[#F0FDF4] border-[#BBF7D0] border-[1px] flex justify-center items-center'>
                    <PiDotsThreeCircleFill className='text-base custom-2:text-2xl text-[#22C55E]' />
                  </div>
                  <p className='custom-2:text-[14px] text-[7px] text-[#374151] font-medium custom-2:leading-[14px] leading-[7px] text-center'>Multiple choice</p>
                </div>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='custom-1:max-w-[117px] custom-2:max-w-full max-w-full w-full custom-2:h-[120px] h-[64px] custom-2:px-[25px] px-[13px] custom-2:py-[16px] py-[8px] bg-white custom-2:rounded-lg rounded-[4px] flex flex-col justify-center items-center custom-2:gap-[20px] gap-[5px]'>
                  <div className='custom-2:w-[44px] w-[24px] custom-2:h-[44px] h-[24px] rounded-[3px] custom-2:rounded-[6px] bg-[#F0FDF4] border-[#BBF7D0] border-[1px] flex justify-center items-center'>
                    <HiMail className='text-base custom-2:text-2xl text-[#22C55E]' />
                  </div>
                  <p className='custom-2:text-[14px] text-[7px] text-[#374151] font-medium custom-2:leading-[14px] leading-[7px] text-center'>Email Input</p>
                </div>


                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='custom-1:max-w-[117px] custom-2:max-w-[107px] max-w-[63px] w-full custom-2:h-[120px] h-[64px] custom-1:px-[25px] px-[13px] custom-1:py-[16px] py-[8px] bg-[#FFFFFFB2] backdrop-blur-[2px] bg-opacity-[.02] custom-2:scale-[1.82] scale-[1.7] custom-2:-translate-y-2 -translate-y-[8px] rotate-[7deg] custom-2:-translate-x-20 -translate-x-4 custom-2:rounded-lg rounded-md flex flex-col justify-center items-center custom-2:gap-[20px] gap-[5px]'>
                  <div className='custom-2:max-w-[44px] max-w-[30px] w-full custom-2:h-[44px] h-[30px] font-Inter custom-2:rounded-lg rounded-[2px] bg-[#8C3BF3] text-white  flex justify-center items-center ' >
                    H1
                  </div>
                  <p className='custom-2:text-[14px] text-[7px] text-[#374151] font-medium custom-2:leading-[14px] leading-[7px] text-center'>Heading</p>
                </div>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='custom-1:max-w-[117px] custom-2:max-w-full max-w-full w-full custom-2:h-[120px] h-[64px] custom-2:px-[25px] px-[13px] custom-2:py-[16px] py-[8px] bg-white custom-2:rounded-lg rounded-[4px] flex flex-col justify-center items-center custom-2:gap-[20px] gap-[5px]'>
                  <div className='custom-2:w-[44px] w-[24px] custom-2:h-[44px] h-[24px] rounded-[3px] custom-2:rounded-[6px] bg-[#F8FAFC] border-[#E2E8F0] border-[1px] flex justify-center items-center'>
                    <HiDocumentText className='text-base custom-2:text-2xl text-[#64748B]' />
                  </div>
                  <p className='custom-2:text-[14px] text-[7px] text-[#374151] font-medium custom-2:leading-[14px] leading-[7px] text-center'>  Paragraph</p>
                </div>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='custom-1:max-w-[117px] custom-2:max-w-full max-w-full w-full custom-2:h-[120px] h-[64px] custom-2:px-[25px] px-[13px] custom-2:py-[16px] py-[8px] bg-white custom-2:rounded-lg rounded-[4px] flex flex-col justify-center items-center custom-2:gap-[20px] gap-[5px]'>
                  <div className='custom-2:w-[44px] w-[24px] custom-2:h-[44px] h-[24px] rounded-[3px] custom-2:rounded-[6px] bg-[#F8FAFC] border-[#E2E8F0] border-[1px] flex justify-center items-center'>
                    <RiNotification2Fill className='text-sm custom-2:text-xl text-[#64748B]' />
                  </div>
                  <p className='custom-2:text-[14px] text-[7px] text-[#374151] font-medium custom-2:leading-[14px] leading-[7px] text-center'>  Banner</p>
                </div>

                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='custom-1:max-w-[117px] custom-2:max-w-full max-w-full w-full custom-2:h-[120px] h-[64px] custom-2:px-[25px] px-[13px] custom-2:py-[16px] py-[8px] bg-white custom-2:rounded-lg rounded-[4px] flex flex-col justify-center items-center custom-2:gap-[20px] gap-[5px]'>
                  <div className='custom-2:w-[44px] w-[24px] custom-2:h-[44px] h-[24px] rounded-[3px] custom-2:rounded-[6px] bg-[#FFFBEB] border-[#FFE4A0] border-[1px] flex justify-center items-center'>
                    <IoCodeOutline className='text-sm custom-2:text-xl text-primary rotate-90' />
                  </div>
                  <p className='custom-2:text-[14px] text-[7px] text-[#374151] font-medium custom-2:leading-[14px] leading-[7px] text-center'>  Dropdown</p>
                </div>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='custom-1:max-w-[117px] custom-2:max-w-full max-w-full w-full custom-2:h-[120px] h-[65px] custom-2:px-[25px] px-[13px] custom-2:py-[16px] py-[8px] bg-white custom-2:rounded-lg rounded-[4px] flex flex-col justify-center items-center custom-2:gap-[20px] gap-[5px]'>
                  <div className='custom-2:w-[44px] w-[24px] custom-2:h-[44px] h-[24px] rounded-[3px] custom-2:rounded-[6px] bg-[#FFFBEB] border-[#FFE4A0] border-[1px] flex justify-center items-center'>
                    <HiDocumentSearch className='text-base custom-2:text-2xl text-primary' />
                  </div>
                  <p className='custom-2:text-[14px] text-[7px] text-[#374151] font-medium custom-2:leading-[14px] leading-[7px] text-center'>  Submission</p>
                </div>
                <div
                  style={{ boxShadow: '0px 1.46px 2.93px -1.46px #0000001A', boxShadow: '0px 1.46px 4.39px 0px #0000001A' }}
                  className='custom-1:max-w-[117px] custom-2:max-w-full max-w-full w-full custom-2:h-[120px] h-[64px] custom-2:px-[24px] px-[13px] custom-2:py-[16px] py-[8px] bg-white custom-2:rounded-lg rounded-[4px] flex flex-col justify-center items-center custom-2:gap-[20px] gap-[5px]'>
                  <div className='custom-2:w-[44px] w-[24px] custom-2:h-[44px] h-[24px] rounded-[3px] custom-2:rounded-[6px] bg-[#FFFBEB] border-[#FFE4A0] border-[1px] flex justify-center items-center'>
                    <HiMiniSquares2X2 className='text-base custom-2:text-xl text-primary' />
                  </div>
                  <p className='custom-2:text-[14px] text-[7px] text-[#374151] font-medium custom-2:leading-[14px] leading-[7px] text-center'>  Choice Matrix</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full items-center flex-col custom-2:flex-row gap-6 md:gap-9">
              <div className="rounded-2xl bg-white px-4 py-[25px] md:p-7 flex flex-col gap-6 md:gap-9 w-full overflow-y-clip max-w-full custom-2:max-w-[600px] custom-1:!max-w-[600px] relative">
                <h3 className="text-2xl mini-mobile:!text-xl md:text-3xl font-medium leading-7 md:leading-9 text-black w-full md:max-w-md">
                  Compute prices, quiz scores, and dynamic variables with calculations.
                </h3>
                <div className="flex w-full items-center">
                  <div className="h-[158px] md:h-[253px] w-max relative translate-y-3 md:translate-y-3 z-[2] ">
                    <IconCollection name="employ-data-icon" className="w-[153px] h-[169px] md:w-[266px] md:h-[266px]" />
                    <IconCollection name="doc-icon" className="w-[20px] h-[20px] md:w-[37px] md:h-[37px] absolute -right-[10px] top-[2px] md:-right-[18px] md:-top-[18px]" />
                  </div>
                  <div className="w-full relative hidden custom-2:block">
                    <div className="min-h-[3px] w-full bg-white-2"></div>
                    <div className="flex items-center shadow-custom-2 gap-3 rounded-[10px] md:rounded-2xl border p-[6px] md:p-[10px] pr-2 md:pr-4 z-[2] border-custom-purple-light bg-purple-custom absolute right-0 top-1/2 -translate-y-[calc(50%_+_4px)] -rotate-2 translate-x-[18%]">
                      <IconCollection name="percents-icon-1" className="rotate-2" />
                      <p className="text-base md:text-xl custom-1:text-3xl font-medium leading-5 md:leading-[34px] whitespace-nowrap text-purple-custom-2">
                        Calculating...
                      </p>
                    </div>
                  </div>
                  <div className="absolute mini-mobile:right-3 right-5 md:right-7 bottom-0 w-max block custom-2:hidden">
                    <div className="w-max h-max relative">
                      <div className="flex items-center gap-3 shadow-custom-2 rounded-[10px] md:rounded-2xl border p-[6px] md:p-[10px] pr-2 md:pr-4 z-[2] border-custom-purple-light bg-purple-custom absolute left-0 top-0 -translate-y-[calc(50%_-_6px)] md:-translate-y-1/2 -rotate-2 -translate-x-4 md:translate-x-4 custom-4:translate-x-0">
                        <IconCollection name="percents-icon-2" className="rotate-2 w-[32px] h-[32px] md:w-[59px] md:h-[56px]" />
                        <p className="text-base md:text-xl custom-1:text-3xl font-medium leading-5 md:leading-[34px] whitespace-nowrap text-purple-custom-2">
                          Calculating...
                        </p>
                      </div>
                      <IconCollection name="arrow-icon-3_1" className="hidden md:block" />
                      <IconCollection name="arrow-icon-3_2" className="block md:hidden" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-white px-4 py-[25px] md:p-7 flex flex-col gap-6 md:gap-9 w-full max-w-full custom-2:max-w-[600px] custom-1:!max-w-[600px] relative">
                <h3 className="text-2xl mini-mobile:!text-xl md:text-3xl font-medium leading-[30.8px] md:leading-9 text-black w-full max-w-[calc(100%_-_16px)] md:max-w-md">
                  Dynamically show or hide questions, modify page logic, enforce validation,
                  and more.
                </h3>
                <div className="flex w-full items-center">
                  <div className="h-[215px] w-max relative -ml-7 mt-[38px] hidden custom-2:block">
                    <div className="relative w-max h-max">
                      <IconCollection name="qualified-icon-3" className="absolute right-[15%] -top-[6px] backdrop-shadow-1" />
                      <div className="flex items-center gap-3 shadow-custom-2 rounded-[10px] md:rounded-2xl border p-[6px] md:p-[10px] pr-2 md:pr-4 z-[2] border-custom-orange bg-white-orange absolute -right-1 top-0 translate-x-full -translate-y-[calc(50%_-_16px)] rotate-2">
                        <IconCollection name="calender-icon-3" className="min-w-[55px] min-h-[55px] -rotate-2" />
                        <p className="text-base md:text-xl custom-1:text-3xl font-medium leading-5 md:leading-[34px] whitespace-nowrap text-custom-orange-light">
                          Book Meeting
                        </p>
                      </div>
                      <IconCollection name="arrow-icon-1_3" />
                    </div>
                    <div className="relative w-max h-max -translate-y-1">
                      <div className="absolute right-0 top-0 translate-y-[calc(50%_+_6px)] -translate-x-[25%] w-max h-max">
                        <div className="relative w-max h-max">
                          <div className="flex items-center gap-3 rounded-[10px] md:rounded-2xl border p-[6px] md:p-[10px] pr-2 md:pr-4 z-[2] border-custom-green-2 bg-white-green shadow-custom-1">
                            <IconCollection name="payment-icon-3" className="min-w-[55px] min-h-[55px]" />
                            <p className="text-base md:text-xl custom-1:text-3xl font-medium leading-5 md:leading-[34px] whitespace-nowrap text-custom-green-light">
                              Payment
                            </p>
                          </div>
                          <IconCollection name="approve-icon-3" className="absolute -bottom-5 -right-8 backdrop-shadow-1" />
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded-[10px] md:rounded-2xl border p-[6px] md:p-[10px] pr-2 md:pr-4 z-[2] border-custom-purple-light bg-purple-custom shadow-custom-2 absolute right-0 top-1/2 translate-x-[calc(100%_+_4px)] -translate-y-[calc(50%_-_26px)] -rotate-4">
                        <IconCollection name="message-icon-3" className="min-w-[55px] min-h-[55px] rotate-4" />
                        <p className="text-base md:text-xl custom-1:text-3xl font-medium leading-5 md:leading-[34px] whitespace-nowrap text-purple-custom-2">
                          Email sent
                        </p>
                      </div>
                      <IconCollection name="arrow-icon-1_2" />
                    </div>
                  </div>
                  <div className="absolute right-5 mini-mobile:right-3 block md:hidden top-0">
                    <div className="relative w-full h-full">
                      <IconCollection name="arrow-icon-2_1" />
                      <IconCollection name="qualified-icon-2" className="absolute left-[18%] bottom-[30px] backdrop-shadow-1" />
                      <div className="flex items-center gap-3 shadow-custom-2 rounded-[10px] md:rounded-2xl border p-[6px] md:p-[10px] pr-2 md:pr-4 z-[2] border-custom-orange bg-white-orange absolute left-0 bottom-[22px] rotate-2 -translate-x-full mini-mobile:py-0.5 mini-mobile:-translate-y-1">
                        <IconCollection name="calender-icon-2" className="mini-mobile:w-[20px] mini-mobile:[20px] w-[32px] h-[32px] -rotate-2" />
                        <p className="text-base md:text-xl custom-1:text-3xl font-medium leading-5 md:leading-[34px] whitespace-nowrap text-custom-orange-light">
                          <span className="mini-mobile:text-xs">Book Meeting</span>
                        </p>
                      </div>
                      <div className="absolute left-0 bottom-0 w-full h-full">
                        <div className="w-full h-full relative">
                          <IconCollection name="arrow-icon-1_1" className="absolute -left-[54px] top-[236px]" />
                          <div className="absolute -left-8 bottom-0 translate-y-[calc(100%_+_18px)] mini-mobile:translate-y-[calc(100%_+_20px)]">
                            <div className="relative w-max h-max">
                              <div className="flex items-center gap-3 rounded-[10px] md:rounded-2xl border p-[6px] md:p-[10px] pr-2 md:pr-4 z-[2] border-custom-green-2 bg-white-green shadow-custom-1 mini-mobile:py-0.5">
                                <IconCollection className="mini-mobile:w-[20px] mini-mobile:[20px] w-[32px] h-[32px]" name="payment-icon-2" />
                                <p className="text-base md:text-xl custom-1:text-3xl font-medium leading-5 md:leading-[34px] whitespace-nowrap text-custom-green-light">
                                  Payment
                                </p>
                              </div>
                              <IconCollection name="approve-icon-2" className="absolute -bottom-3 -right-5 backdrop-shadow-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded-[10px] md:rounded-2xl border p-[6px] md:p-[10px] pr-2 md:pr-4 z-[2] border-custom-purple-light bg-purple-custom absolute -left-[54px] bottom-0 rotate-4 -translate-x-full translate-y-[calc(100%_+_14px)] mini-mobile:translate-y-[calc(100%_+_16px)] mini-mobile:py-0.5">
                        <IconCollection className="mini-mobile:w-[20px] mini-mobile:[20px] w-[32px] h-[32px] rotate-4" name="message-icon-2" />
                        <p className="text-base md:text-xl custom-1:text-3xl font-medium leading-5 md:leading-[34px] whitespace-nowrap text-purple-custom-2">
                          <span className="mini-mobile:text-xs">Email sent</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute hidden md:block custom-2:hidden right-7 top-0  w-[286px] h-[476px]">
                    <div className="relative w-full h-full overflow-hidden">
                      <div className="absolute left-0 -top-[150px]">
                        <div className="relative w-full h-full">
                          <IconCollection name="arrow-icon-2" />
                          <IconCollection name="qualified-icon" className="absolute right-[15%] -top-[6px] backdrop-shadow-1" />
                        </div>
                      </div>
                    </div>
                    <div className="relative w-max h-max -mt-[50px]">
                      <div className="flex items-center gap-3 shadow-custom-2 rounded-[10px] md:rounded-2xl border p-[6px] md:p-[10px] pr-2 md:pr-4 z-[2] border-custom-orange bg-white-orange absolute -top-[230px] left-0 -translate-x-[calc(100%_+_8px)] rotate-2">
                        <IconCollection name="calender-icon" className="min-w-[55px] min-h-[55px] -rotate-2" />
                        <p className="text-base md:text-xl custom-1:text-3xl font-medium leading-5 md:leading-[34px] whitespace-nowrap text-custom-orange-light">
                          Book Meeting
                        </p>
                      </div>
                      <IconCollection name="arrow-icon-1" className="absolute left-0 -top-[106px] -translate-x-[140px]" />
                      <div className="absolute right-0 translate-x-[calc(100%_-_40px)] top-0 -translate-y-[calc(100%_-_16px)] w-max h-max">
                        <div className="relative w-max h-max">
                          <div className="flex items-center gap-3 rounded-[10px] md:rounded-2xl border p-[6px] md:p-[10px] pr-2 md:pr-4 z-[2] border-custom-green-2 bg-white-green shadow-custom-1">
                            <IconCollection className="min-w-[55px] min-h-[55px]" name="payment-icon" />
                            <p className="text-base md:text-xl custom-1:text-3xl font-medium leading-5 md:leading-[34px] whitespace-nowrap text-custom-green-light">
                              Payment
                            </p>
                          </div>
                          <IconCollection className="absolute -bottom-5 -right-8" name="approve-icon" />
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded-[10px] md:rounded-2xl border p-[6px] md:p-[10px] pr-2 md:pr-4 z-[2] border-custom-purple-light bg-purple-custom shadow-custom-2 absolute right-0 top-1/2 -translate-x-[75%] -translate-y-[calc(50%_+_28px)] rotate-4">
                        <IconCollection className="min-w-[55px] min-h-[55px] rotate-4" name="email-sent" />
                        <p className="text-base md:text-xl custom-1:text-3xl font-medium leading-5 md:leading-[34px] whitespace-nowrap text-purple-custom-2">
                          Email sent
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[160px] md:h-[283px] w-max relative block custom-2:hidden"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
