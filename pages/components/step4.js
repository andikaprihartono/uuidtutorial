
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components

import { Autoplay, Pagination } from "swiper";
import './Step.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore from "swiper";
import Image from 'next/image'
import image4 from '../../public/gambar4.png'

function Step4(){
    return(
<>

<div className="w-full flex-col   text-center mb-6">
      <div className="image-container">

<Image 
    src={image4}
    alt="Picture regis4"
    width={197}
    height={440}
    style={{
     marginLeft:'auto',
     marginRight:'auto'     
 }}  
   
/>

      </div>
<div className="w-32 font-step py-2 px-3 rounded-lg font-normal text-xs text-center mx-auto mt-6">Step 4 </div>
<p className="text-sm font-normal mt-6">Klik Menu “Install”.</p> 
</div>
</>
    )
}
export default Step4;
