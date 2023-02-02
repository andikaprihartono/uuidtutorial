import React from "react";
import { useState } from 'react';
function buttonregis(){
    const [showRegis, setShowRegis] = useState(false);
    return(
        <>
<button onClick= {()=>setShowRegis(true)} className=" mt-6 w-full rounded-xl justify-center  
py-2.5 bg-color-button text-white text-center Font-bold text-base">Register UDID</button>

        </>
    )
}
export default buttonregis;