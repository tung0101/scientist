import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { filter } from "../assets";
import { Link } from "react-router-dom";

function Scientists() {
  return (
    <div className="w-full h-full grid grid-cols-4 gap-5 text-white">
      <div className="flex-2 col-span-3 pr-4 border-r-2 border-[#959799]">
        <div className="rounded-lg text-white ">
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-row items-center gap-10 text-2xl">
              <h2 className="text- font-semibold">Scientist</h2>
            </div>
            <div className="flex justify-center items-center bg-[#3F444E] w-24 h-10 rounded-xl gap-2 cursor-pointer">
              <img src={filter} alt="filter" />
              <button>Filter</button>
            </div>
          </div>
          <div className="w-full h-fit bg-[#2F3338] rounded-xl shadow-md overflow-hidden md:max-w-6xl mb-10 p-4">
            <div>
              <div className="border-b-2 border-[#959799] pb-4">
                <div className="grid grid-cols-4 gap-4">
                  {" "}
                  <div className="col-span-1">
                    <img
                      alt=""
                      src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/LOC-3b46036u_e7ummz_popxp2.jpg"
                      className="object-scale-down w-full h-full"
                    />
                  </div>
                  <div className="col-span-3">
                    <div className="flex items-start justify-between uppercase tracking-wide text-xl">
                      <div>
                        <span className="font-medium ">Jacob Jones </span>
                        <a
                          href="/"
                          className="block mt-1 text-sm pb-3 leading-tight font-medium text-slate-500 hover:underline"
                        >
                          @Leonel Messi
                        </a>
                      </div>
                      <div>
                        <p className="text-xs font-semibold mt-1">
                          NFT, Technology, Medical, Web3
                        </p>
                      </div>
                    </div>

                    <p className="mt-2 overscroll-contain text-slate-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo con Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatu
                    </p>
                    <a
                      href="/"
                      className="block mt-1 text-lg pb-3 leading-tight pt-5 font-medium text-slate-400 hover:underline"
                    >
                      Project participated:<b className="text-white pl-1">79</b>{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid mt-4">
                <div className="flex gap-4">
                  <div className="">
                    <Link to="/messages">
                      <button className="bg-transparent hover:bg-indigo-600 text-white-700 font-semibold hover:text-white  border border-indigo-600 hover:border-transparent w-32 py-2 px-4 rounded">
                        Chat
                      </button>
                    </Link>
                  </div>
                  <Link to="/detailscientist">
                    <button className="bg-[#6F49FD] hover:bg-indigo-600 text-white-700 font-semibold hover:text-white  border border-indigo-600 hover:border-transparent w-32 py-2 px-4 rounded">
                      View more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit bg-[#2F3338] rounded-xl shadow-md overflow-hidden md:max-w-6xl mb-10 p-4">
            <div>
              <div className="border-b-2 border-[#959799] pb-4">
                <div className="grid grid-cols-4 gap-4">
                  {" "}
                  <div className="col-span-1">
                    <img
                      alt=""
                      src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/LOC-3b46036u_e7ummz_popxp2.jpg"
                      className="object-scale-down w-full h-full"
                    />
                  </div>
                  <div className="col-span-3">
                    <div className="flex items-start justify-between uppercase tracking-wide text-xl">
                      <div>
                        <span className="font-medium ">Jacob Jones </span>
                        <a
                          href="/"
                          className="block mt-1 text-sm pb-3 leading-tight font-medium text-slate-500 hover:underline"
                        >
                          @Leonel Messi
                        </a>
                      </div>
                      <div>
                        <p className="text-xs font-semibold mt-1">
                          NFT, Technology, Medical, Web3
                        </p>
                      </div>
                    </div>

                    <p className="mt-2 overscroll-contain text-slate-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo con Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatu
                    </p>
                    <a
                      href="/"
                      className="block mt-1 text-lg pb-3 leading-tight pt-5 font-medium text-slate-400 hover:underline"
                    >
                      Project participated:<b className="text-white pl-1">79</b>{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid mt-4">
                <div className="flex gap-4">
                  <div className="">
                    <button className="bg-transparent hover:bg-indigo-600 text-white-700 font-semibold hover:text-white  border border-indigo-600 hover:border-transparent w-32 py-2 px-4 rounded">
                      Chat
                    </button>
                  </div>
                  <button className="bg-[#6F49FD] hover:bg-indigo-600 text-white-700 font-semibold hover:text-white  border border-indigo-600 hover:border-transparent w-32 py-2 px-4 rounded">
                    View more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit bg-[#2F3338] rounded-xl shadow-md overflow-hidden md:max-w-6xl mb-10 p-4">
            <div>
              <div className="border-b-2 border-[#959799] pb-4">
                <div className="grid grid-cols-4 gap-4">
                  {" "}
                  <div className="col-span-1">
                    <img
                      alt=""
                      src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/LOC-3b46036u_e7ummz_popxp2.jpg"
                      className="object-scale-down w-full h-full"
                    />
                  </div>
                  <div className="col-span-3">
                    <div className="flex items-start justify-between uppercase tracking-wide text-xl">
                      <div>
                        <span className="font-medium ">Jacob Jones </span>
                        <a
                          href="/"
                          className="block mt-1 text-sm pb-3 leading-tight font-medium text-slate-500 hover:underline"
                        >
                          @Leonel Messi
                        </a>
                      </div>
                      <div>
                        <p className="text-xs font-semibold mt-1">
                          NFT, Technology, Medical, Web3
                        </p>
                      </div>
                    </div>


                    <p className="mt-2 overscroll-contain text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
                    <a href="/" className="block mt-1 text-lg pb-3 leading-tight pt-5 font-medium text-slate-400 hover:underline">Project participated:<b className="text-white pl-1">79</b> </a>
                      
                  </div>
                </div>
              </div>
              <div className="grid mt-4">
                <div className="flex gap-4">
                  <div className="">
                    <button className="bg-transparent hover:bg-indigo-600 text-white-700 font-semibold hover:text-white  border border-indigo-600 hover:border-transparent w-32 py-2 px-4 rounded">
                      Chat
                    </button>
                  </div>
                  <button className="bg-[#6F49FD] hover:bg-indigo-600 text-white-700 font-semibold hover:text-white  border border-indigo-600 hover:border-transparent w-32 py-2 px-4 rounded">
                    View more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 col-span-1">
        <div className="flex ml-5 mb-4"></div>
        <div className="mb-5">
          <h2 className=" font-normal text-2xl underline">Trending</h2>
        </div>
        <div className="h-24 rounded-2xl mb-4 bg-[#2F3338] p-3">
          <div className="flex gap-2">
            <img
              src="https://file.hstatic.net/1000075078/file/_dsc2358_820aba0fa2c146578565ead25a3c05ec_grande.jpg"
              alt="Description"
              className="w-20 rounded-xl shadow-lg"
            />
            <div className="grid-cols-1">
              <span className="text-base">
                Specialized T Cells Patrol Human Cornea
              </span>
            </div>
          </div>
        </div>
        <div className="h-24 rounded-2xl mb-4 bg-[#2F3338] p-3">
          <div className="flex gap-2">
            <img
              src="https://file.hstatic.net/1000075078/file/_dsc2358_820aba0fa2c146578565ead25a3c05ec_grande.jpg"
              alt="Description"
              className="w-20 rounded-xl shadow-lg"
            />
            <div className="grid-cols-1">
              <span className="text-base">
                Specialized T Cells Patrol Human Cornea
              </span>
            </div>
          </div>
        </div>
        <div className="h-24 rounded-2xl mb-4 bg-[#2F3338] p-3">
          <div className="flex gap-2">
            <img
              src="https://file.hstatic.net/1000075078/file/_dsc2358_820aba0fa2c146578565ead25a3c05ec_grande.jpg"
              alt="Description"
              className="w-20 rounded-xl shadow-lg"
            />
            <div className="grid-cols-1">
              <span className="text-base">
                Specialized T Cells Patrol Human Cornea
              </span>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h2 className=" font-normal text-2xl underline">New</h2>
        </div>
        <div className="h-24 rounded-2xl mb-4 bg-[#2F3338] p-3">
          <div className="flex gap-2">
            <img
              src="https://file.hstatic.net/1000075078/file/_dsc2358_820aba0fa2c146578565ead25a3c05ec_grande.jpg"
              alt="Description"
              className="w-20 rounded-xl shadow-lg"
            />
            <div className="grid-cols-1">
              <span className="text-base">
                Specialized T Cells Patrol Human Cornea
              </span>
            </div>
          </div>
        </div>
        <div className="h-24 rounded-2xl mb-4 bg-[#2F3338] p-3">
          <div className="flex gap-2">
            <img
              src="https://file.hstatic.net/1000075078/file/_dsc2358_820aba0fa2c146578565ead25a3c05ec_grande.jpg"
              alt="Description"
              className="w-20 rounded-xl shadow-lg"
            />
            <div className="grid-cols-1">
              <span className="text-base">
                Specialized T Cells Patrol Human Cornea
              </span>
            </div>
          </div>
        </div>
        <div className="h-24 rounded-2xl mb-4 bg-[#2F3338] p-3">
          <div className="flex gap-2">
            <img
              src="https://file.hstatic.net/1000075078/file/_dsc2358_820aba0fa2c146578565ead25a3c05ec_grande.jpg"
              alt="Description"
              className="w-20 rounded-xl shadow-lg"
            />
            <div className="grid-cols-1">
              <span className="text-base">
                Specialized T Cells Patrol Human Cornea
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scientists;
