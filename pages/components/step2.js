import React from "react";
import Image from 'next/image';
import StepPic2 from '../../public/getuuid2.svg';

function Step2(){
    return(
<>
<div className="w-full text-center z-20">
 <StepPic2 />
<div className="w-32 font-step py-2 px-3 rounded-lg font-normal text-xs text-center mx-auto mt-6">Step 2 </div>


<p className="text-sm font-normal mt-6">Klik Tombol “Got it!”.</p>            


<button className="mt-6 w-full rounded-xl h-11 py-2.5 bg-color-button text-white text-center Font-bold text-base">REGISTER UDID</button>
</div>
</>
    )
}
export default Step2;