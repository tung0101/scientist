import React from 'react'

const Califomia = () => {
  return (
    <div className="w-[1240px]">
    <div className="flex justify-between">
      <div className="w-[204px] h-[390px] flex flex-col gap-[48px]">
        <div className="w-[203xp] h-[86px] gap-[8px]">
          <h1 className="w-[60px] h-[45px] font-extrabold text-[32px]">
            #01
          </h1>
          <hr className="w-[203px] border opacity-[40%] mb-[5px]" />

          <h1 className="w-[153px] h-[33px] font-semibold text-[24px] text-[#bcbcbc] capitalize">
            the scientist
          </h1>
        </div>
        <div className="w-[203px] h-[86px] mb-[78px]">
          <h1
            className={
              "w-[60px] h-[45px] text-[32px] font-extrabold text-white leading-[44px] mb-[5px]"
            }
          >
            #02
          </h1>
          <hr className="w-[203px] border opacity-[40%] mb-[5px]" />
          <h1 className="w-[170px] h-[33px] font-semibold text-[24px] text-[#bcbcbc] capitalize ">
            califomia davis the project
          </h1>
        </div>
        <div className="w-[203px] h-[86px] mb-[48px]">
          <h1
            className={
              "w-[60px] h-[45px] text-[32px] font-extrabold text-white leading-[44px] mb-[5px]"
            }
          >
            #03
          </h1>
          <hr className="w-[203px] border opacity-[40%] mb-[5px]" />
          <h1 className="w-[153px] h-[33px] font-semibold text-[24px] text-[#bcbcbc] capitalize">
            statistics
          </h1>
        </div>
      </div>
      
      <div className="flex-2 w-[894px] h-[489px]">
          {/* title */}
          <h1 className="w-[100%] h-[45px] font-semibold text-[32px] capitalize text-white mb-[20px]">
            califomia davis's <span className="text-[#bcbcbc]">project</span>
          </h1>
          <hr className="w-[633px] border-[0.95px] opacity-[40%] mb-[20px]" />

          {/* 2 box */}
          <div className="flex flex-col ">
            {/* box 1 */}
            <div className="flex bg-[#3f444e] w-[894px] h-[192px] rounded-xl mb-[12px] ">
              <div className="w-[214px] h-[168px] p-[12px]">
                <img
                  src="https://images.pexels.com/photos/5490803/pexels-photo-5490803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-[214px] h-[168px] object-cover "
                />
              </div>

              <div className="p-[12px]">
                <h1 className="w-[304px] h-[19px] font-medium text-[16px] leading-[19.36px]  text-white tracking-[0.5%] uppercase mb-1">
                  naturesgold token
                </h1>
                <p className="w-[632px] h-[13px] font-normal text-[11px] text-[#a2a3a4] capitalize mb-[12px]">
                  @savannah nguyen
                </p>

                <div className="">
                  <div className="w-[632px] h-[24px] flex justify-between">
                    <h3 className="w-[65px] h-[18px] font-normal text-[15px] leading-[18.15px] text-[#b3b3b3]">
                      Network:{" "}
                    </h3>
                    <div className="w-[102px] h-[24px] flex gap-2">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png"
                        className="w-[24px] h-[24px]"
                      />
                      <span className="w-[70px] h-[18px] font-medium text-[15px] text-white opacity-[80%] capitalize">
                        ethereum
                      </span>
                    </div>
                  </div>

                  <div className="w-[632px] h-[24px] flex justify-between mb-[30px]">
                    <h3 className="w-[78px] h-[18px] font-normal text-[15px] leading-[18.15px] text-[#b3b3b3] capitalize">
                      total raise:
                    </h3>
                    <div className="w-[104px] h-[18px]">
                      <p className="font-medium text-[15px] text-white opacity-[80%] uppercase tracking-wider">
                        100,000 usdt
                      </p>
                    </div>
                  </div>
                  {/* hr */}
                  <hr className="border border-[#b3b3b3] opacity-[60%] mb-[4px]" />

                  {/* time */}
                  <div className="flex justify-between">
                    <div className="w-[140px] h-[44px] ">
                      <p className="w-[134px] h-[18px] font-normal text-[15px] leading-[18.15px] text-[#b3b3b3]">
                        This pool opens in:
                      </p>
                      <p className="w-[140px] h-[18px] font-medium text-[15px] text-white opacity-[80%]">
                        0d : 19h : 59m : 25s{" "}
                      </p>
                    </div>

                    {/* button */}
                    <button className="w-[103px] h-[40px] rounded-[4px] py-[10px] px-[32px] bg-[#6f49fd] text-white text-center">
                      <p className="w-[39px] h-[20px] font-medium text-[14px] text-white opacity-[80%] capitalize">
                        detail
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* box 2 */}
            <div className="flex bg-[#3f444e] w-[894px] h-[192px] rounded-xl mb-[12px] ">
              <div className="w-[214px] h-[168px] p-[12px]">
                <img
                  src="https://images.pexels.com/photos/5490803/pexels-photo-5490803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-[214px] h-[168px] object-cover "
                />
              </div>

              <div className="p-[12px]">
                <h1 className="w-[304px] h-[19px] font-medium text-[16px] leading-[19.36px]  text-white tracking-[0.5%] uppercase mb-1">
                  naturesgold token
                </h1>
                <p className="w-[632px] h-[13px] font-normal text-[11px] text-[#a2a3a4] capitalize mb-[12px]">
                  @savannah nguyen
                </p>

                <div className="">
                  <div className="w-[632px] h-[24px] flex justify-between">
                    <h3 className="w-[65px] h-[18px] font-normal text-[15px] leading-[18.15px] text-[#b3b3b3]">
                      Network:{" "}
                    </h3>
                    <div className="w-[102px] h-[24px] flex gap-2">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png"
                        className="w-[24px] h-[24px]"
                      />
                      <span className="w-[70px] h-[18px] font-medium text-[15px] text-white opacity-[80%] capitalize">
                        ethereum
                      </span>
                    </div>
                  </div>

                  <div className="w-[632px] h-[24px] flex justify-between mb-[30px]">
                    <h3 className="w-[78px] h-[18px] font-normal text-[15px] leading-[18.15px] text-[#b3b3b3] capitalize">
                      total raise:
                    </h3>
                    <div className="w-[104px] h-[18px]">
                      <p className="font-medium text-[15px] text-white opacity-[80%] uppercase tracking-wider">
                        100,000 usdt
                      </p>
                    </div>
                  </div>
                  {/* hr */}
                  <hr className="border border-[#b3b3b3] opacity-[60%] mb-[4px]" />

                  {/* time */}
                  <div className="flex justify-between">
                    <div className="w-[140px] h-[44px] ">
                      <p className="w-[134px] h-[18px] font-normal text-[15px] leading-[18.15px] text-[#b3b3b3]">
                        This pool opens in:
                      </p>
                      <p className="w-[140px] h-[18px] font-medium text-[15px] text-white opacity-[80%]">
                        0d : 19h : 59m : 25s{" "}
                      </p>
                    </div>

                    {/* button */}
                    <button className="w-[103px] h-[40px] rounded-[4px] py-[10px] px-[32px] bg-[#6f49fd] text-white text-center">
                      <p className="w-[39px] h-[20px] font-medium text-[14px] text-white opacity-[80%] capitalize">
                        detail
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

     
    </div>
  </div>
  )
}

export default Califomia