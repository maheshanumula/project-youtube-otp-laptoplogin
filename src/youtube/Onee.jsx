
import "./colors.css"


import { IoLogoYoutube } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { FaMicrophone } from "react-icons/fa6";

import { IoVideocamOffOutline } from "react-icons/io5";

import { IoNotificationsOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";




const Onee = () => {
    return ( 
        <div className="header">
            <ul className="form">
         
            <CiMenuBurger className="menu"/><IoLogoYoutube  className="you"/><b> YouTube</b>
              
               <li> <input type="text" placeholder="Search"/><LuSearch  className="search"/> </li>
               <FaMicrophone className="micro" />
              
               <li className="mike"><IoVideocamOffOutline /> </li>
              
               
               <li><IoNotificationsOutline  className="noti"/></li>
               
            </ul>

        </div>
     );
}
 
export default Onee;