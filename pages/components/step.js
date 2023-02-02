import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import SwiperCore from "swiper";
// import required modules
import { Autoplay, Pagination } from "swiper";
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
 <Swiper slidesPerView={1}  modules={[Pagination]} autoplay={{delay:2000}} pagination={{dynamicBullets: true }} className="mySwiper">
      <SwiperSlide>
      <div className="w-full flex-col text-center ">

<Image 
    src={image1}
    alt="Picture regis1"
    width={450}
    height={200}
   
/>
<div className="w-32 font-step py-2 px-3 rounded-lg font-normal text-xs text-center mx-auto mt-6">Step 1 </div>
<div className="mt-6">
<p className="text-sm font-normal ">Buka website <span className="text-sm font-medium text-link"> https://udid.tech/ </span> , </p>
<p className="text-sm font-normal">Klik Tombol “Get your UIUD now”.</p>            
</div>
</div>
      </SwiperSlide>
     
      <SwiperSlide>
      <div className="w-full flex-col   text-center ">
<Image 
    src={image2}
    alt="Picture regis2"
    width={450}
    height={200}
    
/>
<div className="w-32 font-step py-2 px-3 rounded-lg font-normal text-xs text-center mx-auto mt-6">Step 2 </div>
<p className="text-sm font-normal mt-6">Klik Tombol “Got it!”.</p>  
</div>

      </SwiperSlide>
      <SwiperSlide>
      <div className="w-full flex-col  text-center ">
<Image 
    src={image3}
    alt="Picture regis3"
    width={450}
    height={200}
   
/>
<div className="w-32 font-step py-2 px-3 rounded-lg font-normal text-xs text-center mx-auto mt-6">Step 3 </div>
<p className="text-sm font-normal mt-6">Klik Menu “Profil Diunduh”.</p>
</div>
      </SwiperSlide>
      
      <SwiperSlide>
      <div className="w-full flex-col   text-center ">
<Image 
    src={image4}
    alt="Picture regis4"
    width={450}
    height={200}
   
/>
<div className="w-32 font-step py-2 px-3 rounded-lg font-normal text-xs text-center mx-auto mt-6">Step 4 </div>
<p className="text-sm font-normal mt-6">Klik Menu “Install”.</p> 
</div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="w-full flex-col   text-center ">
<Image 
    src={image5}
    alt="Picture regis5"
    width={200}
    height={50}
  
/>
<div className="w-32 font-step py-2 px-3 rounded-lg font-normal text-xs text-center mx-auto mt-6">Step 5 </div>
<p className="text-sm font-normal mt-6">Jika sudah lesai maka akan kehalaman udid.tech seperti gambar diatas,
copy UDID yang tertera untuk di daftarkan.</p> 
</div>
      </SwiperSlide>
     
</Swiper>

<div className="w-full  text-center ">

{/* <div>

<Image 
    src={image1}
    alt="Picture regis"
    width={450}
    height={207.92}
    style={{
        margin:"auto"
    }}
/>
<div className="w-32 font-step py-2 px-3 rounded-lg font-normal text-xs text-center mx-auto mt-6">Step 1 </div>
<div className="mt-6">
<p className="text-sm font-normal ">Buka website <span className="text-sm font-medium text-link"> https://udid.tech/ </span> , </p>
<p className="text-sm font-normal">Klik Tombol “Get your UIUD now”.</p>            
</div>
</div> */}

{/* <div>
<Image 
    src={image2}
    alt="Picture regis"
    width={450}
    height={207.92}
    style={{
        margin:"auto"
    }}
/>
<div className="w-32 font-step py-2 px-3 rounded-lg font-normal text-xs text-center mx-auto mt-6">Step 2 </div>
<p className="text-sm font-normal mt-6">Klik Tombol “Got it!”.</p>  
</div> */}

{/* <div>
<Image 
    src={image3}
    alt="Picture regis"
    width={450}
    height={207.92}
    style={{
        margin:"auto"
    }}
/>
<div className="w-32 font-step py-2 px-3 rounded-lg font-normal text-xs text-center mx-auto mt-6">Step 3 </div>
<p className="text-sm font-normal mt-6">Klik Menu “Profil Diunduh”.</p>
</div> */}

{/* <div>
<Image 
    src={image4}
    alt="Picture regis"
    width={450}
    height={207.92}
    style={{
        margin:"auto"
    }}
/>
<div className="w-32 font-step py-2 px-3 rounded-lg font-normal text-xs text-center mx-auto mt-6">Step 4 </div>
<p className="text-sm font-normal mt-6">Klik Menu “Install”.</p> 
</div>


<div>
<Image 
    src={image5}
    alt="Picture regis"
    width={450}
    height={207.92}
    style={{
        margin:"auto"
    }}
/>
<div className="w-32 font-step py-2 px-3 rounded-lg font-normal text-xs text-center mx-auto mt-6">Step 5 </div>
<p className="text-sm font-normal mt-6">Jika sudah lesai maka akan kehalaman udid.tech seperti gambar diatas, copy UDID yang tertera untuk di daftarkan</p>
</div> */}

</div>




        </>


    )
}
export default step;