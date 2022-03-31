import React from 'react';
import { Link } from "react-router-dom";
import message_icon from '../assets/Menu.svg'

function NavBar({userData}) {

    return (
    <div className="h-24 flex place-content-between">
        <Link to="/profile"><img src={userData.picture} className="rounded-full w-100 object-cover item-scale" style={{width: "100px", height: "100px"}} alt="User icon"/></Link>
        <img src={message_icon} alt="Message icon"/>
    </div>

    );
  }
  
  export default NavBar;
  