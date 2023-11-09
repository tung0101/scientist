import { useState } from "react";
import {
  PiCaretDownBold,
  PiHouseFill,
  PiUsersBold,
  PiAtom,
  PiHandshakeFill,
} from "react-icons/pi";
import { IoFileTrayOutline, IoSettingsOutline } from "react-icons/io5";
import { BsInfoLg, BsCircleHalf } from "react-icons/bs";
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

import Addcoin from "../assets/Addcoin";
import Bitcoin from "../assets/Bitcoin";
import Ethereum from "../assets/Ethereum";

import logo from "../assets/logo.svg";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  
  const location = useLocation();
  const isMessagesPage = location.pathname.includes('messages');

  const Menus = [
    { title: "Home", icon: <PiHouseFill />, router: '/' },
    { title: "Scientist", icon: <PiUsersBold />, router: '/scientist' },
    // { title: "Detail Scientist", icon: <PiUsersBold />, router: '/detailScientist' },
    { title: "New Project", icon: <PiAtom />, router: 'listproject' },
    { title: "Joined", icon: <PiHandshakeFill />, router: '/joined' },
    { title: "Inbox", icon: <IoFileTrayOutline />, router: '/messages' },
    {
      title: <PiCaretDownBold className={`${submenuOpen && "rotate-180 "}`} />,
      titleAction: "COIN",
      router: "/coin",
      spacing: true,
      submenu: true,
      submenuItems: [
        { title: "BSC", icon: <Bitcoin /> },
        { title: "Ethereum", icon: <Ethereum /> },
        { title: "Add new coin", icon: <Addcoin /> },
      ],
    },
    { title: "Settings", spacing: true, icon: <IoSettingsOutline />, router: '/setting' },
    { title: "Help & FAQ", icon: <BsInfoLg />, router: '/help' },
    { title: "Dark mode", icon: <BsCircleHalf />, router: '/dark' },
  ];
  return (
    <div
      className={`${open ? "w-28" : "w-64"} ${isMessagesPage ? 'hidden' : 'block'} bg-primary-500 text-white text-sm max-h-screen px-7 duration-300 overflow-x-scroll scrollbar-none scrollbar-thumb-zinc-600`}
    >
      <div className="inline-flex pt-7 items-center w-full h-fit bg-primary-500 sticky top-0 ">
        <img
          src={logo}
          className={`rounded cursor-pointer block float-left duration-500 ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt=""
        />
        <h1
          className={`text-white origin-left font-semibold text-2xl pl-4 duration-300 ${open && "scale-0"
            } `}
        >
          Auxpo
        </h1>
      </div>
      <ul className="pt-3 text-[#959799] w-full h-full overflow-hidden">
        {Menus.map((menu, index) => (
          <div key={index}>
            {menu.titleAction === "COIN" ? (
              <hr className="mt-6 border-gray-500"></hr>
            ) : (
              ""
            )}
            <NavLink to={menu.router}>
              <li
                className={`text-sm h-14 flex ${menu.titleAction === "COIN" ? "justify-between" : ""
                  } gap-x-4 cursor-pointer p-4 hover:bg-gray-600 hover:text-white rounded-md mt-2 ${menu.spacing ? "mt-3" : "mt-2"
                  }`}
                onClick={() => {
                  menu.titleAction === "COIN"
                    ? setSubmenuOpen(!submenuOpen)
                    : setSubmenuOpen(false);
                }}
              >
                <span className="text-2xl">
                  {menu.icon ? (
                    menu.icon
                  ) : open ? (
                    <p className="text-base relative right-2">COIN</p>
                  ) : (
                    <p className="text-base relative right-1">YOUR COIN</p>
                  )}
                </span>
                <span className={`text-base`}>{menu.title}</span>
              </li>
            </NavLink>
            {menu.submenu && submenuOpen && (
              <ul className="block">
                {menu.submenuItems.map((submenuItems, index) => (
                  <li
                    key={index}
                    className={`h-6 text-[#959799] flex items-center gap-x-3 cursor-pointer p-5 hover:bg-gray-600 hover:text-white rounded-md mb-4 `}
                  >
                    <div className="text-2xl flex relative right-1.5">
                      {submenuItems.icon}
                    </div>
                    <span className={`flex items-center ${open && "hidden"}`}>
                      {submenuItems.title}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {menu.titleAction === "COIN" ? (
              <hr className="mt-3 border-gray-500"></hr>
            ) : (
              ""
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
