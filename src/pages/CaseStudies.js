import React from "react";
import CaseStudiesCards from "./CaseStudiesCards";

const CaseStudies = () => {
  return (
    <div className="   bg-black  flex text-white  w-full h-full px-[149.5px] pb-[0.73px] shrink-0  ">
      <div className=" w-full  border-2 ">
        <div className=" flex justify-between ">
          <h1>Case Studies</h1>
          <button className="flex w-[204.2px] h-[42px] justify-center items-center shrink-0 rounded-3xl border border-white">
            GO TO CASE STUDIES
          </button>
        </div>

        <div className="flex items-center gap-[50px] pr-[96.44px] rounded-[12px] bg-[#26262B] mt-10   ">
          <div className="w-1/2   rounded-l-[12px] overflow-hidden">
            <img
              src="/Image/casestudies.png"
              alt="Case Studies"
              className="w-full h-full object-cover "
            />
          </div>

          <div className="flex w-[420.06px] h-[] justify-center items-center  ">
            <h1 className="text-white  text-[34.313px] font-bold leading-[43.15px] text-center justify-center flex">
              Helium brings real-world 5G networks on Solana
            </h1>
          </div>
        </div>
        <div className="  flex  justify-between  gap-4  ">
          
         <CaseStudiesCards imgesrc="/Image/gainforest.png"></CaseStudiesCards>
         <CaseStudiesCards imgesrc="/Image/hivemapper.png"></CaseStudiesCards>
         <CaseStudiesCards imgesrc="/Image/asics.png"></CaseStudiesCards>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
