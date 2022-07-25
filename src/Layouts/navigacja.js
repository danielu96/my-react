
import React from 'react';
// import { button } from 'bootstrap';
import { useRef } from 'react';
import {FaBars , FaTimes} from "react-icons/fa";
import "../Styles/navigacja.css";
 function Navbar() {
  const navRef = useRef();
   
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
 return(
    <header>
        <h3>TW</h3>
        <nav ref ={navRef}>
            <a href='/#'>Home</a>
            <a href='/#'>About</a>
            <a href='/#'>Contact</a>
            <button className ="nav-btn nav-close-btn"onClick={showNavBar}>
                <FaTimes/>
            </button>
        </nav>
        <button className ="nav-btn"onClick={showNavBar}>
            <FaBars/>
        </button>
    </header>
    
 )
}
export default Navbar;