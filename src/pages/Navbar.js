// import React from "react";
// import logo from "../Images/logotype.e4df684f.svg.png";
// import { Arrow } from "../reuseable/Icon";
// const Navbar = () => {
//   return (
//     <div className="flex  bg-black  h-[67.3px] px-[149.5px] py-[20px] justify-between items-center shrink-0 ">
//       <img src={logo} alt="Logo" />

//       <div className=" space-x-[35px]">
//         <div class="relative inline-block">
//           <div class="group ">
//             <button class="   text-[#E4E4E4] text-center font-helvetica text-[17.188px]  font-normhover:bg-[#6b9d73dc] flex  items-center  ">
//               Learn
//               <Arrow></Arrow>
//             </button>

//             <div class="absolute left-0 hidden bg-[#E4E4E4] rounded-lg group-hover:block text-black text-[17.188px]    font-normal leading-[27.3px]">
//               <ul class="space-y-2 py-2  ">
//                 <li class="hover:bg-[#6b9d73dc] rounded-md px-4 py-2">
//                   <a href=" ">Option 1</a>
//                 </li>
//                 <li class="hover:bg-[#6b9d73dc] rounded-md px-4 py-2">
//                   <a href=" ">Option 2</a>
//                 </li>
//                 <li class="hover:bg-[#6b9d73dc] rounded-md px-4 py-2">
//                   <a href=" ">Option 3</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div class="relative inline-block ">
//           <div class="group">
//             <button class="text-[#E4E4E4] text-center font-helvetica text-[17.188px] font-normal leading-[27.3px]   rounded-sm   flex items-center">
//               Build
//               <Arrow></Arrow>
//             </button>
//             <div class="absolute left-0 hidden bg-[#E4E4E4] rounded-lg  group-hover:block text-black text-[17.188px] font-normal leading-[27.3px]">
//               <ul class="space-y-2 py-2">
//                 <li class="hover:bg-[#6b9d73dc] rounded-md px-4 py-2">
//                   <a href=" ">Option 1</a>
//                 </li>
//                 <li class="hover:bg-[#6b9d73dc] rounded-md px-4 py-2">
//                   <a href=" ">Option 2</a>
//                 </li>
//                 <li class="hover:bg-[#6b9d73dc] rounded-md px-4 py-2">
//                   <a href=" ">Option 3</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div class="relative inline-block ">
//           <div class="group">
//             <button class="text-[#E4E4E4] text-center font-helvetica text-[17.188px] font-normal  px-4 py-2 flex items-center">
//               Solutions
//               <Arrow></Arrow>
//             </button>
//             <div class="absolute left-0 hidden bg-[#E4E4E4] rounded-lg group-hover:block text-black text-[17.188px] font-normal leading-[27.3px]">
//               <ul class="space-y-2 py-2">
//                 <li class="hover:bg-[#6b9d73dc] rounded-md  px-4 py-2">
//                   <a href=" ">Option 1</a>
//                 </li>
//                 <li class="hover:bg-[#6b9d73dc]  rounded-md px-4 py-2">
//                   <a href=" ">Option 2</a>
//                 </li>
//                 <li class="hover:bg-[#6b9d73dc] rounded-md px-4 py-2">
//                   <a href=" ">Option 3</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div class="relative inline-block ">
//           <div class="group">
//             <button class="text-[#E4E4E4] text-center font-helvetica text-[17.188px] font-normal leading-[27.3px]  px-4 py-2 flex items-center">
//               Network
//               <Arrow></Arrow>
//             </button>
//             <div class="absolute left-0 hidden bg-[#E4E4E4]  rounded-lg group-hover:block text-black text-[17.188px] font-normal leading-[27.3px]">
//               <ul class="space-y-2 py-2">
//                 <li class="hover:bg-[#6b9d73dc]  rounded-md px-4 py-2">
//                   <a href=" ">Option 1</a>
//                 </li>
//                 <li class="hover:bg-[#6b9d73dc] rounded-md px-4 py-2">
//                   <a href=" ">Option 2</a>
//                 </li>
//                 <li class="hover:bg-[#6b9d73dc] rounded-md px-4 py-2">
//                   <a href=" ">Option 3</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div class="relative inline-block ">
//           <div class="group">
//             <button class="text-[#E4E4E4] text-center font-helvetica text-[17.188px] font-normal  rounded-md px-4 py-2 flex items-center">
//               Community
//               <Arrow></Arrow>
//             </button>
//             <div class="absolute left-0 hidden bg-[#E4E4E4]  rounded-lg group-hover:block text-black text-[17.188px] font-normal leading-[27.3px]">
//               <ul class="space-y-2 py-2">
//                 <li class="hover:bg-[#6b9d73dc] rounded-md px-4 py-2">
//                   <a href=" ">Option 1</a>
//                 </li>
//                 <li class="hover:bg-[#6b9d73dc] rounded-md px-4 py-2">
//                   <a href=" ">Option 2</a>
//                 </li>
//                 <li class="hover:bg-[#6b9d73dc] rounded-md px-4 py-2">
//                   <a href=" ">Option 3</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../Images/logotype.e4df684f.svg.png";
import { Arrow } from "../reuseable/Icon";

