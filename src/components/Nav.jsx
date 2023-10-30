import { Vector, icons_1, icons_2, icons_3 } from "../assets";

const Nav = () => {
  return (
    <div className="bg-[#2F3338] relative lg:w-[1280px] lg:h-[100px] flex flex-row justify-start">
      <div className="flex flex-row justify-start items-center m-7 pl-2 border-[1.5px] rounded-[13px] w-[558px] h-[41px] bg-[#2F3338]">
        <div
          className="
        rounded-[13px]
        w-[41px]
        h-[41px]
        flex
        justify-center
        items-center
        cursor-pointer
        "
        >
          <img src={Vector} alt="" />
        </div>
        <div>
          <input
            type="text"
            className="bg-[#2F3338] pl-4 rounded-[13px] w-[510px] h-[38px] text-white"
            placeholder="Search new project"
          />
        </div>
      </div>

      <div className="inline-flex items-center gap-[12px] px-[16px] py-[10px] relative bg-white rounded-[12px] w-[92px] h-[41px] cursor-pointer mt-7 ml-2 left-12 hover:bg-black">
        <img src={icons_1} alt="flus_icon" className="" />
        <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[12px] tracking-[0] leading-[normal] hover:text-white">
          <strong>NEW</strong>
        </div>
      </div>

      <div className="relative w-[32px] h-[32px] cursor-pointer">
        <img
          className="relative w-8 h-8 left-[120px] top-8"
          alt="icons_2"
          src={icons_2}
        />
      </div>

      <div className="relative w-[32px] h-[32px] cursor-pointer">
        <img
          src={icons_3}
          alt=""
          className="relative w-8 h-8 top-8 left-[150px]"
        />
        <div className="relative w-[7px] h-[7px] top-[4px] left-[170px] bg-[#f8961c] rounded-[3.5px]" />
      </div>

      <div className="flex flex-row items-center gap-4 relative left-[200px]">
        <div className="inline-flex items-center justify-center gap-[10px] px-[24px] py-[16px] relative bg-[#6f49fd] rounded-[12px] overflow-hidden w-[153px] h-[47px] cursor-pointer hover:bg-black">
          <div className="relative mt-[-1.00px]  text-[#ffffff] text-[12px] font-bold tracking-[0] leading-[normal] w-[105px] h-[15px]">
            Connect To Wallet
          </div>
        </div>

        <div className="inline-flex items-center justify-center relative bg-[#959799] rounded-[12px] overflow-hidden w-[161px] h-[47px] cursor-pointer hover:bg-black">
          <div className="relative text-[#ffffff] text-[12px] text-center font-bold leading-normal w-[105px] h-[15px] flex items-center justify-center">
            Login with Scientists
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
