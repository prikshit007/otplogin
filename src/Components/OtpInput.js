import React, { useEffect, useRef, useState } from "react";

function OtpInput({ length, otpSubmit }) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs=useRef([]);

  console.log(inputRefs)
  useEffect(()=>{
    if(inputRefs.current[0]){
        inputRefs.current[0].focus();
    }
  },[])
  const handleChange = (e, index) => {
    const value=e.target.value;
    if(isNaN(value)){
        return;
    }
    const newOtp=[...otp];
    newOtp[index]=value.substring(value.length-1);
    console.log(newOtp)
    setOtp(newOtp)
    const combinedOtp=newOtp.join("");
    if(combinedOtp.length==4){
        otpSubmit(combinedOtp)
    }
    if(value && index<length-1 && inputRefs.current[index+1]){
        inputRefs.current[index+1].focus()
    }
  };
  const handleKeyDown=(e,index)=>{
    if(e.key=="Backspace" && !otp[index] && index>0 && inputRefs.current[index-1]){
       
            inputRefs.current[index-1].focus()
        // }
    }
  } // if(!otp[index] && index>0 && inputRefs.current[index-1]){

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            type="text"
            ref={(input)=>(inputRefs.current[index]=input)}
            key={index}
            value={value}
            onChange={(e) => handleChange(e, index)}
            className="otpinput"
            onKeyDown={(e)=>handleKeyDown(e,index)}
          />
        );
      })}
    </div>
  );
}

export default OtpInput;
