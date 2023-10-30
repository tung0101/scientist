import React from "react";
import {
  detailproject1,
  detailproject2,
  progress1,
  progress2,
} from "../assets";

const Progress = () => {
  return (
    <div className="text-white bg-black w-[1320px]">
      <div className="p-12 flex flex-row gap-[24px]">
        <div className="w-[420px] h-[735px] gap-[24px]">
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

          <div className="bg-[#2F3338] w-[420px] h-[86px] rounded-[8px] gap-[12px] border-[1,0,0,0] p-[12,8,12,8]">
            <div className="flex flex-row justify-around items-center p-3">
              <img src={detailproject2} alt="detailproject2" />

              <h2 className="flex flex-1 pl-4 relative bottom-4 [font-family:'Inter-Medium',Helvetica]">
                Aparna Nathan, PhD
              </h2>
            </div>

            <p className="text-[12px] opacity-[40%] w-[330px] h-[30px] relative bottom-[45px] left-[90px]">
              Aparna is a freelance science writer pursuing a PhD in
              bioinformatics and genomics at Harvard University.
            </p>
          </div>
        </div>

        <div className="w-[796px] h-[476.2px] rounded-[8px] p-[8px] gap-[12px] bg-[#2F3338]">
          <div className="bg-[#3F444E] w-[767px] h-[80px] p-[8px] gap-[8px] rounded-[8px] flex flex-row justify-between items-center cursor-pointer">
            <div className="w-[371.5px] h-[64px] rounded-[10px] gap-[10px] p-[12px,24px,12px,24px]  flex justify-center items-center hover:bg-[#2F3338]">
              <p className="text-[24px] [font-family:'Catamaran-SemiBold',Helvetica] leading-[40px] w-[120px] h-[40px] font-semibold whitespace-nowrap">
                The Project
              </p>
            </div>

            <div className="w-[371.5px] h-[64px] rounded-[10px] gap-[10px] p-[12px,24px,12px,24px] flex justify-center items-center cursor-pointer bg-[#2F3338]">
              <p className="text-[24px] [font-family:'Catamaran-SemiBold',Helvetica] leading-[40px] w-[120px] h-[40px] font-semibold whitespace-nowrap">
                Progress
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-row justify-between ml-6 mr-[100px] items-center">
              <div className="relative w-[260px] h-[260px]">
                <div className="relative h-[260px]">
                  <div className="absolute w-[260px] h-[260px] top-0 left-0">
                    <div className="relative w-[184px] h-[184px] top-[38px] left-[38px]">
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
                  <div className="absolute h-[45px] top-[106px] left-[97px] [font-family:'Inter-Bold',Helvetica] font-bold text-dark-mode-colorthir-color text-[32px] tracking-[0] leading-[44.6px] whitespace-nowrap">
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

            <div className="flex items-end gap-[32px] relative w-[748px] h-[52px] m-4 cursor-pointer ">
              <div className="flex items-center justify-center gap-[10px] px-[24px] py-[12px] relative flex-1 grow bg-cyan-50 shadow-[6px_5px_0px_#5025fb,-6px_-5px_0px_#fb258b] hover:bg-black">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Orbitron-Bold',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[28px] whitespace-nowrap hover:text-white">
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
