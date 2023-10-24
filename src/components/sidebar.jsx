import { useState } from "react";
import { PiCirclesFourDuotone, PiCaretDownBold, PiHouseFill, PiUsersBold, PiAtom, PiHandshakeFill } from "react-icons/pi";
import { IoFileTrayOutline, IoSettingsOutline } from "react-icons/io5";
import { BsInfoLg, BsCircleHalf } from "react-icons/bs";

import Navbar from "./navbar";

import logo from "../assets/logo.svg"


const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const Menus = [
        { title: "Dashboard" },
        { title: "Home", icon: <PiHouseFill /> },
        { title: "Scientist", icon: <PiUsersBold /> },
        { title: "New Project", icon: <PiAtom /> },
        { title: "Joined", icon: <PiHandshakeFill /> },
        { title: "Inbox", icon: <IoFileTrayOutline /> },
        {
            title: "YOUR COIN", icon: '', spacing: true,
            submenu: true,
            submenuItems: [
                { title: "BSC" },
                { title: "Ethereum" },
                { title: "Add new coin", },
            ],
        },
        { title: "Settings", spacing: true, icon: <IoSettingsOutline /> },
        { title: "Help & FAQ", icon: <BsInfoLg /> },
        { title: "Dark mode", icon: <BsCircleHalf /> },

    ];
    return (
        <div className='flex'>
            <div className={`${open ? "w-80" : "w-32"} bg-[#2F3338] text-white custom-css h-auto px-9 pt-3  duration-300 relative`}>
                <div className="inline-flex items-center ">
                    <img src={logo} className={`rounded cursor-pointer block float-left duration-500 ${open && "rotate-[360deg]"}`} onClick={() => setOpen(!open)} />
                    <h1 className={`text-white origin-left font-medium text-2xl pl-4 duration-300 ${!open && "scale-0"} `}>
                        Auxpo
                    </h1>
                </div>

                <ul className="pt-6 pl-0.5">
                    {Menus.map((menu, index) => (
                        <>
                            <li key={index} className={`text-white text-sm flex items-center
                   gap-x-4 cursor-pointer p-3 hover:bg-gray-600	rounded-md mt-2 ${menu.spacing ? "mt-9" : "mt-2"}
                  `}>
                                <span className="text-2xl block float-left">
                                    {menu.icon ? menu.icon : <PiCirclesFourDuotone />}
                                </span>
                                <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>{menu.title}</span>
                                {menu.submenu && (
                                    <PiCaretDownBold className={`${submenuOpen && "rotate-180 "}`} onClick={() =>
                                        setSubmenuOpen(!submenuOpen)} />
                                )}
                            </li>

                            {menu.submenu && submenuOpen && (
                                <ul>
                                    {menu.submenuItems.map((submenuItems, index) => (
                                        <li key={index} className={`text-white flex items-center
                   gap-x-4 cursor-pointer p-2 hover:bg-gray-600	rounded-md mt-2 px-2 ${!open && "hidden"}`}>
                                            {submenuItems.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    ))}
                </ul>
            </div>
            <Navbar />
           
        </div>
        
    )
   
}
export default Sidebar;