

import React from "react";

const Card = () => {
  return (
    <div className="bg-[#000] w-full  pt-[34.17px] pr-[168px] pb-0 pl-[170px]   ">
      <div className="rounded-2xl bg-[#1B1622] xl:flex xl:flex-row  lg:flex lg:flex-col   p-[40px]   ">
        <div className= "h-[300px] xl:w-1/2  lg:w-full">
        <img
          src="../../Image/cover.png"
          alt="cover"
          className="h-full w-full  rounded-md object-cover "
        ></img>
        </div>

        <div className=" flex flex-col items-center   gap-4  xl:w-1/2 lg:w-full   ">
          <button className="flex w-[161.09px] h-[26.16px] pt-[2.92px] pr-[9.79px] pb-[3.08px] pl-[10px] justify-center items-center flex-shrink-0 rounded-[15px] custom-gradient text-[13.837px] font-normal leading-[20.16px] uppercase ">
            Token Extensions
          </button>
          <h1 className=" flex flex-col justify-center shrink-0 w-[355.86px] h-[99.12px] text-[#CCC] text-center  text-[27.344px] font-normal leading-[33.04px] tracking-[-0.68px]">
            Coindesk: Token Extensions Update to SPL Token Program Live After
            Year in Development
          </h1>
          <p className="flex flex-col justify-center w-[477.78px] h-[73.92px] flex-shrink-0 text-[#CCC] text-center font-helvetica text-[17.325px] font-normal leading-[24.64px]">
            Token extensions let developers hard code restrictions in their
            digital assets, enhancing compliance controls for businesses
            building on Solana.
          </p>
          <button className="flex text-[#FFFFFF] w-[129.78px] h-[42px] px-[21.8px] py-[11.5px] justify-center items-center flex-shrink-0 rounded-[24px] border border-white">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
