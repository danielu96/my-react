import React from "react";
import { FaTimes,  FaMugHot} from "react-icons/fa";
import "../Styles/navigation.css";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import { useState } from "react";
export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <div className="brand-name">
      < Navbar.Brand href="/">
        <img src="images/LOGO2.png" width="40px" alt="logo"></img>
        </Navbar.Brand>
      </div>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="gray"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
          {/* <hr className="kreska" /> */}
        <ul>
       
          <img
            className="img-navi"
            src="images/LOGO2.png"
            style={{
              width: "40px",
            paddingBottom:"1rem"
            }}
            alt="LOGO"
          >           
          </img>
      
            <hr className="kreska" />  
  
          <li>             
            <a  href="/">Home </a>
          </li>
          <li>
            <a href="/Sublimation">Sublimation</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li>
            <a href="Formularz">Formularz</a>
          </li>
          {/* <li>
            <a href="Items">paginate</a>
          </li> */}

         
          {/* <li>
           
              <NavDropdown
               
                title="Z nadrukiem"
                // id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="#action3">
                  Kubki imienne
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">Kubki Latte</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Kubki magiczne
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Nie tylko kubki
                </NavDropdown.Item>
              </NavDropdown>
           
          </li> */}
          <li>
            <button
              className="nav-btn nav-close-btn"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              <FaTimes />
            </button>
          </li>
          {/* <hr className="kreska" /> */}
        </ul>
      </div>
    </nav>
  );
}
