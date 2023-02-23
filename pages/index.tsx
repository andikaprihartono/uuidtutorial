
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Step from './components/Step'
// import Step2 from '../pages/components/step2'
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';


import Logore from '../public/Logore.svg'
import Buttonregis from './components/Buttonregis'
import Registration from './components/Registrasi'
import Step1 from './components/Step1';
import Step2 from './components/Step2';

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components

import { Autoplay, Pagination } from "swiper";
import './components/Step.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore from "swiper";
import Foot from './components/Wave'


const inter = Inter({ subsets: ['latin'] })

SwiperCore.use([Autoplay]);
export default function Home() {
  return (
    <>
      <Head>
        <title>UUID</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoportait.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <div className='py-6 px-6'>
      <Logore />
      </div>
   
       <main className="size-users w-full items-center flex flex-col mx-auto justify-center py-8 lg:px-0 px-0 main-height"  >
     
<Swiper slidesPerView={1}  modules={[Pagination]} autoplay={{delay:5000}} loop={true} pagination={true} className="size-users mySwiper mb-6">
<SwiperSlide> <Step1 /> </SwiperSlide>
<SwiperSlide> <Step2 /> </SwiperSlide>
<SwiperSlide> <Step3 /> </SwiperSlide>
<SwiperSlide> <Step4 /> </SwiperSlide>
<SwiperSlide> <Step5 /> </SwiperSlide>
  </Swiper>


       <Registration />
     </main>
 

    </>
  )
}
