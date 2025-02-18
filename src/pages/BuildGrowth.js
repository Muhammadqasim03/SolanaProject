 import React from 'react'
  import {ShopifyLogo ,LogoAsics , Helio , } from "../reuseable/Icon"
 const BuildGrowth = () => {
   return (
    <div className=" bg-black  w-full   pt-[125px] pr-[149.5px] pb-[124.52px] pl-[149.5px]   overflow-hidden ">
    <div className="  relative flex-col  justify-start items-start flex">
       <div className='     flex justify-between w-full '>
       <div className="  text-white text-[39.21px] font-bold font-['Helvetica'] leading-[46.20px]">
        Build for growth.
       </div>
       <div className=' space-x-2'>
       <div className=" w-[96.97px]  h-[48.48px] pl-[13.80px] pr-[13.59px] pt-[9.94px] pb-[11.24px] bg-[#111111] rounded-[15px] border border-[#a962ff] justify-center items-center inline-flex">
         <div className=' w-[69.58px]  h-[27.30px] text-center text-white text-base font-normal  leading-7'>    Payments </div>
      </div>
      <div className=" hover:rounded-[15px]  hover:border hover:border-[#a962ff] w-[82.86px] h-[48.48px] pl-[13.80px] pr-[13.59px] pt-[9.94px] pb-[11.24px] bg-[#111111] rounded-[15px] border border-[#111111] justify-center items-center inline-flex">
        <div className="w-[55.47px] h-[27.30px] text-center text-white text-base font-normal font-['Helvetica'] leading-7">
          Gaming
        </div>
      </div>
      <div className=" hover:rounded-[15px]  hover:border hover:border-[#a962ff] w-[64.69px] h-[48.48px] pl-[13.79px] pr-[13.61px] pt-[9.94px] pb-[11.24px] bg-[#111111] rounded-[15px] border border-[#111111] justify-center items-center inline-flex">
        <div className="w-[37.29px] h-[27.30px] text-center text-white text-base font-normal font-['Helvetica'] leading-7">
          NFTs
        </div>
      </div>
      <div className=" hover:rounded-[15px]  hover:border hover:border-[#a962ff] w-[60.89px] h-[48.48px] pl-[13.79px] pr-[13.60px] pt-[9.94px] pb-[11.24px] bg-[#111111] rounded-[15px] border border-[#111111] justify-center items-center inline-flex">
        <div className="w-[33.50px] h-[27.30px] text-center text-white text-base font-normal font-['Helvetica'] leading-7">
          DeFi
        </div>
      </div>
      <div className="w-[69.48px] h-[48.48px] pl-[13.79px] pr-[13.60px] pt-[9.94px] pb-[11.24px] bg-[#111111] rounded-[15px] border border-[#111111] justify-center items-center inline-flex">
        <div className="w-[42.09px] h-[27.30px] text-center text-white text-base font-normal font-['Helvetica'] leading-7">
          DAOs
        </div>
      </div>
       </div>
        </div>.
     
    <div className=" bg-[#1a1a1a] rounded-xl    flex  w-full    overflow-hidden">
    <div  className="relative xl:w-1/2 lg:w-full  h-full  flex shrink-0 border-2   ">
      <img src='/Image/ShopyfyImage.png' alt='' className='  w-full h-full object-cover  '></img>
    </div>
    <div className="   xl:w-1/2 lg:w-1/2   relative gap-6    p-[64px] overflow-hidden flex flex-col ">
        <div  className=' flex items-center  h-[50px]  shrink-0'>
         <ShopifyLogo></ShopifyLogo>
        </div>
        <div className="h-[136.48px]  pr-[13.03px] justify-start items-center inline-flex">
            <div className="w-[441.47px] h-[136.50px] text-white text-xl font-normal font-['Helvetica'] leading-7">Solana Pay is now available to millions of<br/>businesses as an approved app integration on<br/>Shopify. Solana Pay is built for immediate USDC<br/>transactions, fees that are fractions of a penny,<br/>and a net-zero environmental impact.</div>
        </div>
        <div className="h-[27.30px] pr-[98.55px] justify-start items-center inline-flex cursor-pointer">
            <div class="w-[355.95px] h-[27.30px] text-[#a962ff] text-xl font-normal font-['Helvetica'] underline leading-7">Learn more about Payments on Solana</div>
        </div>
    </div>
    </div>
      
      <div className='  flex  w-full h-[62px] justify-center  items-start gap-[16px]  shrink-0'> 
        <div className='flex w-[263.25px] h-[62px] px-[81.62px] py-[16px] justify-center items-center shrink-0'>
          <LogoAsics></LogoAsics>
        </div>
        <div className='flex  h-[62px] px-[81.62px] py-[16px] justify-center items-center shrink-0'>
           <img src='/Image/decaf.png' alt=' decaf'></img>
        </div>
        <div className='flex w-[263.25px] h-[62px] px-[81.62px] py-[16px] justify-center items-center shrink-0'>
            <Helio></Helio>
        </div>
        <div className='flex w-[263.25px] h-[62px] px-[81.62px] py-[16px] justify-center items-center shrink-0'>
          <img src="/Image/tiplink.png" alt=''></img>
        </div>
      </div>
    </div>
  </div>
   )
 }
 
 export default BuildGrowth
 
