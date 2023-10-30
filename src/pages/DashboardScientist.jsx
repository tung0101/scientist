import React from "react";
import {
  dashboardscientist1,
  dashboardscientist2,
  dashboardscientist3,
  dashboardscientist4,
  icons_5,
  navicon1,
  navicon2,
} from "../assets";

const Dashboard_Scientist = () => {
  return (
    <div className="text-white bg-black w-[1320px]">
      <div className="flex flex-row">
        <div className="flex justify-between items-center p-10">
          <div className="bg-[#2f3338] w-[882px] h-[440.2px] rounded-[12px] p-[1px,1px,24px,1px]">
            <div>
              <div className="flex flex-row justify-between items-center m-8">
                <h5 className="[font-family:'Inter-Medium',Helvetica] font-semibold text-[20px] leading-[19.2px]">
                  Project
                </h5>
                <img
                  src={dashboardscientist1}
                  alt=""
                  className="cursor-pointer"
                />
              </div>

              <div className="flex flex-row h-[55px] items-start gap-[4px_0px] relative m-8 bottom-5">
                <div className="px-[3.19px] py-0 inline-flex flex-col h-[55px] items-start relative flex-[0_0_auto]">
                  <div className="inline-flex items-center pl-[14.84px] pr-[14.5px] py-[17px] relative flex-[0_0_auto] rounded-[8px_8px_0px_0px]">
                    <p className="relative w-fit mt-[-1px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#4680ff] text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap cursor-pointer">
                      All
                    </p>
                    <div className="absolute w-[46px] h-[2px] top-[53px] left-px bg-[#4680ff] rounded-[2px_2px_0px_0px]" />
                  </div>
                </div>
                <div className="pl-[16.9px] pr-[16.54px] py-[17px] inline-flex flex-col h-[55px] items-start relative flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap cursor-pointer">
                    Awaiting
                  </p>
                </div>
                <div className="inline-flex flex-col h-[55px] items-start pl-[17.01px] pr-[16.65px] py-[17px] relative flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap cursor-pointer">
                    Upcoming
                  </p>
                </div>
                <div className="inline-flex flex-col h-[55px] items-start pl-[17.01px] pr-[16.65px] py-[17px] relative flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap cursor-pointer">
                    Opening
                  </p>
                </div>
                <div className="inline-flex flex-col h-[55px] items-start pl-[17.01px] pr-[16.65px] py-[17px] relative flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap cursor-pointer">
                    Completed
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[880px] h-[73.8px] relative bottom-[52px] border-y-2 border-[#3F444E]">
              <div className="m-4">
                <div className="flex flex-row justify-around items-center gap-[200px]">
                  <div className="flex flex-row justify-start items-center gap-2 relative right-[3px]">
                    <img src={dashboardscientist2} alt="" />
                    <div>
                      <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[16.8px] whitespace-nowrap">
                        Apple Silicon
                      </p>
                      <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffffb2] text-[11.2px] tracking-[0] leading-[16.8px]">
                        Start: 09/09/23 | End: 09/09/24
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-[83px] h-[33px] rounded-[8px] p-[8px,12px,8px,12px] gap-10 bg-[#3F444E] relative right-[9px]">
                    <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] text-right tracking-[0] leading-[16.8px] whitespace-nowrap">
                      Awaiting
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col justify-end items-end relative left-[5px]">
                      <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] text-right tracking-[0] leading-[16.8px]">
                        $210,000
                      </p>
                      <div className="flex flex-row gap-1">
                        <img src={navicon1} alt="" />
                        <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffffb2] text-[12px] text-right tracking-[0] leading-[normal] mt-[5px]">
                          BTC
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[880px] h-[73.8px] relative bottom-[52px] border-y-2 border-[#3F444E]">
              <div className="m-4">
                <div className="flex flex-row justify-around items-center gap-[200px]">
                  <div className="flex flex-row justify-start items-center gap-2 relative right-[5px]">
                    <img src={dashboardscientist3} alt="" />
                    <div>
                      <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[16.8px] whitespace-nowrap">
                        Samsung Electronic.
                      </p>
                      <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffffb2] text-[11.2px] tracking-[0] leading-[16.8px]">
                        Start in 1d : 2h : 3m : 4s
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-[83px] h-[33px] rounded-[8px] p-[8px,12px,8px,12px] gap-10 bg-[#3F444E]">
                    <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] text-right tracking-[0] leading-[16.8px] whitespace-nowrap">
                      Upcoming
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col justify-end items-end relative left-[8px]">
                      <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] text-right tracking-[0] leading-[16.8px]">
                        $210,000
                      </p>
                      <div className="flex flex-row gap-1">
                        <img src={navicon2} alt="" />
                        <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffffb2] text-[12px] text-right tracking-[0] leading-[normal] mt-[5px]">
                          ETH
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[880px] h-[73.8px] relative bottom-[52px] border-y-2 border-[#3F444E]">
              <div className="m-4">
                <div className="flex flex-row justify-around items-center gap-[200px]">
                  <div className="flex flex-row justify-start items-center gap-2 relative right-[10px]">
                    <img src={dashboardscientist4} alt="" />
                    <div>
                      <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[16.8px] whitespace-nowrap">
                        Metaverse.
                      </p>
                      <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffffb2] text-[11.2px] tracking-[0] leading-[16.8px]">
                        End in: 4d : 3m : 2h : 1s
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-[83px] h-[33px] rounded-[8px] gap-10 bg-[#3F444E] relative left-[10px]">
                    <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] text-right tracking-[0] leading-[16.8px] whitespace-nowrap">
                      Opening
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col justify-end items-end relative left-[10px]">
                      <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] text-right tracking-[0] leading-[16.8px]">
                        $210,000
                      </p>
                      <div className="flex flex-row gap-1">
                        <img src={icons_5} alt="" />
                        <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffffb2] text-[12px] text-right tracking-[0] leading-[normal] mt-[5px]">
                          ETH
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[880px] h-[73.8px] relative bottom-[52px] border-y-2 border-[#3F444E]">
              <div className="m-4">
                <div className="flex flex-row justify-around items-center gap-[200px]">
                  <div className="flex flex-row justify-start items-center gap-2 relative right-[3px]">
                    <img src={dashboardscientist2} alt="" />
                    <div>
                      <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[16.8px] whitespace-nowrap">
                        YNK
                      </p>
                      <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffffb2] text-[11.2px] tracking-[0] leading-[16.8px]">
                        Start: 09/10/22 | End: 09/10/22
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-[83px] h-[33px] rounded-[8px] p-[8px,12px,8px,12px] gap-10 bg-[#3F444E] relative right-[7px]">
                    <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] text-right tracking-[0] leading-[16.8px] whitespace-nowrap">
                      Completed
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col justify-end items-end relative left-[8px]">
                      <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] text-right tracking-[0] leading-[16.8px]">
                        $210,000
                      </p>
                      <div className="flex flex-row gap-1">
                        <img src={navicon1} alt="" />
                        <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffffb2] text-[12px] text-right tracking-[0] leading-[normal] mt-[5px]">
                          ETH
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-10">
          <div className="bg-[#2f3338] w-[882px] h-[440.2px] rounded-[12px] p-[1px,1px,24px,1px]">
            <div>
              <div className="flex flex-row justify-between items-center m-8">
                <h5 className="[font-family:'Inter-Medium',Helvetica] font-semibold text-[20px] leading-[19.2px]">
                  Project
                </h5>
                <img
                  src={dashboardscientist1}
                  alt=""
                  className="cursor-pointer"
                />
              </div>

              <div className="flex flex-row h-[55px] items-start gap-[4px_0px] relative m-8 bottom-5">
                <div className="px-[3.19px] py-0 inline-flex flex-col h-[55px] items-start relative flex-[0_0_auto]">
                  <div className="inline-flex items-center pl-[14.84px] pr-[14.5px] py-[17px] relative flex-[0_0_auto] rounded-[8px_8px_0px_0px]">
                    <p className="relative w-fit mt-[-1px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#4680ff] text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap cursor-pointer">
                      All
                    </p>
                    <div className="absolute w-[46px] h-[2px] top-[53px] left-px bg-[#4680ff] rounded-[2px_2px_0px_0px]" />
                  </div>
                </div>
                <div className="pl-[16.9px] pr-[16.54px] py-[17px] inline-flex flex-col h-[55px] items-start relative flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap cursor-pointer">
                    Awaiting
                  </p>
                </div>
                <div className="inline-flex flex-col h-[55px] items-start pl-[17.01px] pr-[16.65px] py-[17px] relative flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap cursor-pointer">
                    Upcoming
                  </p>
                </div>
                <div className="inline-flex flex-col h-[55px] items-start pl-[17.01px] pr-[16.65px] py-[17px] relative flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap cursor-pointer">
                    Opening
                  </p>
                </div>
                <div className="inline-flex flex-col h-[55px] items-start pl-[17.01px] pr-[16.65px] py-[17px] relative flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[14px] text-center tracking-[0] leading-[21px] whitespace-nowrap cursor-pointer">
                    Completed
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[880px] h-[73.8px] relative bottom-[52px] border-y-2 border-[#3F444E]">
              <div className="m-4">
                <div className="flex flex-row justify-around items-center gap-[200px]">
                  <div className="flex flex-row justify-start items-center gap-2 relative right-[3px]">
                    <img src={dashboardscientist2} alt="" />
                    <div>
                      <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[16.8px] whitespace-nowrap">
                        Apple Silicon
                      </p>
                      <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffffb2] text-[11.2px] tracking-[0] leading-[16.8px]">
                        Start: 09/09/23 | End: 09/09/24
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-[83px] h-[33px] rounded-[8px] p-[8px,12px,8px,12px] gap-10 bg-[#3F444E] relative right-[9px]">
                    <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] text-right tracking-[0] leading-[16.8px] whitespace-nowrap">
                      Awaiting
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col justify-end items-end relative left-[5px]">
                      <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] text-right tracking-[0] leading-[16.8px]">
                        $210,000
                      </p>
                      <div className="flex flex-row gap-1">
                        <img src={navicon1} alt="" />
                        <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffffb2] text-[12px] text-right tracking-[0] leading-[normal] mt-[5px]">
                          BTC
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[880px] h-[73.8px] relative bottom-[52px] border-y-2 border-[#3F444E]">
              <div className="m-4">
                <div className="flex flex-row justify-around items-center gap-[200px]">
                  <div className="flex flex-row justify-start items-center gap-2 relative right-[5px]">
                    <img src={dashboardscientist3} alt="" />
                    <div>
                      <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[16.8px] whitespace-nowrap">
                        Samsung Electronic.
                      </p>
                      <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffffb2] text-[11.2px] tracking-[0] leading-[16.8px]">
                        Start in 1d : 2h : 3m : 4s
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-[83px] h-[33px] rounded-[8px] p-[8px,12px,8px,12px] gap-10 bg-[#3F444E]">
                    <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] text-right tracking-[0] leading-[16.8px] whitespace-nowrap">
                      Upcoming
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col justify-end items-end relative left-[8px]">
                      <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] text-right tracking-[0] leading-[16.8px]">
                        $210,000
                      </p>
                      <div className="flex flex-row gap-1">
                        <img src={navicon2} alt="" />
                        <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffffb2] text-[12px] text-right tracking-[0] leading-[normal] mt-[5px]">
                          ETH
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[880px] h-[73.8px] relative bottom-[52px] border-y-2 border-[#3F444E]">
              <div className="m-4">
                <div className="flex flex-row justify-around items-center gap-[200px]">
                  <div className="flex flex-row justify-start items-center gap-2 relative right-[10px]">
                    <img src={dashboardscientist4} alt="" />
                    <div>
                      <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[16.8px] whitespace-nowrap">
                        Metaverse.
                      </p>
                      <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffffb2] text-[11.2px] tracking-[0] leading-[16.8px]">
                        End in: 4d : 3m : 2h : 1s
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-[83px] h-[33px] rounded-[8px] gap-10 bg-[#3F444E] relative left-[10px]">
                    <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] text-right tracking-[0] leading-[16.8px] whitespace-nowrap">
                      Opening
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col justify-end items-end relative left-[10px]">
                      <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] text-right tracking-[0] leading-[16.8px]">
                        $210,000
                      </p>
                      <div className="flex flex-row gap-1">
                        <img src={icons_5} alt="" />
                        <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffffb2] text-[12px] text-right tracking-[0] leading-[normal] mt-[5px]">
                          ETH
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[880px] h-[73.8px] relative bottom-[52px] border-y-2 border-[#3F444E]">
              <div className="m-4">
                <div className="flex flex-row justify-around items-center gap-[200px]">
                  <div className="flex flex-row justify-start items-center gap-2 relative right-[3px]">
                    <img src={dashboardscientist2} alt="" />
                    <div>
                      <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[16.8px] whitespace-nowrap">
                        YNK
                      </p>
                      <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffffb2] text-[11.2px] tracking-[0] leading-[16.8px]">
                        Start: 09/10/22 | End: 09/10/22
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-[83px] h-[33px] rounded-[8px] p-[8px,12px,8px,12px] gap-10 bg-[#3F444E] relative right-[7px]">
                    <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] text-right tracking-[0] leading-[16.8px] whitespace-nowrap">
                      Completed
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col justify-end items-end relative left-[8px]">
                      <p className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] text-right tracking-[0] leading-[16.8px]">
                        $210,000
                      </p>
                      <div className="flex flex-row gap-1">
                        <img src={navicon1} alt="" />
                        <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffffb2] text-[12px] text-right tracking-[0] leading-[normal] mt-[5px]">
                          ETH
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_Scientist;
