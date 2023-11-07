import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const Statistics = () => {
    const series = [
        {
          name: "Series ",
          data: [{ value: 100 }],
        },
        {
          name: "Series 1",
          data: [
            { category: "Day 1", value: 20 },
            { category: "Day 2", value: 20 },
          ],
        },
        {
          name: "Series 2",
          data: [
            { category: "Day 3", value: 20 },
            { category: "Day 3", value: 40 },
          ],
        },
        {
          name: "Series 3",
          data: [
            { category: "Day 4", value: 40 },
            { category: "Day 5", value: 40 },
          ],
        },
        {
          name: "Series 4",
          data: [
            { category: "Day 5", value: 10 },
            { category: "Day 6", value: 10 },
          ],
        },
    
        {
          name: "Series 5",
          data: [
            { category: "Day 7", value: 10 },
            { category: "Day 8", value: 10 },
          ],
        },
    
        {
          name: "Series 6",
          data: [
            { category: "Day 8", value: 40 },
            { category: "Day 9", value: 40 },
          ],
        },
    
        {
          name: "Series 6",
          data: [
            { category: "Day 9", value: 40 },
            { category: "Day 10", value: 40 },
          ],
        },
    
        {
          name: "Series 7",
          data: [
            { category: "Day 10", value: 80 },
            { category: "Day 11", value: 80 },
          ],
        },
    
        {
          name: "Series 8",
          data: [
            { category: "Day 12", value: 80 },
            { category: "Day 13", value: 80 },
          ],
        },
      ];
    
      const verticalLine = [
        { category: "Day 1", value: 20 },
        { category: "Day 2", value: 20 },
        { category: "Day 3", value: 20 },
        { category: "Day 3", value: 40 },
        { category: "Day 4", value: 40 },
        { category: "Day 5", value: 40 },
        { category: "Day 5", value: 10 },
        { category: "Day 6", value: 10 },
        { category: "Day 7", value: 10 },
        { category: "Day 8", value: 10 },
        { category: "Day 8", value: 40 },
        { category: "Day 9", value: 40 },
        { category: "Day 10", value: 40 },
        { category: "Day 10", value: 80 },
        { category: "Day 11", value: 80 },
        { category: "Day 12", value: 80 },
        { category: "Day 13", value: 80 },
      ];
    
      const updatedSeries = [
        // ...series,
        {
          name: "Amount Donated",
          data: verticalLine,
        },
      ];
    
  return (
    <div className="w-[1240px] h-[546px] mt-[180px] ">
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

         {/* right */}
         <div className="w-[974px] h-[416px] pr-[40px]">
          <div className="h-[45px] flex justify-around flex-col">
            <div className="flex justify-around">
              <h1 className="text-white font-semibold text-[32px]">
                Project Name
              </h1>
              <div className="bg-white h-[40px] pt-[10px] pr-[16px] pb-[10px] pl-[16px] rounded-[12px] ">
                <div className="flex items-center justify-center gap-[8px] leading-[18px]  ">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="text-black">The project</p>
                </div>
              </div>
            </div>
            <hr className="  w-[633px] border-[0.95px] my-[20px] ml-[150px] opacity-[40%]" />

            <div className="  mx-[150px] text-white flex justify-between items-center">
              <div className="h-[70px]  flex justify-between pr-[40px]">
                <div className="gap-[4px] ">
                  <h3 className="font-semibold text-[16px] text-[#828282] capitalize">
                    donate
                  </h3>
                  <div className="flex gap-[10px] items-center justify-center">
                    <p className="font-medium text-[40px] tracking-[-3.75%]">
                      1029.1
                    </p>
                    <span className="font-medium text-[24px] tracking-[-3.75%] capitalize opacity-[40%]">
                      pologon
                    </span>
                  </div>
                </div>
              </div>

              {/* top */}

              <div className="bg-[#24272A] h-[40px] pt-[10px] pr-[16px] pb-[10px] pl-[16px] rounded-[8px] ">
                <div className="flex items-center justify-center gap-[8px] leading-[18px]  ">
                  <p>Donate</p>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </div>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className=" ml-[80px] text-white grid grid-cols-1 gap-5 mt-[100px] h-[300px] ">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart className="text-white" width={500} height={300}>
                <CartesianGrid strokeDasharray="0 0" opacity="0.5" />
                <XAxis
                  dataKey="category"
                  type="category"
                  allowDuplicatedCategory={false}
                />
                <YAxis dataKey="value" />
                <Tooltip />
                <Legend />
                {updatedSeries.map((s, index) => (
                  <Line
                    dataKey="value"
                    data={s.data}
                    name={s.name}
                    key={s.name}
                    dot={false}
                    stroke={
                      index === updatedSeries.length - 1
                        ? "#63ABFD"
                        : index === 0
                        ? "#63ABFD"
                        : "#63ABFD"
                    }
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Statistics;
