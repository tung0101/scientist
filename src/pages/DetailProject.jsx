import React, { useState } from "react";
import { detailproject1, detailproject2, navicon1,  progress1, progress2, } from "../assets";

const DetailProject = () => {
  const [page, setPage] = useState(true);

  return (
    <div className="text-white bg-black w-full">
      <div className="grid grid-cols-3 gap-6">
        <div className="w-full h-full gap-6 col-span-1">
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
        <div className="col-span-2 w-full h-fit rounded-lg p-2 gap-3 bg-[#2F3338]">
          <div className="bg-[#3F444E] w-full h-20 p-2 gap-2 rounded-lg flex flex-row justify-between items-center cursor-pointer ">
            <div className={`w-full h-16 rounded-lg gap-2 px-6 py-3 flex justify-center items-center hover:bg-[#2F3338] ${page === true ? 'bg-[#2F3338]' : '' }`} onClick={() => setPage(true)}>
              <p className="text-lg leading-[40px] w-[120px] h-[40px] font-semibold">
                The Project
              </p>
            </div>

            <div className={`w-full h-16 rounded-lg gap-2 px-6 py-3 flex justify-center items-center cursor-pointer hover:bg-[#2F3338] ${page === false ? 'bg-[#2F3338]' : '' }`} onClick={() => setPage(false)}>
              <p className="text-lg leading-[40px] w-[120px] h-[40px] font-semibold">
                Progress
              </p>
            </div>
          </div>

          <div>
            <div className={`${!page ? "hidden" : ''}`}>
              <div className="px-6">
                <h3 className="flex items-center w-full h-12 tracking-[0.5%] font-bold text-4xl leading-10 my-6">
                  Califomia Davis
                </h3>
                <div>
                  <p className="w-full h-fit font-normal text-base tracking-[0.5%] leading-5 opacity-[32%]">
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

                  <p className="w-full h-fit font-normal text-base tracking-[0.5%] leading-5 mt-6 opacity-30">
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
            </div>
            <div className={`${page ? "hidden" : ''}`}>
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

export default DetailProject;
