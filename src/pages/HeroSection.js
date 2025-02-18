import React from "react";
import Sliders from "./Sliders";

const HeroSection = () => {
  return (
    <div className="bg-heroImage bg-cover ">
      <div className="   flex flex-col justify-center items-center text-center">
        <h1 className=" text-white xl:pl-[332.55px] pl-[10px] pr-[20px] pt-[186.5px]  xl:text-[67.64px]  xl:pr-[331.36px] lg:pl-[132px] lg:pr-[131px]  md:pl-[60px] md:pr-[60px] lg:text-[47.64px]  md:text-[55px] sm:text-[37px] font-bold leading-[75.6px] tracking-[-0.68px] ">
          Powerful for developers. Fast for everyone.
        </h1>
        <p className="  text-white xl:pt-[48.63px] lg:pt-[38.63px]  md:pt-[38px] pl-[60px] pr-[55px] xl:pl-[425.39px] xl:pr-[424.21px] lg:pl-[125px] lg:pr-[124px] md:pl-[90px] md:pr-[95px] gap-0  xl:text-[20.67px]  md:text-[18px] font-normal leading-[27.3px] text-center">
          Bring blockchain to the people. Solana supports experiences for power
           users, new consumers, and everyone in between.
        </p>

        <div className=" flex  gap-3  pt-[48.15px]  ">
          <div class="   inline-flex whitespace-nowrap    pl-[33px] pr-[32.80px] pt-[16.50px] pb-[17.50px] bg-gradient-to-r from-[#f087ff] via-[#6e1fce] to-[#6e1fce] rounded-[36px] border border-black justify-center items-center ">
            <div class=" w-[124.48px] text-center text-white text-[15.20px] font-normal font-['Inter'] uppercase leading-tight">
              Start building
            </div>
          </div>
          <div class="  inline-flex  w-[150.80px]  pl-[33px] pr-[32.80px] pt-[16.50px] pb-[17.50px] bg-black rounded-[36px] border border-white justify-center items-center ">
            <div class="w-[85px] h-5 text-center text-white text-sm font-normal font-['Inter'] uppercase leading-tight">
              Read docs
            </div>
          </div>
        </div>
        <p className="  text-[#618ADC] font-helvetica  text-sm font-normal leading-[16.8px] tracking-[0.8px] uppercase xl:pl-[368.38px]  xl:pr-[367.17px] pt-[120px]">
        Powering tools and integrations from companies all around the world
      </p>
      </div>
 
      
     
      <Sliders></Sliders> 
      
    </div>
  );
};

export default HeroSection;
