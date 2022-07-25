import React from 'react';

// import { NavLink } from 'react-router-dom';
 

// const list = [

//   {name: "start", path: "/Card" },
//   { name: "produkty", path: "/products" },
//   { name: "kontakt", path: "/contact" },
//   { name: "panel admin", path: "/admin" },
// ]

// const Nav = () => {

//   const menu = list.map(item => (
//     <li key={item.name}>
//       <NavLink to={item.path} >{item.name}</NavLink> 
//     </li>
//   ))

//   return (
//     <nav >
//       <ul>
//         {menu}
//       </ul>
//     </nav>
//   );
// }

import {FaBars} from "react-icons/fa";
import { useState } from "react"
import "../Styles/navigation.css";

export default function Nav() {

  // const [isNavExpanded, setIsNavExpanded] = useState(false)
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");

  return (
    <nav className="navigation">
      <div className="brand-name">
  <img src="images/LOGO.png" width= "100px" alt="LOGO"></img>
      </div>
      {/* <button
        className="hamburger"
         onClick={() => {
           setIsNavExpanded(!isNavExpanded)
         }}
      ></button> */}
           <button className ="nav-btn"onClick={showNavBar}>
            <FaBars/>
        
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
           className="h-5 w-5"
           viewBox="0 0 20 20"
           fill="white"
         >
           <path
             fillRule="evenodd"
             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
             clipRule="evenodd"
           />
         </svg> */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Apek">About</a>
          </li>
          <li>
            <a href="/Babek">Babek</a>
                      </li>
                      <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
           </div>
    </nav>
  );
}