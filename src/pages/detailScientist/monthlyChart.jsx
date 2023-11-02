import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBtc } from "@fortawesome/free-brands-svg-icons";

function MonthlyChart() {
  const data = [
    {
      name: '13/10',
      uv: 0,
    },
    {
      name: '14/10',
      uv: 10,
    },
    {
      name: '3',
      uv: 20,
    },
    {
      name: '4',
      uv: 30,
    },
    {
      name: '5',
      uv: 41,
    },
    {
      name: '6',
      uv: 50,
    },
    {
      name: '7',
      uv: 58,
    },
    {
      name: '8',
      uv: 70,
    },
    {
      name: '9',
      uv: 100,
    },
  ];

  return (
    <div className="mt-4 bg-[black] max-w-7xl mx-auto h-[1000px] flex flex-col justify-center items-center">
      <div className="max-w-7xl flex justify-around">
        <div className="flex-1">
          <div className="w-[203px] h-[86px] mb-[48px]">
            <h1 className="w-[60px] h-[45px] text-[32px] font-extrabold text-white leading-[44px] mb-[5px]">
              #01
            </h1>
            <hr className="w-[203px] border opacity-[40%] mb-[5px]" />
            <h1 className="w-[153px] h-[33px] font-semibold text-[24px] text-[#bcbcbc] capitalize">
              the scientist
            </h1>
          </div>

          <div className="w-[203px] h-[86px] mb-[78px]">
            <h1 className="w-[60px] h-[45px] text-[32px] font-extrabold text-white leading-[44px] mb-[5px]">
              #02
            </h1>
            <hr className="w-[203px] border opacity-[40%] mb-[5px]" />
            <h1 className="w-[170px] h-[33px] font-semibold text-[24px] text-[#bcbcbc] capitalize ">
              califomia davis the project
            </h1>
          </div>

          <div className="w-[203px] h-[86px] mb-[48px]">
            <h1 className="w-[60px] h-[45px] text-[32px] font-extrabold text-white leading-[44px] mb-[5px]">
              #03
            </h1>
            <hr className="w-[203px] border opacity-[40%] mb-[5px]" />
            <h1 className="w-[153px] h-[33px] font-semibold text-[24px] text-[#bcbcbc] capitalize">
              Over donate
            </h1>
          </div>
        </div>

        {/* right */}
        <div className="w-[974px] h-[416px] pr-[40px]">
          <div className="h-[45px] flex justify-around flex-col">
            <div className="flex justify-around">
              <h1 className="text-white font-semibold text-[32px] capitalize">
                project name
              </h1>
              <div className="bg-white h-[40px] pt-[10px] pr-[16px] pb-[10px] pl-[16px] rounded-[12px] ">
                <div className="flex justify-center items-center gap-[8px] leading-[18px]  ">
                  <p className="">The project</p>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
            </div>
            <hr className="  w-[633px] border-[0.95px] my-[20px] ml-[150px] opacity-[40%]" />

            <div className="  mx-[150px] text-white flex justify-between items-center">
              <div className="h-[70px]  flex justify-between pr-[40px]">
                <div className="gap-[4px] ">
                  <h3 className="font-semibold text-[16px] text-[#828282] uppercase ">
                    Current donated
                  </h3>
                  <p className="font-medium text-[40px] tracking-[-3.75%] flex ">
                    100 / 100.000
                    <div>
                      <FontAwesomeIcon
                        icon={faBtc}
                        className=" text-white  mx-3 w-[30px] h-[30px]  rounded-[50%] bg-[orange]  "
                      />
                      <span></span>
                      <span>BTC</span>
                    </div>
                  </p>
                </div>
              </div>

              {/* top */}

              <div className="bg-[#24272A] h-[40px] pt-[10px] pr-[16px] pb-[10px] pl-[16px] rounded-[8px] ">
                <div className="flex gap-[8px] leading-[18px]  ">
                  <p>Monthly</p>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className=" ml-[80px] text-white grid grid-cols-1 gap-5 mt-[100px] h-[300px] ">
          <ResponsiveContainer height={500} width="100%">
      <AreaChart data={data} margin={{ right: 25, top: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="white" />
        <YAxis ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} stroke="white" />
        <Area type="monotone"
          dataKey="uv"
          stroke="#1E90FF"
          fill="#1E90FF"
          strokeWidth={3}
          fillOpacity={0.3}
          dot={{ stroke: '#1E90FF', fill: '#1E90FF' }} />
        {/* <Scatter data={data} dataKey="uv" fill="blue" /> */}
      </AreaChart>
    </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonthlyChart;
