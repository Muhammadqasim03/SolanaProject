import React from "react";

const JoinCommunity = () => {
  return (
    <div className="  bg-cover  bg-joincommunity">
      <div className=" pt-[49px] pl-[169.5px] justify-center pb-[33.09px]  text-white  text-[38.883px] font-bold leading-[46.2px] tracking-[-1px]">
        Join a thriving community.
      </div>
      <div className=" w-full   flex  gap-4  overflow-hidden justify-between  ">
        <div className=" flex flex-col   justify-between w-full    gap-6">
          <div className="pl-[26.91px]  w-full h-full pr-[26.70px] pt-[65.13px] pb-[65.90px] bg-[#19161c] rounded-lg flex-col justify-center items-center gap-[7.41px] inline-flex  overflow-hidden">
            <div className="w-[116.09px]  text-center text-[#f087ff] text-[40.20px] font-bold font-['Helvetica'] leading-[46.20px]">
              11,000
            </div>
            <div className="w-[246.39px]  text-center text-[#bababa] text-xs font-normal font-['Helvetica'] uppercase leading-none">
              Solana Hacker House participants
            </div>
          </div>
          <div className=" w-full ">
            <img
              src="/Image/CommunityImage1.png"
              className=" object-cover  w-full  "
              alt=" imagereload"
            ></img>
          </div>
        </div>
        <div className=" w-full  ">
          <img
            src="/Image/CommunityImage2.png"
            className="object-cover  h-full "
            alt="imagereload"
          ></img>
        </div>

        <div className=" flex flex-col justify-between gap-6">
          <div className=" h-full w-full">
            <img
              src="/Image/communityimge3.png"
              className="object-cover  h-full"
              alt=""
            ></img>
          </div>
          <div className=" w-full h-full pl-[51.36px] pr-[51.16px] pt-[57.46px] pb-[58.22px] bg-[#19161c] rounded-lg flex-col justify-center items-center gap-[7.40px] inline-flex overflow-hidden">
            <div className="w-[136.12px] h-[46.20px] text-center text-[#19fb9b] text-[42px] font-bold font-['Helvetica'] leading-[46.20px]">
              48,000
            </div>
            <div className="w-[197.48px] h-[30.72px] text-center text-[#bababa] text-xs font-normal font-['Helvetica'] uppercase leading-none">
              Developers building during
              <br />
              Solana Hackathons
            </div>
          </div>
        </div>
        <div className=" w-full  ">
          <img
            src="/Image/borderImage.png"
            className=" h-full w-full"
            alt=" "
          ></img>
        </div>

 
      </div>
   <div  className="flex flex-col justify-center items-center pt-28 pb-28 gap-3 ">
   <div className="  text-white text-[38.88px] font-bold font-['Helvetica'] leading-[46.20px]     text-center   ">
        It's time to join the thousands of creators,
        <br />
        artists, and developers using Solana.
      </div>
      <div className=" pl-[25px] pr-[24.80px] pt-[14.50px] pb-[15.50px]    bg-gradient-to-r from-[#f087ff] via-[#6e1fce] to-[#6e1fce] rounded-[36px] border border-black  items-center">
        <div className=" h-5 text-center text-white text-[15.20px] font-normal font-['Inter'] uppercase leading-tight ">
          Start building
        </div>
      </div> 
   </div>
     
    </div>
  );
};

export default JoinCommunity;
