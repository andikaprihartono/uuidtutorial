import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components

import { Autoplay, Pagination } from "swiper";
import './Step.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore from "swiper";


import Image from 'next/image';
import StepPic from '../../public/getuuid1.svg';
import image1 from '../../public/gambar1.png'
import image2 from '../../public/gambar2.png'
import image3 from '../../public/gambar3.png'
import image4 from '../../public/gambar4.png'
import image5 from '../../public/gambar5.png'

function step(){
  SwiperCore.use([Autoplay])
    return(
        
        <>
 {/* <Swiper slidesPerView={1}  modules={[Pagination]} autoplay={{delay:2000}} pagination={true} className="mySwiper mb-6">
      <SwiperSlide>
      <div className="w-full flex flex-col mx-auto text-center mb-6">
     
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
      </SwiperSlide>  

      <SwiperSlide>
      <div className="w-full flex-col   text-center mb-6">
      <div className="image-container">
    <Image 
    src={image2}
    alt="Picture regis2"
    width={197}
    height={440}
    style={{
     marginLeft:'auto',
     marginRight:'auto'     
 }}   
/>
      </div>
<div className="w-32 font-step py-2 px-3 rounded-lg font-normal text-xs text-center mx-auto mt-6">Step 2 </div>
<p className="text-sm font-normal mt-6">Klik Tombol “Got it!”.</p>  
</div>

      </SwiperSlide>

      <SwiperSlide>
      <div className="w-full flex-col  text-center mb-6">
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
      </SwiperSlide>

      <SwiperSlide>
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
      </SwiperSlide>

      <SwiperSlide>
      <div className="w-full flex-col  text-center mb-6">
      <div className="image-container">
<Image 
    src={image5}
    alt="Picture regis5"
    width={197}
    height={440}
    style={{
     marginLeft:'auto',
     marginRight:'auto'     
 }}  
  
/>

      </div>
<div className="w-32 font-step py-2 px-3 rounded-lg font-normal text-xs text-center mx-auto mt-6">Step 5 </div>
<p className="text-sm font-normal mt-6">Jika sudah selesai maka akan kehalaman udid.tech seperti gambar diatas,
copy UDID yang tertera untuk di daftarkan.</p> 
</div>
      </SwiperSlide>
     
</Swiper> */}
        </>


    )
}
export default step;