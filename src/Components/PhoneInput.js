import React, { useState } from "react";
import OtpInput from "./OtpInput";

function PhoneInput() {
  const [phoneValue, setPhoneValue] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const handleChange = (e) => {
    setPhoneValue(e.target.value);
  };
  var numberRegex = /^\d+$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phoneValue);
    if (phoneValue.length < 10) {
      console.log("returneds");
      return;
    }
    console.log("yes");
    setShowOtpInput(true);
  };
  const otpSubmit=(otp)=>{
    console.log(`login successful ${otp}`)
  }

  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter phone no"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
            <OtpInput otpSubmit={otpSubmit} length={4}/>
        </div>
      )}
    </div>
  );
}

export default PhoneInput;
