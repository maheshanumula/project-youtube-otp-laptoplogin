import "./banana.css"

import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";



const Thirdcomp = () => {
    const [value, setValue] = useState("")

    const user = async(e)=>{
       e.preventDefault()
         setValue(value)
     console.log(value)
    }


    return ( 
        <div>
         
            <form onSubmit={user}>
             <div className="section">
               
                <img src="photos/pic.jpg.jpeg" /><br/>
                <h1>mahesh</h1>
                                                  
               <input type="password" placeholder ="  Password "name = "value" onChange={(e)=>setValue(e.target.value)}/><FaLongArrowAltRight className="icon"/><br/>
                
               <button className="btn" type="submit">submit</button>
             </div>
             
             </form>
        </div>
     );
}
 
export default Thirdcomp ;