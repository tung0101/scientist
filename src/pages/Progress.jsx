import React from "react";
import {
  detailproject1,
  detailproject2,
  progress1,
  progress2,
} from "../assets";

const Progress = () => {
  return (
    <div className="text-white bg-black w-full">
      <div className="grid grid-cols-3 gap-6">
        <div className="w-full h-full gap-6 col-span-1">
          <div>
            <img
              src={detailproject1}
              alt="detailproject1"
              className="rounded-[8px]"
            />
            <div className="flex justify-center items-center">
              <div className="flex w-[388px] items-center justify-between p-[16px] relative bg-[#000000b2] rounded-[8px] bottom-20">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-dark-mode-colorthir-color text-[16px] tracking-[0.08px] leading-[24px] whitespace-nowrap">
                  This pool start in:
                </div>
                <p className="relative w-[140px] opacity-80 [font-family:'Inter-Medium',Helvetica] font-medium text-dark-mode-colorthir-color text-[16px] tracking-[0.08px] leading-[normal]">
                  7d : 3h : 10m : 59s
                </p>
              </div>
            </div>
            <h3 className="relative bottom-6 [font-family:'Inter-Medium',Helvetica]">
              Meet the Scientist
            </h3>
            <div className="border border-[#FFFFFF] relative bottom-3" />
          </div>

          <div className="bg-[#2F3338] w-full h-fit rounded-lg gap-3 border-[1,0,0,0]">
            <div className="flex gap-3 items-center p-3">
              <img src={detailproject2} alt="detailproject2" />
              <div>
                <h2 className="flex mb-2 text-base">
                  Aparna Nathan, PhD
                </h2>
                <p className="text-xs opacity-[40%] w-full h-full">
                  Aparna is a freelance science writer pursuing a PhD in
                  bioinformatics and genomics at Harvard University.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-fit rounded-lg p-2 gap-3 bg-[#2F3338] col-span-2">
          <div className="bg-[#3F444E] w-full h-20 p-2 gap-2 rounded-lg flex flex-row justify-between items-center cursor-pointer">
            <div className="w-1/2 h-16 rounded-lg gap-2 py-3 px-6 flex justify-center items-center hover:bg-[#2F3338]">
              <p className="text-2xl leading-10 font-semibold whitespace-nowrap">
                The Project
              </p>
            </div>

            <div className="w-1/2 h-16 rounded-lg gap-2 py-3 px-6 flex justify-center items-center cursor-pointer bg-[#2F3338]">
              <p className="text-2xl leading-10 font-semibold whitespace-nowrap">
                Progress
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center">
              <div className="relative w-64 h-w-64">
                <div className="relative h-64">
                  <div className="absolute w-64 h-64 top-0 left-0">
                    <div className="relative w-44 h-w-44 top-9 left-top-9">
                      <img
                        className="relative w-[156px] h-[183px] left-[28px]"
                        alt="Ellipse"
                        src={progress1}
                      />
                      <img
                        className="absolute w-[175px] h-[172px] top-[12px] left-0"
                        alt="Ellipse"
                        src={progress2}
                      />
                    </div>
                  </div>
                  <div className="absolute h-[45px] top-[106px] left-16 font-bold text-dark-mode-colorthir-color text-4xl tracking-[0] leading-[44.6px] whitespace-nowrap">
                    40%
                  </div>
                </div>
              </div>

              <div>
                <p className="[font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#828282] text-[12px] tracking-[0] leading-[normal]">
                  CURRENT DONATE
                </p>
                <p className="[font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[40px] whitespace-nowrap tracking-[-1.50px] leading-[normal]">
                  5.987,34$ / 1.000.000$
                </p>
              </div>
            </div>

            <div className="flex items-end gap-8 relative w-full h-14 cursor-pointer p-3 mt-6">
              <div className="flex items-center justify-center gap-2 px-6 py-3 relative flex-1 grow bg-cyan-50 shadow-[6px_5px_0px_#5025fb,-6px_-5px_0px_#fb258b] text-black hover:bg-black hover:text-white">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Orbitron-Bold',Helvetica] font-bold text-base text-center tracking-[0] leading-7 whitespace-nowrap hover:text-white">
                  Donate now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
