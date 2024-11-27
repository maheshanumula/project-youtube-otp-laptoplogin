import "./color.css"
import { IoMail } from "react-icons/io5";
const Firstone = ()=>{
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
                <input type="text" placeholder="" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </div><br/>
            <div className="nember">
            <p>Resend OTP in <label>00:08</label> </p>
            </div>
            <button className="buttonname">verify OTP</button>
            </div>
        </div>
    )
}

export default Firstone;