const Navbar = () => {

  // const [openIndex, setOpenIndex] = useState(null);

  // const handleToggle = (index) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };  

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black   h-[67.3px] px-6 lg:px-[149.5px] py-[20px] flex justify-between items-center">
      <img src={logo} alt="Logo" className="h-8" />

  
      <div className=" md:hidden  xl:flex lg:hidden hidden  space-x-[35px]">
        {["Learn", "Build", "Solutions", "Network", "Community"].map((item) => (
          <div className="relative inline-block group" key={item}>
            <button className="text-[#E4E4E4] text-center font-helvetica text-[17.188px] font-normal flex items-center  ">
              {item}
              <div className=" transition-transform duration-300 transform rotate-0 group-hover:-rotate-180">

              <Arrow />
              </div>
            </button>
            <div className="absolute  hidden    bg-[#6e76e4b8] rounded-lg group-hover:block text-black text-[17.188px] font-normal !z-50">
              <ul className="space-y-2 py-2   ">
                {["Option 1", "Option 2", "Option 3"].map((option ) => (
                  <li key={option} className="hover:bg-[#6b9d73b5] hover:text-white rounded-md px-4 py-2 z-50">
                    <a href=" " onClick={(e) => e.preventDefault()}>{option}</a>
                  </li> 
                
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile & Tablet Menu */}
      <div className=" xl:hidden  
          ">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu className="text-white text-2xl" />
        </button>
        {menuOpen && (
          <div className="absolute   right-0     w-screen    h-screen  rounded-md bg-[#6e76e4b8] text-black p-4 shadow-lg  !z-50">
        
            
       




{/* {['Learn', 'Build', 'Solutions', 'Network', 'Community'].map((item, index) => (
        <div key={item} className="py-2  ">
          <button 
            className="text-[17px] font-normal flex items-center justify-between w-full px-4 py-2 bg-[#6E75E4] rounded-md" 
            onClick={() => handleToggle(index)}>
            {item}
            <span className="ml-2">{openIndex === index ? '▲' : '▼'}</span>
          </button>
          <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>  
            <ul className="pl-4 space-y-2 py-2 bg-white rounded-md shadow-md">
              {['Option 1', 'Option 2', 'Option 3'].map((option) => (
                <li key={option} className="hover:bg-[#6b9d73dc] rounded-md px-4 py-2">
                  <a href=" " onClick={(e) => e.preventDefault()}>{option}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))} */}



{['Learn', 'Build', 'Solutions', 'Network', 'Community'].map((item) => (
  <div key={item} className="py-2">
    <button 
      className="text-[17px] font-normal flex items-center justify-between w-full px-4 py-2 bg-[] rounded-md">
      {item}
    </button>
    <div className="overflow-hidden mt-2">
      <ul className="pl-4 space-y-2 py-2 bg-white rounded-md shadow-md">
        {['Option 1', 'Option 2', 'Option 3'].map((option) => (
          <li key={option} className="hover:bg-[#6b9d73dc] rounded-md px-4 py-2">
            <a href=" " onClick={(e) => e.preventDefault()}>{option}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

