import React from 'react'

const OTP = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[460px] h-[361px] gap-[40px]  m-auto'>
      <div className='w-[385px] h-[66px] gap-[8px] flex flex-col justify-center items-center m-auto'>
        <h1 className='w-[156px] h-[39px] font-[600] text-[32px] text-white'>Enter OTP</h1>
        <span className='font-[500] text-[16px] opacity-[80%] text-white'>Please enter the OTP send to your registered email</span>
      </div>

      {/* input */}
      <div className='w-[460px] h-[255px] rounded-[12px] py-[40px] px-[30px] gap-[10px] bg-[#2F3338]'>
        <div className='w-[400px] h-[175px] gap-[30px]'>
          <div className='w-[338px] h-[48px] gap-[10px] flex  m-auto'>
            <div className='w-[48px] h-[48px] border-[1px] border-solid border-[#fff]'></div>
            <div className='w-[48px] h-[48px] border-[1px] border-solid border-[#fff]'></div>
            <div className='w-[48px] h-[48px] border-[1px] border-solid border-[#fff]'></div>
            <div className='w-[48px] h-[48px] border-[1px] border-solid border-[#fff]'></div>
            <div className='w-[48px] h-[48px] border-[1px] border-solid border-[#fff]'></div>
            <div className='w-[48px] h-[48px] border-[1px] border-solid border-[#fff]'></div>
          </div>

          <div className='w-[400px] h-[48px] rounded-[8px] py-[14px] px-[16px] gap-[10px] bg-[#6F49FD] mt-[20px] cursor-pointer hover:bg-[#8e74ee]'>
            <p className='w-[113px] h-[20px] text-[16px] font-[500] leading-[20px] m-auto text-white'>Verify Account</p>
          </div>

          <div className='w-[242px] h-[19px] mt-[20px] flex items-center justify-center m-auto'>
            <p className='font-[500] text-[16px] leading-[19.36px] text-white cursor-pointer hover:underline'>Didn't recieve the OTP?</p>
            <span className='font-[600] text-[16px] leading-[19.36px] opacity-[80%] ml-1 text-white cursor-pointer hover:underline'>Resend</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OTP