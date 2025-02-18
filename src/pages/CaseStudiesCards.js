import React from 'react'
import { ArrowIcon} from '../reuseable/Icon'
const CaseStudiesCards = ({imgesrc}) => {
  return (
    <div className=" mt-5 w-full h-full   gap-4 ">
          
    <div className="     bg-[#26262b] rounded-xl flex flex-col  items-start gap-[0.01px]">
      <div className=" w-full h-full  ">
        <img src={imgesrc} alt="" className='w-full h-full object-cover '></img>
      </div>

      <div class="w-full  px-[18px] pt-4 pb-[94px] rounded-bl-xl rounded-br-xl justify-center items-start inline-flex">
        <div class="grow shrink basis-0 h-[90px] pr-[23.69px] justify-start items-center inline-flex">
          <div class="w-full   text-white text-[22.50px] font-bold font-['Helvetica'] leading-[30px]">
            GainForest brings
            <br />
            transparency to climate
            <br />
            preservation efforts
          </div>
        </div>
        <div data-svg-wrapper>
          <ArrowIcon></ArrowIcon>
        </div>
      </div>
    </div>

   
  </div>
  )
}

export default CaseStudiesCards

