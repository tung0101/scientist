import React, {useState} from "react";

const Swap = () => {
  const [change, setChange] = useState(true)

  return (
    <div className="mx-auto w-[560px] h-[698px] ">
      <div className="flex justify-center">
        <div className="w-[379px] h-[64px] bg-[#2F3338] rounded-full flex gap-10 justify-center items-center">
          <div className="w-[164px] h-[56px] bg-[#3F444E] rounded-full flex justify-center items-center cursor-pointer" onClick={setChange(true)}>
            <p className="text-[#FFFFFF]">Swap</p>
          </div>
          <div className="w-[164px] h-[56px] rounded-full flex justify-center items-center cursor-pointer" onClick={setChange(false)}>
            <p className="text-[#FFFFFF]">Donate</p>
          </div>
        </div>
      </div>
      <div className={`${change ? 'block' : 'hidden'}`}>
        <div className="w-[560px] h-[610px] bg-[#2F3338] relative rounded-3xl mt-7 flex justify-center">
          <div className=" text-white w-[480px] h-[518px] my-auto ">
            <div className="w-[480px] h-[50px] gap-20 flex justify-between items-center ">
              <p className="text-lg">Swap</p>
              <div className="w-[32px] h-[32px] bg-[#3F444E] rounded-md flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.875 16.1245L3.75 16.1245"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.25 16.1245L17.625 16.1245"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.75 17.9995C16.7855 17.9995 17.625 17.16 17.625 16.1245C17.625 15.089 16.7855 14.2495 15.75 14.2495C14.7145 14.2495 13.875 15.089 13.875 16.1245C13.875 17.16 14.7145 17.9995 15.75 17.9995Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.875 7.87434L3.75 7.87427"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.25 7.87427L11.625 7.87434"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 9.74951C10.7855 9.74951 11.625 8.91005 11.625 7.87451C11.625 6.83898 10.7855 5.99951 9.75 5.99951C8.71447 5.99951 7.875 6.83898 7.875 7.87451C7.875 8.91005 8.71447 9.74951 9.75 9.74951Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className=" my-3 py-3 px-5 w-[480px] h-[100px] rounded-lg bg-[#3F444E]">
              <p className="text-white text-lg ">Pay</p>
              <div className=" flex justify-center">
                <div className="w-[438px] h-[43px] flex gap-5">
                  <div className=" w-[32px] h-[32px] bg-white rounded-full flex justify-center items-center">
                    <svg
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1257_14275)">
                        <rect
                          y="0.5"
                          width="32"
                          height="32"
                          rx="16"
                          fill="white"
                        />
                        <path
                          d="M16.1995 0.5L16 1.24779V22.947L16.1995 23.1667L25.3333 17.2128L16.1995 0.5Z"
                          fill="#343434"
                        />
                        <path
                          d="M15.9993 0.5L6.66602 17.2127L15.9993 23.1667V12.6345V0.5Z"
                          fill="#8C8C8C"
                        />
                        <path
                          d="M16.1134 24.7568L16 24.8988V32.1599L16.1134 32.5001L25.3333 19.1667L16.1134 24.7568Z"
                          fill="#3C3C3B"
                        />
                        <path
                          d="M15.9993 32.5001V24.7568L6.66602 19.1667L15.9993 32.5001Z"
                          fill="#8C8C8C"
                        />
                        <path
                          d="M16 23.1667L25.3333 17.1368L16 12.5V23.1667Z"
                          fill="#141414"
                        />
                        <path
                          d="M6.66602 17.1368L15.9993 23.1667V12.5L6.66602 17.1368Z"
                          fill="#393939"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1257_14275">
                          <rect
                            y="0.5"
                            width="32"
                            height="32"
                            rx="16"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex gap-2 justify-start w-[320px]  ">
                    <p className="text-xl">Ethereum </p>
                    <svg
                      className="my-3"
                      width="12"
                      height="7"
                      viewBox="0 0 12 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L6 6L11 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="py-3 flex justify-end flex-col gap-1 items-end">
                    <p className="text-xl">1</p>
                    <p className="text-xs">-$1,864</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[480px] h-[100px] flex justify-center items-center ">
              <div className="  w-[48px] h-[48px] rounded-lg bg-[#3F444E] flex  justify-center items-center">
                <div className="text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4498 6.71997L6.72974 3L3.00977 6.71997"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.73047 21V3"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.5488 17.28L17.2689 21L20.9888 17.28"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.2695 3V21"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className=" my-3 py-3 px-5 w-[480px] h-[100px] rounded-lg bg-[#3F444E]">
              <p className="text-white text-lg ">Receive</p>
              <div className=" flex justify-center">
                <div className="w-[438px] h-[43px] flex gap-5">
                  <div className=" w-[32px] h-[32px] bg-[#F9AA4B] rounded-full flex justify-center items-center">
                    <svg
                      width="16"
                      height="21"
                      viewBox="0 0 16 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.6188 8.50615C15.9313 6.38115 14.3187 5.23115 12.0937 4.46865L12.8187 1.58115L11.0687 1.14365L10.3688 3.95615C9.90625 3.84365 9.43125 3.73115 8.95625 3.63115L9.65625 0.806152L7.90625 0.368652L7.19375 3.24365C6.80625 3.15615 6.43125 3.06865 6.06875 2.98115V2.96865L3.64375 2.36865L3.18125 4.24365C3.18125 4.24365 4.48125 4.54365 4.45625 4.55615C5.16875 4.73115 5.29375 5.20615 5.26875 5.58115L4.44375 8.86865C4.49375 8.88115 4.55625 8.89365 4.63125 8.93115C4.56875 8.91865 4.50625 8.90615 4.44375 8.88115L3.29375 13.4812C3.20625 13.6937 2.98125 14.0187 2.49375 13.8937C2.50625 13.9187 1.21875 13.5812 1.21875 13.5812L0.34375 15.5937L2.63125 16.1687C3.05625 16.2812 3.46875 16.3812 3.88125 16.4937L3.15625 19.4062L4.90625 19.8437L5.63125 16.9562C6.10625 17.0812 6.58125 17.2062 7.03125 17.3187L6.31875 20.1937L8.06875 20.6312L8.79375 17.7187C11.7937 18.2812 14.0437 18.0562 14.9812 15.3437C15.7437 13.1687 14.9438 11.9062 13.3688 11.0812C14.5313 10.8187 15.3938 10.0562 15.6188 8.50615ZM11.6062 14.1312C11.0687 16.3062 7.39375 15.1312 6.20625 14.8312L7.16875 10.9687C8.35625 11.2687 12.1812 11.8562 11.6062 14.1312ZM12.1562 8.46865C11.6562 10.4562 8.60625 9.44365 7.61875 9.19365L8.49375 5.69365C9.48125 5.94365 12.6687 6.40615 12.1562 8.46865Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="flex gap-2 justify-start w-[320px]  ">
                    <p className="text-xl">BitCoin </p>
                    <svg
                      className="my-3"
                      width="12"
                      height="7"
                      viewBox="0 0 12 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L6 6L11 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="py-3 flex justify-end flex-col gap-1 items-end">
                    <p className="text-xl">0,063</p>
                    <p className="text-xs">-$1,864</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" my-3 flex justify-end py-4 gap-2 ">
              <p className="text-[#6F49FD]">1 USD = 23.345 VND</p>
              <div className="flex justify-center items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.5 5.5L14 4L12.5 2.5" fill="white" />
                  <path
                    d="M12.5 5.5L14 4L12.5 2.5"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 8C2 6.93913 2.42143 5.92172 3.17157 5.17157C3.92172 4.42143 4.93913 4 6 4H14"
                    fill="white"
                  />
                  <path
                    d="M2 8C2 6.93913 2.42143 5.92172 3.17157 5.17157C3.92172 4.42143 4.93913 4 6 4H14"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M3.5 10.5L2 12L3.5 13.5" fill="white" />
                  <path
                    d="M3.5 10.5L2 12L3.5 13.5"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 8C14 9.06087 13.5786 10.0783 12.8284 10.8284C12.0783 11.5786 11.0609 12 10 12H2"
                    fill="white"
                  />
                  <path
                    d="M14 8C14 9.06087 13.5786 10.0783 12.8284 10.8284C12.0783 11.5786 11.0609 12 10 12H2"
                    stroke="#B3B3B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div>
              <div className="w-[480px] h-[62px] rounded-lg bg-[#6F49FD] flex justify-center ">
                <p className="text-white text-lg my-auto ">Swap</p>
              </div>
            </div>
          </div>
          <div className="w-[540px] absolute top-[270px] left-right-2 text-black flex justify-center items-center gap-20">
            <div className="w-[220px] h-[3px] bg-[#202020] rounded-lg"></div>
            <div className="w-[220px] h-[3px] bg-[#202020]  rounded-lg"></div>
          </div>
        </div>
      </div>
      <div className={`${change ? 'hidden' : 'block'}`}>
        <div className="w-[777px] h-[640px] bg-[#2F3338] rounded-lg mt-7 flex justify-center my-auto items-center ">
          <div className=" text-white w-[675px] h-[640px] ">
            <div className="h-[150px] my-auto flex items-center justify-center">
              <p className="text-center text-xl">Donate</p>
            </div>
            <div className="flex flex-wrap gap-6 ">
              <div className="w-[675px] h-[60px] rounded-lg bg-[#3F444E] flex  px-4 py-3">
                <img
                  className="rounded-lg"
                  src="https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg"
                  alt=""
                />

                <div className="w-[113px] h-[37px] mx-3">
                  <p className="text-sm text-white">California Davis</p>
                  <p className="text-xs text-[#FFFFFF52]">@Julius Caesar</p>
                </div>
              </div>
              <div className="w-[675px] h-[60px] rounded-lg bg-[#3F444E] flex justify-between px-4 py-4">
                <p>5.00</p>
                <p>Polygon</p>
              </div>

              <div className="w-[675px] h-[133px] rounded-lg bg-[#3F444E]">
                {/* <input
                  type="text"
                  placeholder="Your message here.."
                  className="w-full h-full bg-[#3F444E] rounded-lg placeholder-left placeholder-top px-4"
                /> */}
                <textarea
                  type="text"
                  placeholder="Your message here.."
                  className="w-full h-full bg-[#3F444E] rounded-lg placeholder-left placeholder-top px-4 py-4"
                ></textarea>
              </div>
              <div className="w-[675px] h-[56px] rounded-lg bg-[#6F49FD] flex justify-center">
                <p className="text-white text-lg my-auto">Donate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
