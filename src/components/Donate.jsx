import React from "react";

const Donate = () => {
  return (
    <div className=" mx-auto w-[777px] h-[728px] ">
      <div className="flex justify-center">
        <div className="w-[379px] h-[64px] bg-[#2F3338] rounded-full flex gap-10 justify-center items-center">
          <div className="w-[164px] h-[56px] rounded-full flex justify-center items-center">
            <p className="text-[#FFFFFF]">Swap</p>
          </div>
          <div className="w-[164px] h-[56px] bg-[#3F444E] rounded-full flex justify-center items-center">
            <p className="text-[#FFFFFF]">Donate</p>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[777px] h-[640px] bg-[#2F3338] rounded-lg mt-7 flex justify-center my-auto items-center ">
          <div className=" text-white w-[675px] h-[640px] ">
            <div className="h-[150px] my-auto flex items-center justify-center">
              <p className="text-center text-xl">Donate</p>
            </div>
            <div className="flex flex-wrap gap-6 ">
              <div className="w-[675px] h-[60px] rounded-lg bg-[#3F444E] flex  px-4 py-3">
                <img
                  className="rounded-lg"
                  src="https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg"
                  alt=""
                />

                <div className="w-[113px] h-[37px] mx-3">
                  <p className="text-sm text-white">California Davis</p>
                  <p className="text-xs text-[#FFFFFF52]">@Julius Caesar</p>
                </div>
              </div>
              <div className="w-[675px] h-[60px] rounded-lg bg-[#3F444E] flex justify-between px-4 py-4">
                <p>5.00</p>
                <p>Polygon</p>
              </div>

              <div className="w-[675px] h-[133px] rounded-lg bg-[#3F444E]">
                {/* <input
                  type="text"
                  placeholder="Your message here.."
                  className="w-full h-full bg-[#3F444E] rounded-lg placeholder-left placeholder-top px-4"
                /> */}
                <textarea
                  type="text"
                  placeholder="Your message here.."
                  className="w-full h-full bg-[#3F444E] rounded-lg placeholder-left placeholder-top px-4 py-4"
                ></textarea>
              </div>
              <div className="w-[675px] h-[56px] rounded-lg bg-[#6F49FD] flex justify-center">
                <p className="text-white text-lg my-auto">Donate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
