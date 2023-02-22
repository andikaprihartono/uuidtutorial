
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components

import { Autoplay, Pagination } from "swiper";
import './Step.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore from "swiper";
import Image from 'next/image'
import image1 from '../../public/gambar1.png'

function Step1(){
    return(
<>

<div className="size-users w-full flex flex-col mx-auto text-center mb-6">
     
<div className="image-container-shadow w-full ">
<div className="image-container">

<Image 
    src={image1}
    alt="Picture regis1"
    width={197}
    height={440}
 style={{
     marginLeft:'auto',
     marginRight:'auto'     
 }}    
/>
</div>

</div>
    
<div className="w-32 font-step py-2 px-3 rounded-lg font-normal text-xs text-center mx-auto mt-6">Step 1 </div>
<div className="mt-6">
<p className="text-sm font-normal ">Buka website <span className="text-sm font-medium text-link"> https://udid.tech/ </span> , </p>
<p className="text-sm font-normal">Klik Tombol “Get your UIUD now”.</p>            
</div>
</div>
</>
    )
}
export default Step1;
