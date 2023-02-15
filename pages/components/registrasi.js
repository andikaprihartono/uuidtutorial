import React from "react";
import Btnclose from '../../public/outlineclose.svg';
import Image from 'next/image';
import logoregis from '../../public/Logoregis.png';
import {useState} from "react";
import Swal from 'sweetalert2/dist/sweetalert2.all';
import { FiAlertCircle } from "react-icons/fi";
import withReactContent from "sweetalert2-react-content";
import WarningSign from "../../public/warningsign.svg";
import axios from 'axios';




function Registration(){
    const [showRegis,setShowRegis] = useState(false);
    // const [showAlert,setAlert] = useState ("");
    // const [npk,setNpk]=useState('')
    // const [udid,setUdid]=useState('')
    
    const [data,setData] = useState({
        npk:"",
        udid:""
    })
    
    function submit(el){
    el.preventDefault();
    axios.post("https://api.ptre.co.id/portal/api/v1/udid-registration",{
        npk:data.npk,
        udid:data.udid
    })
    .then(res=>{
        console.log(res.data)
    })

if(npk.length==0||udid.length==0){
    setError(true)
}else{
  
      Swal.fire({
        title: "Success!",
        text: "You clicked the button!",
        icon: "success",
        button: "Done!",
        
      })
}

    setData(
      {
        npk:"",
        udid:""
      }  
    )
    }
    
    
    
    function handleInput(el){
    const newdata={...data};
    newdata[el.target.id] = el.target.value;
    setData(newdata);
    console.log(newdata);
    }
    
    
    const [error,setError] = useState(false);
    



    return(
<>

<button onClick= {()=>setShowRegis(true)} 
className=" mt-6 mb-4 w-full rounded-xl justify-center  py-2.5
 bg-color-button text-white text-center Font-bold 
 text-base">Register UDID</button>
{showRegis ? (

<>
<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50 p-4">
<div className="width-menubar w-5/6 bg-white p-5  m-auto rounded-xl">
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

<form onSubmit={submit}>
<div className="mt-4">
    <label className="text-base font-medium">NPK (Nomor Pokok Karyawan)</label>
    <input id="npk"  value={data.npk} onChange={handleInput} className="border w-full rounded-lg p-2.5 mt-2" type="number" name="npk" placeholder="NPK (Nomor Pokok Karyawan)"/>
</div>
{
    error&&npk.length<=0?
    <div className="flex  h-full mt-2">
<WarningSign />
    <label className="text-red-500 text-xs font-light ml-1">Type error here</label>
</div>:""
}
<div className="mt-4">
<label className="text-base font-medium">UDID</label>
<input id="udid" value={data.udid} onChange={handleInput} className="border w-full rounded-lg p-2.5 mt-2"  name="udid" type="text" placeholder="UDID"/>
</div>
{
    error&&udid.length<=0?
<div className="flex  h-full mt-2">
<WarningSign />
    <label className="text-red-500 text-xs font-light ml-1">Type error here</label>
</div>:""
}
<button type={'submit'}  className="w-full mt-4 rounded-xl  py-2.5 bg-color-button text-white text-center Font-bold text-base">Register</button>
{/* <button onClick={setAlert} className="w-full mt-4 rounded-xl  py-2.5 bg-color-button text-white text-center Font-bold ">Register</button> */}
</form>

</div>
</div>
</>
):null 
}
</>
    )
}
export default Registration;