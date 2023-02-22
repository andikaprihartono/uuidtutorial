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
    // const [employee_no,setNpk]=useState('')
    // const [udid,setUdid]=useState('')
    const MySwal = withReactContent(Swal)
    
    const [data,setData] = useState({
        employee_no:"",
        udid:""
    })
    
    function submit(el){
    el.preventDefault();
let inputTag = document.querySelector(".error-input")
for( let errorInput in inputTag){
    console.log(errorInput);
    errorInput.remove();
}


axios({
   url:"https://api.ptre.co.id/portal/sanctum/csrf-cookie",
    method:"get" 

}).then((response) =>{
    console.log(document.cookie);
    axios({
        url: "https://api.ptre.co.id/portal/api/v1/udid-registration",
        method :"POST",
       data:{
        employee_no:data.employee_no,
        udid:data.udid 
       },
       withCredentials:true
    }) .then((res)=>{
        console.log(res);
      
            return  MySwal.fire({
                  title: "Success!",
                  text:"Your UDID has been registered",
                  icon: "success",
                  button: "Done!",
                })

        
        
    }).catch(err=>{
        
        if(err.response.status === 422 ){
            const errorNotif=  err.response.data.errors;
            for (let errorColoumn in errorNotif){

            let inputColoumn = document.querySelector(`input[name=${errorColoumn}]`);
            inputColoumn.classList.add("border-red-500");
            let classCointainerInput = inputColoumn.closest(".container-input")
            
            const notifContainer = document.createElement("div");
            notifContainer.classList.add("text-red-500" ,"text-xs" ,"font-light" ,"ml-1","error-input");
            notifContainer.innerHTML= errorNotif[errorColoumn][0];
            console.log( notifContainer);       

            classCointainerInput.appendChild(notifContainer);
        }
        }
        
    })

})
    setData(
      {
        employee_no:"",
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
<div className="mt-4 container-input">
    <label className="text-base font-medium">NPK (Nomor Pokok Karyawan)</label>
    <input id="employee_no"  value={data.employee_no} onChange={handleInput} className="border w-full rounded-lg p-2.5 mt-2"
     type="number" name="employee_no" placeholder="NPK (Nomor Pokok Karyawan)"/>
    
</div>

<div className="mt-4 container-input">
<label className="text-base font-medium">UDID</label>
<input id="udid" value={data.udid} onChange={handleInput} className="border w-full rounded-lg p-2.5 mt-2"  name="udid" type="text" placeholder="UDID"/>

</div>

<button type={'submit'}  className="w-full mt-4 rounded-xl  py-2.5 bg-color-button text-white text-center Font-bold text-base">Register</button>

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