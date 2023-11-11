import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ResetPassword = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-[40px]">
        <h1 className="width-[261px] h-[39px] font-[600] text-[32px] text-center mb-[40px] text-white">
          Reset Password
        </h1>
        <div className="w-[499px] h-[400px]  rounded-[12px] py-[40px] px-[30px] gap-[10px] bg-[#2F3338]">
          <div className=" w-[439px] flex flex-col items-center">
            {/* input */}
            <div className="w-full h-[75px] gap-[8px]">
              <p className="w-[76px] h-[19px] font-[500] text-[16px] tracking-[0.5%] mb-[20px] text-white">
                Password
              </p>
              <div className="flex items-center relative">
                <input
                  className="w-[439px] h-[48px] rounded-[8px] py-[12px] px-[16px] bg-[#3F444E]"
                  placeholder="Password"
                />
                <FontAwesomeIcon
                  icon={faEye}
                  className=" absolute right-[20px] text-[#858D9D] cursor-pointer"
                />
              </div>
            </div>

            <div className="w-full h-[75px] gap-[8px] mt-[40px]">
              <p className=" h-[19px] font-[500] text-[16px] tracking-[0.5%] mb-[20px] text-white">
                Confirm Password
              </p>
              <div className="flex items-center relative">
                <input
                  className="w-[439px] h-[48px] rounded-[8px] py-[12px] px-[16px] bg-[#3F444E]"
                  placeholder="Passowrd"
                />
                <FontAwesomeIcon
                  icon={faEye}
                  className=" absolute right-[20px] text-[#858D9D] cursor-pointer"
                />
              </div>
            </div>

            {/* btn */}
            <div className="w-[400px] h-[50px] rounded-[8px] py-[14px] px-[16px] gap-[10px] bg-[#6F49FD] mt-[40px] m-auto cursor-pointer hover:bg-[#9176f1]">
              <p className="w-[123px] h-[20px] font-[500] text-[16px] leading-[20px] capitalize m-auto text-white ">
                reset password
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
