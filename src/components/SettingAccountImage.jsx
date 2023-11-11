import React from "react";

import { GrImage } from 'react-icons/gr'

const SettingAccountImage = () => {
  return (
    <div className="flex justify-center items-center relative top-9">
      <div className="flex justify-center items-center w-[44px] h-[44px] rounded-full border-4 border-[#EFEFFD]">
        <div className="flex justify-center items-center w-[49px] h-[36px] rounded-full  bg-[#DEDEFA]">
            <GrImage />
        </div>
      </div>
    </div>
  );
};

export default SettingAccountImage;
