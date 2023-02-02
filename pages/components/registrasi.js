import React from "react";
import Btnclose from '../../public/outlineclose.svg';
import Image from 'next/image';
import logoregis from '../../public/Logoregis.png'
import {useState} from "react";


function registration(){
const [showRegis,setShowRegis] = useState(false);

    return(
<>

<button onClick= {()=>setShowRegis(true)} 
className=" mt-6 mb-4 w-full rounded-xl justify-center  py-2.5
 bg-color-button text-white text-center Font-bold 
 text-base">REGISTER UDID</button>
{showRegis ? (

<>


<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
<div className="lg:w-1/6 w-5/6 bg-white p-5  m-auto rounded-xl">
<div className="w-full flex justify-end mb-5">
<button onClick={()=>setShowRegis(false)}>
<Btnclose />
</button>
</div>
<Image 
    src={logoregis}
    alt="Picture regis"
    width={64}
    height={64}
    style={{
        margin:"auto"
    }}
/>
<div className="mt-4" >
<p className="font-bold text-lg text-center">Hi, please register here.</p>
<p className="font-normal text-sm text-center">Register your UDID for access Portal apps </p>
</div>
<form>
<div className="mt-4">
    <label className="text-base font-medium">NPK (Nomor Pokok Karyawan)</label>
    <input className="border w-full rounded-lg p-2.5 mt-2" input="text" placeholder="NPK (Nomor Pokok Karyawan)"/>
</div>
<div className="mt-4">
<label className="text-base font-medium">UDID</label>
<input className="border w-full rounded-lg p-2.5 mt-2" input="text" placeholder="UDID"/>
</div>
<button onClick={()=>setShowRegis(false)} className="w-full mt-4 rounded-xl  py-2.5 bg-color-button text-white text-center Font-bold text-base">Register</button>
</form>

</div>
</div>
</>
):null 
}
</>
    )
}
export default registration;