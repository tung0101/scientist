import React, { useState } from "react";
function SettingWallet(){
    return (
        <div className="ml-48 mt-20 text-white bg-vinh">
        <div className=" pt-10 ml-20 ">
          <span className="font-medium text-lg opacity-50 ">Total Balance</span>
          <h2 className=" font-medium text-3xl mt-1 cursor-pointer">$209,242</h2>
        </div>
        <div className="flex ml-20 mt-9 pb-80 ">
          <div className=" w-96 h-52 rounded-2xl mb-4 mr-5 bg-my-color">
                <div className="flex mt-3">
                  <span className="mt-5 ml-5 mr-3"><i className="fa-brands fa-bitcoin fa-2xl"></i></span>
                  <div className="mt-2.5">
                    <div className="">
                      <h1 className=" font-medium text-lg ">Binance</h1>
                    </div>
                    <div className="" >
                      <span className="font-normal text-sm opacity-50">
                        BTC
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-12 ml-6">
                  <h1 className=" font-medium text-l ">$2012</h1>
                  <span className="font-normal text-sm opacity-50">
                  3.3223455 BTC
                  </span>
                </div>  
          </div>
          <div className=" w-96 h-52 rounded-2xl mb-4 mr-5 bg-my-color">
                <div className="flex mt-3">
                  <span className="mt-5 ml-5 mr-3"><i className="fa-brands fa-ethereum fa-2xl"></i></span>
                  <div className="mt-2.5">
                    <div className="">
                      <h1 className=" font-medium text-lg ">Binance</h1>
                    </div>
                    <div className="" >
                      <span className="font-normal text-sm opacity-50">
                        BTC
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-12 ml-6">
                  <h1 className=" font-medium text-l ">$209</h1>
                  <span className="font-normal text-sm opacity-50">
                  3.3223455 ETH
                  </span>
                </div>  
          </div>
          <div className=" w-96 h-52 rounded-2xl mb-4 mr-5 bg-my-color">
                <div className="flex mt-3">
                  <span className="mt-5 ml-5 mr-3"><i className="fa-brands fa-bitcoin fa-2xl"></i></span>
                  <div className="mt-2.5">
                    <div className="">
                      <h1 className=" font-medium text-lg ">Binance</h1>
                    </div>
                    <div className="" >
                      <span className="font-normal text-sm opacity-50">
                        BTC
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-12 ml-6">
                  <h1 className=" font-medium text-l ">$2091</h1>
                  <span className="font-normal text-sm opacity-50">
                  3.3223455 Matic
                  </span>
                </div>  
          </div>
        </div>
      </div>
    )    
    }

export default SettingWallet