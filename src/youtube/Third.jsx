import "./colors.css"

import { GoHome } from "react-icons/go";



import { TfiLayoutMediaCenterAlt } from "react-icons/tfi"
import { RiContactsBookLine } from "react-icons/ri";
import { VscHistory } from "react-icons/vsc";
import { CgPlayList } from "react-icons/cg";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { IoGameController } from "react-icons/io5";
import { RiMovieLine } from "react-icons/ri";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { LiaAngleRightSolid } from "react-icons/lia";
import { CgLivePhoto } from "react-icons/cg";
import { MdOutlinePodcasts } from "react-icons/md";
import { Link } from "react-router-dom";


const Third = () => {
  return ( 
    <div className="header">
      <div className="main">
        
    <Link className='textdec'>
        <p><GoHome className="icon"/>   Home</p>
    </Link>

    <Link className='textdec'>
        <p><TfiLayoutMediaCenterAlt/> Subcriptions</p>    
    </Link>

         <hr />
        <h3>You  <LiaAngleRightSolid />  </h3>

    <Link className='textdec'>
        <p><RiContactsBookLine/> Your Channel</p>
    </Link>

    <Link className='textdec'>
        <p><VscHistory/> History</p>
    </Link>

    <Link className='textdec'>
        <p><CgPlayList /> Playlists</p>
    </Link>

    <Link className='textdec'>
        <p><GoVideo /> Your Videos</p>
    </Link>

    <Link className='textdec'>
        <p><MdOutlineWatchLater /> Watch later</p>
    </Link>

    <Link className='textdec'>
        <p><AiFillLike />Liked videos</p>
    </Link>

        <hr />
        <h3>Explore</h3>   


    <Link className='textdec'>
        <p><AiOutlineShopping/>Shopping</p>
    </Link>

    <Link className='textdec'>
        <p><IoMusicalNotesOutline/> Music</p>
    </Link>

    <Link className='textdec'>
        <p><MdOutlinePodcasts /> Podcasts</p>
    </Link>

    <Link className='textdec'>
        <p><TfiCup /> Sports</p>
    </Link>

    <Link className='textdec'>
        <p><IoGameController /> Gaming</p> 
    </Link>

    <Link className='textdec'>
        <p><RiMovieLine /> Movies</p>
    </Link>

    <Link className='textdec'>
        <p><HiOutlineNewspaper /> News</p>
    </Link>

    <Link className='textdec'>
        <p><CgLivePhoto /> Trending</p>
    </Link>
    
        </div>
    </div>
   );
}
 
export default Third;