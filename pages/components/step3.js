import React from "react";
import Image from 'next/image';
import StepPic3 from '../../public/getuuid3.svg';

function Step3(){
    return(
<>
<div className="w-full text-center z-20">
 <StepPic3 />
<div className="w-32 font-step py-2 px-3 rounded-lg font-normal text-xs text-center mx-auto mt-6">Step 3 </div>


<p className="text-sm font-normal mt-6">Klik Menu “Profil Diunduh”.</p>            

<div className="flex w-full justify-center mt-6">
    <div className="rounded-full w-3 h-3 bg-slate-200  mr-2"></div>
    <div className="rounded-full w-3 h-3 bg-slate-200 mr-2"></div>
    <div className="rounded-full w-3 h-3 bg-green-300 mr-2"></div>
    <div className="rounded-full w-3 h-3 bg-slate-200 mr-2"></div>
    <div className="rounded-full w-3 h-3 bg-slate-200"></div>
</div>
<button className="mt-6 w-full rounded-xl h-11 py-2.5 bg-color-button text-white text-center Font-bold text-base">REGISTER UDID</button>
</div>
</>
    )
}
export default Step3;