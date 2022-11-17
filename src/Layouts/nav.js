import React from "react";
import { FaTimes, FaMugHot } from "react-icons/fa";

import "../Styles/Css/navigation2.css";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { useSelector } from 'react-redux'
export default function Nav() {
  const { amount } = useSelector((state) => state.cart);
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
              width: "50px",
              paddingBottom: "1rem"
            }}
            alt="LOGO"
          >
          </img>

          <hr className="kreska" />

          <li>
            <a href="/">Home </a>
          </li>
          <li>
            <a href="/Sublimation">Sublimation</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li>
            <a href="/NowaLista">NowaLista </a>
          </li>
          <li>
            <a href="/Cart">CART </a>
          </li>
          <li>
            <i class="fa fa-shopping-bag" aria-hidden="true"></i> {amount}
          </li>


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
