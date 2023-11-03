import { useState } from "react";
import { PiCaretDownBold, PiHouseFill, PiUsersBold, PiAtom, PiHandshakeFill, PiPlusCircleDuotone } from "react-icons/pi";
import { IoFileTrayOutline, IoSettingsOutline } from "react-icons/io5";
import { BsInfoLg, BsCircleHalf } from "react-icons/bs";

import Navbar from "./navbar";

import logo from "../assets/logo.svg";
import bitcoin from "../assets/bitcoin.svg";
import ethereum from "../assets/ethereum.svg";


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
            title: "YOUR COIN", icon: "", spacing: true,
            submenu: true,
            submenuItems: [
                { title: "BSC", img: bitcoin },
                { title: "Ethereum", img: ethereum },
                { title: "Add new coin", icon: <PiPlusCircleDuotone size={24} /> },
            ],

        },
        { title: "Settings", spacing: true, icon: <IoSettingsOutline /> },
        { title: "Help & FAQ", icon: <BsInfoLg /> },
        { title: "Dark mode", icon: <BsCircleHalf /> },

    ];
    return (
        
            <div className={`${open ? "w-[360px]" : "w-[120px]"} bg-[#2F3338]  text-white text-[15px] h-[900px] px-[30px]  duration-300 relative`}>
                <div className="inline-flex pt-[30px] items-center ">
                    <img src={logo} className={`rounded  cursor-pointer block float-left duration-500 ${open && "rotate-[360deg]"}`} onClick={() => setOpen(!open)} />
                    <h1 className={`text-white origin-left font-semibold text-2xl pl-4 duration-300 ${!open && "scale-0"} `}>
                        Auxpo
                    </h1>
                </div>

                <ul className="pt-[11px] text-[#959799]">
                    {Menus.map((menu, index) => (
                        <>
                            <li key={index} className={` text-sm h-[52px] flex items-center
                   gap-x-4 cursor-pointer p-[16px] hover:bg-gray-600 hover:text-white rounded-md mt-2 ${menu.spacing ? "mt-[44px]" : "mt-2"}
                  `}>
                                <span className="text-2xl block float-left items-center">
                                    {menu.icon ? menu.icon : <PiHouseFill />}
                                   
                                </span>

                                <span className={`text-base font-nornal flex-1 ${!open && "hidden"}`}>{menu.title}</span>
                                {menu.submenu && (
                                    <PiCaretDownBold className={`${submenuOpen && "rotate-180 "}`} onClick={() =>
                                        setSubmenuOpen(!submenuOpen)} />
                                )}
                            </li>

                            {menu.submenu && submenuOpen && (
                                <ul>
                                    {menu.submenuItems.map((submenuItems, index) => (
                                        <li key={index} className={`h-[24px] text-[#959799] flex items-center
                    cursor-pointer p-[16px] hover:bg-gray-600 hover:text-white rounded-md mt-[24px] `}>
                                            <img src={submenuItems.img} />
                                            <p className="text-2xl block float-left items-center">{submenuItems.icon}</p>
                                            <span className={`flex items-center pl-[16px] ${!open && "hidden"}`}>

                                                {submenuItems.title}
                                            </span>
                                        </li>

                                    ))}

                                </ul>
                            )}
                        </>
                    ))}
                </ul>
            </div>
            

        

    )

}
export default Sidebar;