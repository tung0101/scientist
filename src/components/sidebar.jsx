import { useState } from "react";
import { PiCaretDownBold, PiHouseFill, PiUsersBold, PiAtom, PiHandshakeFill, } from "react-icons/pi";
import { IoFileTrayOutline, IoSettingsOutline } from "react-icons/io5";
import { BsInfoLg, BsCircleHalf } from "react-icons/bs";

// import Navbar from "./navbar";

import Addcoin from "../assets/Addcoin"
import Bitcoin from "../assets/Bitcoin";
import Ethereum from "../assets/Ethereum";

import logo from "../assets/logo.svg";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const Menus = [
        
        { title: "Home", icon: <PiHouseFill /> },
        { title: "Scientist", icon: <PiUsersBold /> },
        { title: "New Project", icon: <PiAtom /> },
        { title: "Joined", icon: <PiHandshakeFill /> },
        { title: "Inbox", icon: <IoFileTrayOutline /> },
        {
            title: "YOUR COIN", titleAction: "COIN", icon: "", spacing: true,
            submenu: true,
            submenuItems: [
                { title: "BSC", icon: <Bitcoin /> },
                { title: "Ethereum", icon: <Ethereum />},
                { title: "Add new coin", icon: <Addcoin /> },
            ],

        },
        { title: "Settings", spacing: true, icon: <IoSettingsOutline /> },
        { title: "Help & FAQ", icon: <BsInfoLg /> },
        { title: "Dark mode", icon: <BsCircleHalf /> },

    ];
    return (
        <div className={`${open ? "w-28" : "w-64"} bg-primary-500 text-white text-sm max-h-screen px-7 duration-300 overflow-x-scroll scrollbar-none scrollbar-thumb-zinc-600`}>
            <div className="inline-flex pt-7 items-center w-full h-fit bg-primary-500 sticky top-0 ">
                <img src={logo} className={`rounded cursor-pointer block float-left duration-500 ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} alt="" />
                <h1 className={`text-white origin-left font-semibold text-2xl pl-4 duration-300 ${open && "scale-0"} `}>
                    Auxpo
                </h1>
            </div>
            <ul className="pt-3 text-[#959799] w-full h-full overflow-hidden">
                {Menus.map((menu, index) => (
                    <div key={index}>
                        <li className={` text-sm h-[52px] flex items-center gap-x-4 cursor-pointer p-4 hover:bg-gray-600 hover:text-white rounded-md mt-2 ${menu.spacing ? "mt-[44px]" : "mt-2"}`}>
                            <span className="text-2xl block float-left items-center">
                                {menu.icon ? menu.icon : <PiHouseFill />}
                            </span>
                            <span className={`text-base font-nornal flex-1 ${open && "hidden"}`} >{menu.title}</span>
                            {menu.submenu && (
                                <PiCaretDownBold className={`${submenuOpen && "rotate-180 "}`} onClick={() => setSubmenuOpen(!submenuOpen)} />
                            )}
                        </li>
                        {menu.submenu && submenuOpen && (
                            <ul>
                                {menu.submenuItems.map((submenuItems, index) => (
                                    <li key={index} className={`h-6 text-[#959799] flex items-center gap-x-4 cursor-pointer p-5 hover:bg-gray-600 hover:text-white rounded-md mt-4 `}>
                                        <div className="text-2xl flex left-2">{submenuItems.icon}</div>
                                        <span className={`flex items-center ${open && "hidden"}`}>
                                            {submenuItems.title}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </ul>
        </div>
    )

}
export default Sidebar;