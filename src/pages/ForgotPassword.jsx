import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PiWarningCircle } from "react-icons/pi";
const ForgotPassword = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-[40px]">
        <h1 className="width-[261px] h-[39px] font-[600] text-[32px] text-center mb-[40px] text-white">
          Forgot Password
        </h1>
        <div className="w-[499px] h-[462px] rounded-[12px] py-[40px] px-[30px] gap-[10px] bg-[#2F3338]">
          <div className=" w-[439px] h-[382px] gap-[30px]">
            {/* input */}
            <div className="h-[75px] gap-[8px]">
              <p className="w-[42px] h-[19px] font-[500] text-[16px] tracking-[0.5%] text-white">
                Email
              </p>
              <input
                className="w-full h-[48px] rounded-[8px] py-[12px] px-[16px] gap-[12px] mt-[10px] bg-[#3F444E]
                "
                placeholder="Email"
              />
            </div>

            {/* warning */}
            <div className="mx-auto flex justify-center  w-[400px] h-[72px] gap-[8px] my-[50px]">
              <PiWarningCircle className="w-[24px] h-[24px] text-[#E1AC7B]" />
              <p className="w-[368px] h-[72px] font-[400] text-[18px] text-[#E1AC7B] text-justify">
                We can't seen to find the right email address for you, resend
                the email that you have registered
              </p>
            </div>

            {/* btn */}
            <div className="mx-auto w-[400px] h-[50px] rounded-[8px] py-[14px] px-[16px] gap-[10px] bg-[#6F49FD]">
              <p className="w-[123px] h-[20px] font-[500] text-[16px] leading-[20px] capitalize m-auto text-white ">
                reset password
              </p>
            </div>

            <div className="mx-auto w-[400px] h-[50px] rounded-[8px] py-[14px] px-[16px] gap-[10px] border-[#E8E8E8] border-[1px] border-solid mt-[20px] ">
              <p className="w-[123px] h-[20px] font-[500] text-[16px] leading-[20px] capitalize m-auto text-white">
                Back to Sign in
              </p>
            </div>

            <div className=" flex items-center justify-center m-auto w-[324px] h-[19px] my-[20px]">
              <p className="text-[16px] font-[500] text-[#fff] ">
                Already have an account?{" "}
              </p>
              <span className="text-[16px] font-[700] text-[#fff] opacity-[80%] ml-1">
                Create account
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
