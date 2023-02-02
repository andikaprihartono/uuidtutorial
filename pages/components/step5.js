import React from "react";
import Image from 'next/image';
import StepPic5 from '../../public/getuuid5.svg';

function Step5(){
    return(
        <>
           <div className="w-full text-center z-20">
 <StepPic5 />
<div className="w-32 font-step py-2 px-3 rounded-lg font-normal text-xs text-center mx-auto mt-6">Step 5 </div>


<p className="text-sm font-normal mt-6">Jika sudah selesai maka akan kehalaman udid.tech seperti gambar diatas, copy UDID yang tertera untuk di daftarkan</p>            

<div className="flex w-full justify-center mt-6">
    <div className="rounded-full w-3 h-3 bg-slate-200  mr-2"></div>
    <div className="rounded-full w-3 h-3 bg-slate-200 mr-2"></div>
    <div className="rounded-full w-3 h-3 bg-slate-200 mr-2"></div>
    <div className="rounded-full w-3 h-3 bg-slate-200 mr-2"></div>
    <div className="rounded-full w-3 h-3 bg-green-300"></div>
</div>
<button className="mt-6 w-full rounded-xl h-11 py-2.5 bg-color-button text-white text-center Font-bold text-base">REGISTER UDID</button>
</div>
</> 
        
    )
}
export default Step5;