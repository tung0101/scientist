import React from "react";

import {
  logo,
  navatom,
  navcirclefour,
  navcomponent,
  navdark,
  navhandshake,
  navhome,
  navicon1,
  navicon2,
  navicon3,
  navsignout,
  navusers,
  pluscircle,
} from "../assets";

const Sidebar = () => {
  return (
    <section className="flex justify-between items-center flex-col relative bg-[#2F3338] w-[150px]">
      <div className="p-4">
        <img src={logo} alt="" />
      </div>

      <div className="w-[56px] h-[56px] bg-[#3F444E] rounded-[12px] relative bottom-[600px]">
        <img
          src={navcirclefour}
          alt="nav circle four"
          className="
            flex
            flex-col
            justify-center
            items-center
            relative
            p-4
            cursor-pointer
            hover:bg-black
            hover:rounded-[12px]
          "
        />

        <img
          src={navhome}
          alt="nav home"
          className="
            flex
            flex-col
            justify-center
            items-center
            relative
            left-[2px]
            mt-0
            p-4
            cursor-pointer
            hover:bg-black
            hover:rounded-[12px]
          "
        />

        <img
          src={navusers}
          alt="nav users"
          className="
            flex
            flex-col
            justify-center
            items-center
            relative
            left-[2px]
            mt-0
            p-4
            cursor-pointer
            hover:bg-black
            hover:rounded-[12px]
          "
        />

        <img
          src={navatom}
          alt="nav atom"
          className="
            flex
            flex-col
            justify-center
            items-center
            relative
            left-[2px]
            bg-[#3F444E]
            rounded-[12px]
            mt-0
            p-4
            cursor-pointer
            hover:bg-black
            hover:rounded-[12px]
          "
        />

        <img
          src={navhandshake}
          alt="nav handshake"
          className="
            flex
            flex-col
            justify-center
            items-center
            relative
            left-[2px]
            mt-0
            p-4
            cursor-pointer
            hover:bg-black
            hover:rounded-[12px]
          "
        />

        <img
          src={navcomponent}
          alt="nav component"
          className="
            flex
            flex-col
            justify-center
            items-center
            relative
            left-[2px]
            mt-0
            p-4
            cursor-pointer
            hover:bg-black
            hover:rounded-[12px]
          "
        />

        <div className="border border-[#3F444E] mt-0 " />

        <div className="text-[#B3B3B3] flex flex-col justify-center items-center mt-0">
          Coin
        </div>

        <img
          src={navicon1}
          alt="nav icon 1"
          className="
            flex
            flex-col
            justify-center
            items-center
            relative
            left-[2px]
            mt-0
            p-4
            cursor-pointer
            hover:bg-black
            hover:rounded-[12px]
          "
        />

        <img
          src={navicon2}
          alt="nav icon 2"
          className="
            flex
            flex-col
            justify-center
            items-center
            relative
            left-[2px]
            mt-[-12px]
            p-4
            cursor-pointer
            hover:bg-black
            hover:rounded-[12px]
          "
        />

        <img
          src={pluscircle}
          alt="plus circle"
          className="
            flex
            flex-col
            justify-center
            items-center
            relative
            left-[2px]
            mt-[-12px]
            p-4
            cursor-pointer
            hover:bg-black
            hover:rounded-[12px]
          "
        />

        <div
          className="
          border border-[#3F444E] mt-0
          "
        />

        <img
          src={navicon3}
          alt="nav icon 3"
          className="
            flex
            flex-col
            justify-center
            items-center
            relative
            left-[2px]
            mt-0
            p-4
            cursor-pointer
            hover:bg-black
            hover:rounded-[12px]
          "
        />

        <img
          src={navdark}
          alt="nav dark"
          className="
            flex
            flex-col
            justify-center
            items-center
            relative
            left-[2px]
            mt-[-12px]
            p-4
            cursor-pointer
            hover:bg-black
            hover:rounded-[12px]
          "
        />

        <img
          src={navsignout}
          alt="nav signout"
          className="
            flex
            flex-col
            justify-center
            items-center
            relative
            left-[2px]
            mt-[-12px]
            p-4
            cursor-pointer
            hover:bg-black
            hover:rounded-[12px]
          "
        />
      </div>
    </section>
  );
};

export default Sidebar;
