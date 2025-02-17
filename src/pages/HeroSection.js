import React from "react";
import Sliders from "./Sliders";

const HeroSection = () => {
  return (
    <div className="bg-heroImage bg-cover  shrink-0 h-[745px]   relative  ">
    
        <h1 className=" text-white relative 2xl:left-[1180px] lg:w-[775.09px]    h-[151.2px] top-[139.2px]  xl:left-[383.05px] lg:left-[183px]  gap-0  text-[67.64px] font-bold leading-[75.6px] tracking-[-0.68px] text-center">
          Powerful for developers. Fast for everyone.
        </h1>
        <p className=" absolute  text-white w-[589.4px] 2xl:left-[1280px] top-[329.03px]   xl:left-[475.89px] lg:left-[275px]    md:left-[125px]  gap-0  text-[20.67px] font-normal leading-[27.3px] text-center">
          Bring blockchain to the people. Solana supports experiences for power
          users, new consumers, and everyone in between.
        </p>
       
           <div class="  absolute 2xl:left-[1380px] top-[441.78px]  lg:left-[371px]  xl:left-[591.95px] md:left-[171px] inline-flex whitespace-nowrap  w-[190.28px]  pl-[33px] pr-[32.80px] pt-[16.50px] pb-[17.50px] bg-gradient-to-r from-[#f087ff] via-[#6e1fce] to-[#6e1fce] rounded-[36px] border border-black justify-center items-center ">
            <div class=" w-[124.48px] text-center text-white text-[15.20px] font-normal font-['Inter'] uppercase leading-tight">
              Start building
            </div>
         </div>
         <div class="  inline-flex absolute 2xl:left-[1580px] top-[441.78px] lg:left-[571px] xl:left-[790.23px]  md:left-[371px]   w-[150.80px]  pl-[33px] pr-[32.80px] pt-[16.50px] pb-[17.50px] bg-black rounded-[36px] border border-white justify-center items-center ">
            <div class="w-[85px] h-5 text-center text-white text-sm font-normal font-['Inter'] uppercase leading-tight">
              Read docs
            </div>
         </div>
     
      <p className=" relative top-[441.78px]  xl:left-[375px] lg:left-[190px] flex flex-col justify-center text-center text-[#618ADC] font-helvetica text-sm font-normal leading-[16.8px] tracking-[0.8px] uppercase w-[703.45px] h-[16.8px] flex-shrink-0">
        Powering tools and integrations from companies all around the world
      </p>
      <Sliders></Sliders>
    </div>
  );
};

export default HeroSection;


