import React from "react";
import SettingAccountImage from "../components/SettingAccountImage";
import { AiOutlineEye } from "react-icons/ai";

const SettingAccount = () => {
  return (
    <div className="text-white w-full">
      <div className="text-white flex justify-center items-center">
        <div className="relative">
          <p className="flex justify-center items-center mb-[20px] h-[29px] top-0 left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[24px] tracking-[0] leading-[normal]">
            Account
          </p>

          {/* form */}
          <form className="flex w-[759px] items-start gap-[10px] p-[24px] relative bg-[#2f3338] rounded-[12px]">
            <div className="flex items-start flex-col gap-[14px] relative ">
              <div className="flex flex-row gap-6">
                <div className="flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#c0c1c3] text-[16px] tracking-[0.08px] leading-[20px] whitespace-nowrap">
                    Photo
                  </div>

                  {/* phần Image */}
                  <div className="flex flex-row justify-start items-center gap-4">
                    <div className="w-[120px] h-[120px] rounded-[12px] bg-[#3F444E]">
                      <SettingAccountImage />
                    </div>

                    <div>
                      <p className="relative w-[185px] mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#858d9d] text-[14px] tracking-[0.07px] leading-[20px]">
                        Drag and drop image here, or click add image
                      </p>

                      <label
                        htmlFor="file-upload"
                        className="py-3 px-4 relative top-[17px] cursor-pointer rounded-md bg-[#dedefa] focus-within:outline-none  focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#5b58e7] text-[14px] tracking-[0.07px] leading-[20px] whitespace-nowrap">
                          Add Image
                        </span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Phần Fullname, User name */}
                <div className="w-[366px] h-[164px] flex flex-col">
                  <div className="w-[366px] h-[75px] gap-[8px]">
                    <div className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#ffffffcc] text-[16px] tracking-[0.08px] leading-[normal] whitespace-nowrap">
                      Fullname
                    </div>
                    <input
                      type="text"
                      name="fullname"
                      placeholder="ngo thuy dan"
                      className="w-[366px] h-[48px] rounded-[8px] gap-[12px] bg-[#3F444E] p-[12px] mt-3"
                    />
                  </div>
                  <br />
                  <div className="w-[366px] h-[75px] gap-[8px]">
                    <div className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#ffffffcc] text-[16px] tracking-[0.08px] leading-[normal] whitespace-nowrap">
                      Username
                    </div>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      className="w-[366px] h-[48px] rounded-[8px] gap-[12px] bg-[#3F444E] p-[12px] mt-3"
                    />
                  </div>
                </div>
              </div>

              {/* Email -> Research fields */}
              <div className=" gap-[8px]">
                {/* Email */}
                <div className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#ffffffcc] text-[16px] tracking-[0.08px] leading-[normal] whitespace-nowrap">
                  Email
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="username@gmail.com"
                  className="w-[708px] h-[48px] rounded-[8px] gap-[12px] bg-[#3F444E] p-[12px] mt-3 mb-6"
                />

                {/* Phone number */}
                <div className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#ffffffcc] text-[16px] tracking-[0.08px] leading-[normal] whitespace-nowrap">
                  Phone number
                </div>
                <input
                  type="number"
                  name="number"
                  placeholder="19001009"
                  className="w-[708px] h-[48px] rounded-[8px] gap-[12px] bg-[#3F444E] p-[12px] mt-3 mb-6"
                />

                {/* Password */}
                <div className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#ffffffcc] text-[16px] tracking-[0.08px] leading-[normal] whitespace-nowrap">
                  Password
                </div>
                <div className="flex flex-row">
                  <input
                    type="password"
                    name="password"
                    placeholder="***********"
                    className="w-[708px] h-[48px] rounded-[8px] gap-[12px] bg-[#3F444E] p-[12px] mt-3 mb-6"
                  />
                  <AiOutlineEye className="relative right-9 top-6 w-7 h-6 text-[#858D9D]" />
                </div>

                {/* Confirm Password */}
                <div className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#ffffffcc] text-[16px] tracking-[0.08px] leading-[normal] whitespace-nowrap">
                  Confirm Password
                </div>
                <div className="flex flex-row">
                  <input
                    type="password"
                    name="confirm password"
                    placeholder="***********"
                    className="w-[708px] h-[48px] rounded-[8px] gap-[12px] bg-[#3F444E] p-[12px] mt-3 mb-6"
                  />
                  <AiOutlineEye className="relative right-9 top-6 w-7 h-6 text-[#858D9D]" />
                </div>

                {/* Scientist history */}
                <div className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#ffffffcc] text-[16px] tracking-[0.08px] leading-[normal] whitespace-nowrap">
                  Scientist history
                </div>
                <textarea
                  type="text"
                  name="text"
                  placeholder="Typing here"
                  className="w-[708px] h-[180px] rounded-[8px] gap-[4px] bg-[#3F444E] p-[14px] mt-3 mb-6"
                />

                {/* Research fields */}
                <div className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#ffffffcc] text-[16px] tracking-[0.08px] leading-[normal] whitespace-nowrap">
                  Research fields
                </div>
                <textarea
                  type="text"
                  name="researchfields"
                  placeholder="Typing here"
                  className="w-[708px] h-[100px] rounded-[8px] gap-[4px] bg-[#3F444E] p-[14px] mt-3 "
                />
              </div>

              {/* button Cancel and Save */}
              <div className="w-[203px] h-[48px] gap-[16px] flex flex-row justify-center items-center relative left-[34%] ">
                <button className="w-[101px] h-[48px] rounded-[8px] border-[1px] gap-[10px] text-[#FFFFFF] hover:bg-[#e7b93a] hover:text-[#3a3a3a] [font-family:'Inter-Medium',Helvetica] font-medium text-[#ffffffcc] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                  Cancel
                </button>
                <button className="w-[86px] h-[48px] rounded-[8px] gap-[10px] bg-[#6E6BFF] hover:bg-[#a2a1fa] hover:text-[#3a3a3a] [font-family:'Inter-Medium',Helvetica] font-medium text-[#ffffffcc] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingAccount;
