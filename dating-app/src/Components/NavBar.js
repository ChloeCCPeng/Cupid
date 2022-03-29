import React from 'react';
import profile_icon from '../assets/User.svg'
import message_icon from '../assets/Menu.svg'

function NavBar() {
    return (
    <div className="h-24 flex place-content-between">
        <img src={profile_icon} className="rounded-full" alt="User icon"/>
        <img src={message_icon} alt="Message icon"/>
    </div>

    );
  }
  
  export default NavBar;
  