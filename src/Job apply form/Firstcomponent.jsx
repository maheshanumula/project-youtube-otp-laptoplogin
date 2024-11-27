import "./ball.css"

import { useState } from "react";
const Firstcomponent = ()=>{
    const [name, setName] = useState("")
    const[email, SetEmail] = useState("")
    const[password, SetPossword] = useState("")
    const [rolle, setRolle] = useState("")
    const [experience, setExperience] = useState("")
    const Inform = {name, email,password, rolle, experience}
    const User = async(e)=>{
        e.preventDefault()
         console.log(Inform)
  }
      return(       
            <div className="mahesh">
                <div className="center">
                    <h1>Apply these job!!!</h1>
                <form onSubmit={User}>
                <label>Enter your Name</label><br/>
                 <input type="text" name ="name" onChange={(e)=>setName(e.target.value)} /><br/>
                <label>Enter Email</label><br/>
                 <input type="email" name = "email" onChange={(e)=>SetEmail(e.target.value)} /><br/>
                <label>Enter yor Password</label><br/>
                <input type="password" name= "password" onChange={(e)=>SetPossword(e.target.value)} /><br/>
                <label>Enter yor Rolle</label><br/>
                <input type="text" name="Rolle" onChange={(e)=>setRolle(e.target.value)} /><br/>
                <label>Enter yor Experience</label><br/>
                 <input type="text" name="Experience" onChange={(e)=>setExperience(e.target.value)} />
                <button>submit</button>
                </form>
                </div>              
        </div>
    )
}
export default Firstcomponent;