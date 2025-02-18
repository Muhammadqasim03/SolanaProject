import React from "react";
import {
  Brave,
  Circle,
  Discord,
  Google,
  Jump,
  Lollapalooza,
  Magiceden,
  Meta,
  Shopify,
} from "../reuseable/Icon";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Sliders = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 700,
    autoplaySpeed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: false,
    arrows: false, 

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,  // Jab screen width 768px se kam ho
        settings: {
          slidesToShow: 4,  // 768px se kam screen par sirf 1 slide show karen
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,  // Jab screen width 768px se kam ho
        settings: {
          slidesToShow: 1,  // 768px se kam screen par sirf 1 slide show karen
          slidesToScroll: 1
        }
      }
    ]
  };
  return (


    // left-[190px] 
    // w-[80.747%]
    <div
      className="  w-[80%] mx-auto   " >
      <Slider {...settings}>
        <Brave></Brave>
        <Circle></Circle>
        <Discord></Discord>
        <Google></Google>
        <Jump></Jump>
        <Lollapalooza></Lollapalooza>
        <Magiceden></Magiceden>
        <Meta></Meta>
        <Shopify></Shopify>

      </Slider>
    </div>
  );
};

export default Sliders;



