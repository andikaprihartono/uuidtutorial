import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components

import { Autoplay, Pagination } from "swiper";
import './Step.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore from "swiper";
import Image from 'next/image'
import image3 from '../../public/gambar3.png'

function Step3(){
    return(
<>

<div className="size-users w-full flex-col  text-center mb-6">
      <div className="image-container">
<Image 
    src={image3}
    alt="Picture regis3"
    width={197}
    height={440}
    style={{
     marginLeft:'auto',
     marginRight:'auto'     
 }}  
   
/>

      </div>
<div className="w-32 font-step py-2 px-3 rounded-lg font-normal text-xs text-center mx-auto mt-6">Step 3 </div>
<p className="text-sm font-normal mt-6">Klik Menu “Profil Diunduh”.</p>
</div>

</>
    )
}
export default Step3;