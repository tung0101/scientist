import React from "react";
import { filter, navicon2, rectangle } from "../assets";
import { Link } from 'react-router-dom'

const ListProject = () => {
  return (
    <div className="text-white w-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-row items-center gap-10 text-2xl">
          <h2 className="hover:underline cursor-pointer">All</h2>
          <h2 className="hover:underline cursor-pointer">Upcoming</h2>
          <h2 className="hover:underline cursor-pointer">Opening</h2>
          <h2 className="hover:underline cursor-pointer">Completed</h2>
        </div>
        <div className="flex justify-center items-center bg-[#3F444E] w-24 h-10 rounded-xl gap-2 cursor-pointer">
          <img src={filter} alt="filter" />
          <button>Filter</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-7">
        <div className="flex flex-row justify-center items-center">
          <div className="w-[397.33px] h-[400px] bg-[#3F444E] rounded-[12px]">
            <div className="flex justify-center items-center p-[12px]">
              <img src={rectangle} alt="rectangle" />
            </div>
            <div>
              <h2 className="font-bold leading-[19.36px] mt-2 ml-3">
                NATURESGOLD TOKEN
              </h2>
              <h4 className="text-[11px] leading-[13.31px] ml-3 text-[#A2A3A4]">
                @Savannah Nguyen
              </h4>
            </div>

            <div className="flex justify-between items-center p-4 mt-2">
              <h3 className="text-[#B3B3B3]">Network: </h3>
              <div className="flex justify-center items-center gap-2">
                <img src={navicon2} alt="navicon2" />
                <h3 className="text-gray-300">Ethereum</h3>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 mt-[-25px]">
              <h3 className="text-[#B3B3B3]">Total Raise: </h3>
              <div className="flex justify-center items-center gap-2">
                <p className="text-gray-300">100,000 USDT</p>
              </div>
            </div>

            <div className="border bg-[#B3B3B399] m-4 mt-0" />

            <div className="flex justify-between items-center p-4 mt-[-25px]">
              <h3 className="text-[#B3B3B3]">This pool opens in: </h3>
            </div>
            <div className="flex justify-between items-center p-4 mt-[-35px]">
              <p>0d : 19h : 59m : 25s</p>
              <Link to="/listproject/detailproject">
                <div className="flex justify-center items-center bg-[#6f49fd] w-[103px] h-[40px] rounded-[4px] hover:bg-[#6f4f9d] relative bottom-3 cursor-pointer">
                    <button>Detail</button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center">
          <div className="w-[397.33px] h-[400px] bg-[#3F444E] rounded-[12px]">
            <div className="flex justify-center items-center p-[12px]">
              <img src={rectangle} alt="rectangle" />
            </div>
            <div>
              <h2 className="font-bold leading-[19.36px] mt-2 ml-3">
                NATURESGOLD TOKEN
              </h2>
              <h4 className="text-[11px] leading-[13.31px] ml-3 text-[#A2A3A4]">
                @Savannah Nguyen
              </h4>
            </div>

            <div className="flex justify-between items-center p-4 mt-2">
              <h3 className="text-[#B3B3B3]">Network: </h3>
              <div className="flex justify-center items-center gap-2">
                <img src={navicon2} alt="navicon2" />
                <h3 className="text-gray-300">Ethereum</h3>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 mt-[-25px]">
              <h3 className="text-[#B3B3B3]">Total Raise: </h3>
              <div className="flex justify-center items-center gap-2">
                <p className="text-gray-300">100,000 USDT</p>
              </div>
            </div>

            <div className="border bg-[#B3B3B399] m-4 mt-0" />

            <div className="flex justify-between items-center p-4 mt-[-25px]">
              <h3 className="text-[#B3B3B3]">This pool opens in: </h3>
            </div>
            <div className="flex justify-between items-center p-4 mt-[-35px]">
              <p>0d : 19h : 59m : 25s</p>
              <div className="flex justify-center items-center bg-[#6f49fd] w-[103px] h-[40px] rounded-[4px] hover:bg-[#6f4f9d] relative bottom-3 cursor-pointer">
                <button>Detail</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center">
          <div className="w-[397.33px] h-[400px] bg-[#3F444E] rounded-[12px]">
            <div className="flex justify-center items-center p-[12px]">
              <img src={rectangle} alt="rectangle" />
            </div>
            <div>
              <h2 className="font-bold leading-[19.36px] mt-2 ml-3">
                NATURESGOLD TOKEN
              </h2>
              <h4 className="text-[11px] leading-[13.31px] ml-3 text-[#A2A3A4]">
                @Savannah Nguyen
              </h4>
            </div>

            <div className="flex justify-between items-center p-4 mt-2">
              <h3 className="text-[#B3B3B3]">Network: </h3>
              <div className="flex justify-center items-center gap-2">
                <img src={navicon2} alt="navicon2" />
                <h3 className="text-gray-300">Ethereum</h3>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 mt-[-25px]">
              <h3 className="text-[#B3B3B3]">Total Raise: </h3>
              <div className="flex justify-center items-center gap-2">
                <p className="text-gray-300">100,000 USDT</p>
              </div>
            </div>

            <div className="border bg-[#B3B3B399] m-4 mt-0" />

            <div className="flex justify-between items-center p-4 mt-[-25px]">
              <h3 className="text-[#B3B3B3]">This pool opens in: </h3>
            </div>
            <div className="flex justify-between items-center p-4 mt-[-35px]">
              <p>0d : 19h : 59m : 25s</p>
              <div className="flex justify-center items-center bg-[#6f49fd] w-[103px] h-[40px] rounded-[4px] hover:bg-[#6f4f9d] relative bottom-3 cursor-pointer">
                <button>Detail</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center">
          <div className="w-[397.33px] h-[400px] bg-[#3F444E] rounded-[12px]">
            <div className="flex justify-center items-center p-[12px]">
              <img src={rectangle} alt="rectangle" />
            </div>
            <div>
              <h2 className="font-bold leading-[19.36px] mt-2 ml-3">
                NATURESGOLD TOKEN
              </h2>
              <h4 className="text-[11px] leading-[13.31px] ml-3 text-[#A2A3A4]">
                @Savannah Nguyen
              </h4>
            </div>

            <div className="flex justify-between items-center p-4 mt-2">
              <h3 className="text-[#B3B3B3]">Network: </h3>
              <div className="flex justify-center items-center gap-2">
                <img src={navicon2} alt="navicon2" />
                <h3 className="text-gray-300">Ethereum</h3>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 mt-[-25px]">
              <h3 className="text-[#B3B3B3]">Total Raise: </h3>
              <div className="flex justify-center items-center gap-2">
                <p className="text-gray-300">100,000 USDT</p>
              </div>
            </div>

            <div className="border bg-[#B3B3B399] m-4 mt-0" />

            <div className="flex justify-between items-center p-4 mt-[-25px]">
              <h3 className="text-[#B3B3B3]">This pool opens in: </h3>
            </div>
            <div className="flex justify-between items-center p-4 mt-[-35px]">
              <p>0d : 19h : 59m : 25s</p>
              <div className="flex justify-center items-center bg-[#6f49fd] w-[103px] h-[40px] rounded-[4px] hover:bg-[#6f4f9d] relative bottom-3 cursor-pointer">
                <button>Detail</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center">
          <div className="w-[397.33px] h-[400px] bg-[#3F444E] rounded-[12px]">
            <div className="flex justify-center items-center p-[12px]">
              <img src={rectangle} alt="rectangle" />
            </div>
            <div>
              <h2 className="font-bold leading-[19.36px] mt-2 ml-3">
                NATURESGOLD TOKEN
              </h2>
              <h4 className="text-[11px] leading-[13.31px] ml-3 text-[#A2A3A4]">
                @Savannah Nguyen
              </h4>
            </div>

            <div className="flex justify-between items-center p-4 mt-2">
              <h3 className="text-[#B3B3B3]">Network: </h3>
              <div className="flex justify-center items-center gap-2">
                <img src={navicon2} alt="navicon2" />
                <h3 className="text-gray-300">Ethereum</h3>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 mt-[-25px]">
              <h3 className="text-[#B3B3B3]">Total Raise: </h3>
              <div className="flex justify-center items-center gap-2">
                <p className="text-gray-300">100,000 USDT</p>
              </div>
            </div>

            <div className="border bg-[#B3B3B399] m-4 mt-0" />

            <div className="flex justify-between items-center p-4 mt-[-25px]">
              <h3 className="text-[#B3B3B3]">This pool opens in: </h3>
            </div>
            <div className="flex justify-between items-center p-4 mt-[-35px]">
              <p>0d : 19h : 59m : 25s</p>
              <div className="flex justify-center items-center bg-[#6f49fd] w-[103px] h-[40px] rounded-[4px] hover:bg-[#6f4f9d] relative bottom-3 cursor-pointer">
                <button>Detail</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center">
          <div className="w-[397.33px] h-[400px] bg-[#3F444E] rounded-[12px]">
            <div className="flex justify-center items-center p-[12px]">
              <img src={rectangle} alt="rectangle" />
            </div>
            <div>
              <h2 className="font-bold leading-[19.36px] mt-2 ml-3">
                NATURESGOLD TOKEN
              </h2>
              <h4 className="text-[11px] leading-[13.31px] ml-3 text-[#A2A3A4]">
                @Savannah Nguyen
              </h4>
            </div>

            <div className="flex justify-between items-center p-4 mt-2">
              <h3 className="text-[#B3B3B3]">Network: </h3>
              <div className="flex justify-center items-center gap-2">
                <img src={navicon2} alt="navicon2" />
                <h3 className="text-gray-300">Ethereum</h3>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 mt-[-25px]">
              <h3 className="text-[#B3B3B3]">Total Raise: </h3>
              <div className="flex justify-center items-center gap-2">
                <p className="text-gray-300">100,000 USDT</p>
              </div>
            </div>

            <div className="border bg-[#B3B3B399] m-4 mt-0" />

            <div className="flex justify-between items-center p-4 mt-[-25px]">
              <h3 className="text-[#B3B3B3]">This pool opens in: </h3>
            </div>
            <div className="flex justify-between items-center p-4 mt-[-35px]">
              <p>0d : 19h : 59m : 25s</p>
              <div className="flex justify-center items-center bg-[#6f49fd] w-[103px] h-[40px] rounded-[4px] hover:bg-[#6f4f9d] relative bottom-3 cursor-pointer">
                <button>Detail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProject;
