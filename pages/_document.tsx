import { Html, Head, Main, NextScript } from 'next/document';
import Foot from './components/Wave';
import Image from 'next/image';
import Logore from '../public/Logore.svg';
import Registration from './components/Registrasi'


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
