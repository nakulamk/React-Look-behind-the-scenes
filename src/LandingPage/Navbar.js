import React from "react";
import logo form '../images/logo.png';

function Navbar(){
  return(
    <nav className={}>
      <a herf='#' className="logo">
        <img src={logo} alt=''></img>
      </a>
      <input type='checkbox' className="menu-btn" id="menu-btn"></input>
      <label className="menu-icon" for='menu-btn'>
      <span className="nav-icon"></span>
      </label>
      <ul className="'menu">
      <li><a herf='#'>hoem</a></li>
      <li><a herf='#'>features</a></li>
      <li><a herf='#'>about</a></li>
      <li><a herf='#'>ue sss</a></li>
      <li><a herf='#'>sownloasd</a></li>
      <li><a herf='#'>asdfas</a></li>
      </ul>
      
    </nav>
  )
}

export default Navbar;