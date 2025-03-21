import { useEffect, useState } from "react";
import "./color.css"
import { IoMail } from "react-icons/io5";

import React, { useRef } from "react";



const Firstone = ()=>{

const inputRefs = useRef([]) 

const [time ,setTime] = useState(new Date())

const handleChange = (e,index) => {
   const num1= e.target.value
  if(/^\d*$/.test(num1)){
   
    if (inputRefs.current[index ]) {
      inputRefs.current[index+1].focus();
    }
  }
 
};

const Otpmsg =()=>{
  confirm("Completed Your OTP verify")
}

useEffect(() => {
  const current =setInterval( ()=>{
setTime(new Date())
  },1000)
  }, []);
  
    return(
        <div className=" container">
            <div className="content">

                     <IoMail className="icon"/>
                     

               <h1>OTP Verification</h1>
               <div className="otpname">
                <p>
                    One Time Password (OTP) has been sent via Email to
                </p>
                <b>
                    rebeccajohn@gmail.com
                </b>
               </div>
            <div className="input-text">
                <p>Enter The OTP below to verify it.</p>
                {[...Array(4)].map((_, index) => (

                <input type="text" key={index} maxLength={1}   ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleChange(e, index)}
                />

              ))}
            </div><br/>
            <div className="nember">
            <p>Resend OTP in <label> 00:{time.getSeconds()} </label> </p>
            </div>
            <button className="buttonname" onClick={Otpmsg}>verify OTP</button>
            </div>
        </div>
    )
}

export default Firstone;