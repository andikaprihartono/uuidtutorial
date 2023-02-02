import { Html, Head, Main, NextScript } from 'next/document';
import Foot from './components/wave';
import Image from 'next/image';
import Logore from '../public/Logore.svg';
import Registration from '../pages/components/registrasi'


export default function Document() {
  return (
    <Html lang="en">
      <Head />
       {/* <Registration /> */}
      <body className=" w-screen h-screen ">  
       <Main />
       <NextScript />
        <Foot />
        </body>
    </Html>
  )
}
