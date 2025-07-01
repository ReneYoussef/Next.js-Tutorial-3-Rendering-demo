"use client"
import { ServerSideFunction } from "@/utils/server-utils"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";

//server only code with sourver-route file and utils folder 
export default function ClientRoutePage() {
  const theme = useTheme();
  const result = clientSideFunction();
  return (
    // <div className="image-slider-container">
    //   <Slider {...settings}>
    //     <div>
    //       <img src="http://picsum.photos/400/200" />
    //     </div>
    //     <div>
    //       <img src="http://picsum.photos/400/200" />
    //     </div>
    //     <div>
    //       <img src="http://picsum.photos/400/200" />
    //     </div>
    //     <div>
    //       <img src="http://picsum.photos/400/200" />
    //     </div>
    //   </Slider>
    // </div>
    <>
    <h1 style={{color:theme.colors.primary}}>Client route page</h1>
    <p>{result}</p>
    </>
  );
}
