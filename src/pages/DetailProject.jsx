import React from "react";
import { detailproject1, detailproject2, navicon1 } from "../assets";

const DetailProject = () => {
  return (
    <div className="text-white bg-black w-[1320px]">
      <div className="p-12 flex flex-row gap-[24px]">
        <div className="w-[420px] h-[735px] gap-[24px]">
          <div>
            <img
              src={detailproject1}
              alt="detailproject1"
              className="rounded-lg"
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

        <div className="w-[796px] h-[735px] rounded-[8px] p-[8px] gap-[12px] bg-[#2F3338]">
          <div className="bg-[#3F444E] w-[767px] h-[80px] p-[8px] gap-[8px] rounded-[8px] flex flex-row justify-between items-center cursor-pointer">
            <div className="w-[371.5px] h-[64px] rounded-[10px] gap-[10px] p-[12px,24px,12px,24px] bg-[#2F3338] flex justify-center items-center">
              <p className="text-[24px] [font-family:'Catamaran-SemiBold',Helvetica] leading-[40px] w-[120px] h-[40px] font-semibold whitespace-nowrap">
                The Project
              </p>
            </div>

            <div className="w-[371.5px] h-[64px] rounded-[10px] gap-[10px] p-[12px,24px,12px,24px] flex justify-center items-center cursor-pointer hover:bg-[#2F3338]">
              <p className="text-[24px] [font-family:'Catamaran-SemiBold',Helvetica] leading-[40px] w-[120px] h-[40px] font-semibold whitespace-nowrap">
                Progress
              </p>
            </div>
          </div>

          <div>
            <div>
              <p className="relative w-[748px] h-[47px] top-[16px] left-[16px] [font-family:'Caudex-Bold',Helvetica] tracking-[0.5%] font-bold text-[40px] leading-[47.2px]">
                Califomia Davis
              </p>

              <p className="w-[748px] h-[140px] [font-family:'Inter-Regular',Helvetica] font-normal text-[16px] tracking-[0.5%] leading-[20px] pt-[24px] pl-4 mt-[24px] opacity-[32%]">
                Pașca’s team generated more than 1,000 organoids mimicking the
                parts of the forebrain where interneurons begin and end their
                journey: the subpallium and the cortex. In each subpallium
                organoid, they used CRISPR gene editing technology to eliminate
                one of 425 neurodevelopmental disorder genes curated by the
                researchers. Then they generated assembloids by fusing
                gene-edited subpallium organoids with cortex organoids. By
                labeling the interneurons with a molecule that emits green
                light, they could track interneuron generation and movement
                between the two halves of the assembloid.
              </p>

              <p className="w-[748px] h-[140px] [font-family:'Inter-Regular',Helvetica] font-normal text-[16px] tracking-[0.5%] leading-[20px] pt-[24px] pl-4 mb-[24px] opacity-[32%]">
                Pașca’s team generated more than 1,000 organoids mimicking the
                parts of the forebrain where interneurons begin and end their
                journey: the subpallium and the cortex. In each subpallium
                organoid, they used CRISPR gene editing technology to eliminate
                one of 425 neurodevelopmental disorder genes curated by the
                researchers. Then they generated assembloids by fusing
                gene-edited subpallium organoids with cortex organoids. By
                labeling the interneurons with a molecule that emits green
                light, they could track interneuron generation and movement
                between the two halves of the assembloid.
              </p>
            </div>

            <div className="flex items-start gap-[12px] relative p-5">
              <div className="relative w-fit mt-[-1.00px] opacity-[60%] [font-family:'Inter-Medium',Helvetica] font-medium text-[20px] tracking-[0.10px] leading-[normal] whitespace-nowrap">
                Category:
              </div>
              <div className="relative flex-1 mt-[-1.00px] opacity-40 [font-family:'Inter-Regular',Helvetica] font-normal text-[20px] tracking-[0.10px] leading-[normal] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                NFT
              </div>
            </div>

            <div className="flex items-start gap-[12px] relative p-5">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[20px] tracking-[0.10px] leading-[normal] whitespace-nowrap">
                Network:
              </div>
              <img src={navicon1} alt="detailproject icon" />
              <div className="relative flex-1 mt-[-1.00px] opacity-40 [font-family:'Inter-Regular',Helvetica] font-normal text-[20px] tracking-[0.10px] leading-[normal] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                Bitcoin
              </div>
            </div>

            <div className="flex items-start gap-[12px] relative p-5">
              <div className="relative w-fit mt-[-1.00px] opacity-[60%] [font-family:'Inter-Medium',Helvetica] font-medium text-[20px] tracking-[0.10px] leading-[normal] whitespace-nowrap">
                Total Token:
              </div>
              <div className="relative flex-1 mt-[-1.00px] opacity-40 [font-family:'Inter-Regular',Helvetica] font-normal text-[20px] tracking-[0.10px] leading-[normal] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                NFT
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

export default DetailProject;
