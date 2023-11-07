import { FiSearch } from "react-icons/fi";
import { GrFormAdd } from "react-icons/gr";
import { PiChatsCircleDuotone, PiCaretDownBold } from "react-icons/pi";
import { BiSolidBell } from "react-icons/bi";
import { useLocation } from 'react-router-dom';
import Wallet from '../components/Wallet'
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open);
  }

  const location = useLocation();
  const isMessagesPage = location.pathname.includes('messages');

  return (
    <div className={`py-7 px-10 w-full h-24 bg-primary-500 flex ${isMessagesPage ? 'hidden' : 'block'}`}>
      <div className="flex items-center justify-between rounded-xl  border-solid border-2 border-slate-400 w-7/12 h-10 px-2 mr-20">
        <FiSearch className="text-white text-lg block float-left cursor-pointed" />
        <input
          type={"search"}
          placeholder="Search new project"
          className="text-base bg-transparent w-full text-white focus:outline-none ml-2"
        />
      </div>
      <div className="flex items-center justify-between rounded-xl  border-solid border-2 bg-white text-black w-24 px-2 py-2">
        <button className="flex justify-between items-center font-medium text-xs w-24 h-10 mr-4">
          <GrFormAdd size={40} className="w-5" />
          <span>NEW</span>
        </button>
      </div>
      <div className="flex gap-10 items-center text-[#959799] px-10 w-fit">
        <PiChatsCircleDuotone size={32} />
        <BiSolidBell size={32} />
      </div>

      <div className="flex gap-3 relative">
        <button onClick={handleOpen} className="bg-[#6F49FD] rounded-xl w-36 font-medium text-white text-sm shadow-inner shadow-current">
          <div className="">
            <span>Connect To Wallet</span>
          </div>
          <div className={`${open ? 'inline' : 'hidden'}`}>
        <Wallet />
      </div>
        </button>
        <button className="bg-[#959799] rounded-xl w-36 font-medium text-white text-sm shadow-inner shadow-current">
          <span className="flex justify-center items-center">
            Scientist
            <PiCaretDownBold size={20} className="pl-1" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
