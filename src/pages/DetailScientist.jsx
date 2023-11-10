import React from "react";

const DetailScientist = () => {
  return (
    <div className="w-full h-[546px] mt-16">
      <div className="w-full h-full mt-16">
        <div className="flex justify-between">
          <div className="w-[204px] h-[390px] flex flex-col gap-[48px]">
            <div className="w-[203xp] h-[86px] gap-[8px]">
              <h1 className="w-[60px] h-[45px] font-extrabold text-[32px]">
                #01
              </h1>
              <hr className="w-[203px] border opacity-[40%] mb-[5px]" />

              <h1 className="w-[153px] h-[33px] font-semibold text-[24px] text-[#bcbcbc] capitalize">
                the scientist
              </h1>
            </div>
            <div className="w-[203px] h-[86px] mb-[78px]">
              <h1
                className={
                  "w-[60px] h-[45px] text-[32px] font-extrabold text-white leading-[44px] mb-[5px]"
                }
              >
                #02
              </h1>
              <hr className="w-[203px] border opacity-[40%] mb-[5px]" />
              <h1 className="w-[170px] h-[33px] font-semibold text-[24px] text-[#bcbcbc] capitalize ">
                califomia davis the project
              </h1>
            </div>
            <div className="w-[203px] h-[86px] mb-[48px]">
              <h1
                className={
                  "w-[60px] h-[45px] text-[32px] font-extrabold text-white leading-[44px] mb-[5px]"
                }
              >
                #03
              </h1>
              <hr className="w-[203px] border opacity-[40%] mb-[5px]" />
              <h1 className="w-[153px] h-[33px] font-semibold text-[24px] text-[#bcbcbc] capitalize">
                statistics
              </h1>
            </div>
          </div>
          <div className="text-white">
            <img
              src="https://images.pexels.com/photos/5490803/pexels-photo-5490803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-[309px] h-[420px] border-[10px] border-[#ccc]"
              alt=""
            />
          </div>

          <div className="w-[487px] h-[315px] my-auto">
            <h1 className="w-[274px] h-[54px] font-bold text-[45px] tracking-tighter-[0.5%] mb-[16px] text-white capitalize ">
              julius caesar
            </h1>

            <div className="w-[240px] h-[19px] mb-[16px] ">
              <p className="h-[19px] font-medium text-[16px] tracking-tighter-[0.5%] capitalize text-white opacity-[80%]">
                category :
                <span className="w-[147px] h-[19px] opacity-[40%] ml-[20px] font-normal text-[16px]">
                  Lorem isumpasd...
                </span>
              </p>
            </div>

            <div className="w-[414px] h-[19px] mb-[16px] ">
              <p className="h-[19px] font-medium text-[16px] tracking-tighter-[0.5%] capitalize text-white opacity-[80%]">
                keywords :
                <span className="w-[147px] h-[19px] opacity-[40%] ml-[20px] font-normal text-[16px]">
                  Lorem isumpasd...Lorem isumpasd..
                </span>
              </p>
            </div>

            <div className="w-[240px] h-[19px] mb-[16px] ">
              <p className=" h-[19px] font-medium text-[16px] tracking-tighter-[0.5%] capitalize text-white opacity-[80%]">
                description :
              </p>
              <p className=" w-[487px] h-[152px] mt-[5px] opacity-[40%] text-white font-normal text-[16px] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                veniam, libero, rerum recusandae nemo vero cum suscipit laborum
                dolorem repellat magni repellendus qui sint itaque veritatis! Sunt
                qui laboriosam velit!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailScientist;
