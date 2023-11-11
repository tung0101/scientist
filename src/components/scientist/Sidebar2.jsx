import { useState } from "react";
import {
  PiAtom,
  PiCaretLeftBold,
  PiCirclesFour,
  PiNewspaper,
  PiUser,
  PiWallet,
  PiMoney,
  PiPaintBrushBroad,
} from "react-icons/pi";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const location = useLocation();
  const isMessagesPage = location.pathname.includes("messages");

  const Menus = [
    { title: "Dashboard", icon: <PiCirclesFour />, router: "/dashboard" },
    { title: "Project", icon: <PiAtom />, router: "/project" },
    { title: "Blog", icon: <PiNewspaper />, router: "/blog" },
    { title: "Account", icon: <PiUser />, router: "/account" },
    { title: "Wallet", icon: <PiWallet />, router: "/wallet" },
    { title: "Withdraw Money", icon: <PiMoney />, router: "/withdraw-money" },
    { title: "Themes", icon: <PiPaintBrushBroad />, router: "/themes" },
  ];
  return (
    <div
      className={`${open ? "w-28" : "w-64"} ${
        isMessagesPage ? "hidden" : "block"
      } bg-primary-500 text-white text-sm min-h-screen px-7 duration-300 overflow-x-scroll scrollbar-none scrollbar-thumb-zinc-600`}
    >
      <div className="inline-flex pt-7 items-center w-full h-fit bg-primary-500 sticky top-0 ">
        <div>
          <PiCaretLeftBold className="text-white text-lg w-[32px] h-[32px] relative left-3" />
        </div>
        <h1
          className={`text-white origin-left font-semibold text-2xl pl-4 duration-300 ${
            open && "scale-0"
          } `}
        >
          Setting
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
                className={`text-sm h-14 flex ${
                  menu.titleAction === "COIN" ? "justify-between" : ""
                } gap-x-4 cursor-pointer p-4 hover:bg-gray-600 hover:text-white rounded-md mt-2 ${
                  menu.spacing ? "mt-3" : "mt-2"
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
      <div>
        <HiOutlineArrowCircleLeft
          className={`text-[#aeb1b3] text-lg w-[32px] h-[32px] relative left-3 cursor-pointer ${
            open ? "rotate-180 duration-500" : "rotate-0 duration-500"
          }`}
          onClick={() => setOpen(!open)}
        />
      </div>
    </div>
  );
};
export default Sidebar;
