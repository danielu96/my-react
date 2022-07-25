{/* <nav className="navigation" >
       <div className='brrand-name'>
     <img src="images/LOGO.png" width= "100px" height = "20vh"alt="LOGO"></img>
         </div>
    <nav ref ={navRef}>
    
        <a href='/'>Home</a>
        <a href='/#'>About</a>
        <a href='/Contact'>Contact</a>
        <button className ="nav-btn nav-close-btn"onClick={showNavBar}>
            <FaTimes/>
        </button>
    </nav>
    
    <button className ="nav-btn"onClick={showNavBar}>
        <FaBars/>
    </button>
    
</nav> */}
import { useState } from "react"
import "../styles/navbar.css"

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        MacroSoft
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}