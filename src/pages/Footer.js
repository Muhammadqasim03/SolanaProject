import React from "react";
import {Arrowdown , Telegram , Github , Radit , DiscordIcon , Twiter , ChromeIcon, Youtube} from "../reuseable/Icon"

const Footer = () => {
  return (
   

    <div
      className=" h-[424.50px] relative  border border-[#141414]"
      style={{
        background:
          "radial-gradient(50% 50% at 0% 100%, #271D3B 0%, rgba(0, 0, 0, 0) 62.59%), radial-gradient(141.42% 141.42% at 100% 100%, #3A233F 0%, rgba(0, 0, 0, 0) 24.59%), #000508",
      }}
    >
      <div className=" left-[169.50px] top-[81px] absolute text-white text-base font-normal font-['Inter'] leading-none">
        Managed by
      </div>
      <div className="left-[169.50px] top-[97px] absolute">
        <img src="/Image/linksolanalogo.png" alt=""></img>
      </div>
      <div data-svg-wrapper className="left-[169.50px] top-[173px] absolute">
        
        <Youtube></Youtube>
      </div>
      <div data-svg-wrapper className="left-[205.50px] top-[173px] absolute">
       
        <Twiter></Twiter>
      </div>
      <div data-svg-wrapper className="left-[241.50px] top-[173px] absolute">
       
        <DiscordIcon></DiscordIcon>
      </div>
      <div data-svg-wrapper className="left-[277.50px] top-[173px] absolute">
       
     
        <Radit></Radit>
      </div>
      <div data-svg-wrapper className="left-[313.50px] top-[173px] absolute">
     
        <Github></Github>
      </div>
      <div data-svg-wrapper className="left-[349.50px] top-[173px] absolute">
       
        <Telegram></Telegram>
      </div>
      <div className="w-[328.47px] h-[27.30px] left-[169.50px] top-[223.65px] absolute text-[#848895] text-base font-normal font-['Helvetica'] leading-7">
        © 2024 Solana Foundation. All rights reserved.
      </div>
      <div className="  pl-5 pr-[47.80px] pb-[6.64px] left-[812.03px] top-[81px] absolute flex-col justify-start items-start gap-[13.35px] inline-flex">
        <div className="  text-white text-base font-normal font-['Helvetica'] uppercase leading-[18.72px]">
          Solana
        </div>
        <div className="  h-[25.90px] text-[#848895] text-base font-normal font-['Helvetica'] leading-7">
          Grants
        </div>
        <div className=" h-[25.90px] text-[#848895] text-base font-normal font-['Helvetica'] leading-7">
          Break Solana
        </div>
        <div className="   h-[25.89px] text-[#848895] text-base font-normal font-['Helvetica'] leading-7">
          Media Kit
        </div>
        <div className=" h-[25.90px] text-[#848895] text-base font-normal font-['Helvetica'] leading-7">
          Careers
        </div>
        <div className=" h-[25.90px] text-[#848895] text-base font-normal font-['Helvetica'] leading-7">
          Disclaimer
        </div>
        <div className=" h-[27.30px] text-[#848895] text-base font-normal font-['Helvetica'] leading-7">
          Privacy Policy
        </div>
      </div>
      <div className="  pl-5 pr-[47.80px] pb-[124.53px] left-[977.08px] top-[81px] absolute flex-col justify-start items-start gap-[13.35px] inline-flex">
        <div className=" h-[18.72px] text-white text-base font-normal font-['Helvetica'] uppercase leading-[18.72px]">
          Get Connected
        </div>
        <div className="  h-[25.90px] text-[#848895] text-base font-normal font-['Helvetica'] leading-7">
          Ecosystem
        </div>
        <div className=" h-[25.90px] text-[#848895] text-base font-normal font-['Helvetica'] leading-7">
          Blog
        </div>
        <div className=" h-[27.30px] text-[#848895] text-base font-normal font-['Helvetica'] leading-7">
          Newsletter
        </div>
      </div>
      <div data-svg-wrapper className="left-[1200.08px] top-[79.71px] absolute">
   
        <ChromeIcon></ChromeIcon>
      </div>
      <div className="  h-6 left-[1223.45px] top-[77.71px] absolute text-center text-[#848895] text-base font-normal font-['Helvetica'] uppercase leading-normal">
        en
      </div>
      <div  className="left-[1249.42px]  top-[81.21px] absolute">
       <Arrowdown></Arrowdown>
      </div>
    </div>
  );
};

export default Footer;
