import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import { BsFillPersonPlusFill, BsFillPersonDashFill } from "react-icons/bs";
import "../Styles/Css/navigation2.css";
import Navbar from "react-bootstrap/Navbar";
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from "../Cart/cartSlice";
import { Link } from "react-router-dom";
import logo from "../Images/LOGO2.png";

export default function Nav() {
  const { isAuthenticated, logout, loginWithRedirect, user } = useAuth0();
  const { amount } = useSelector((store) => store.cart);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [myUser, setMyUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setMyUser(user);
  }, [user]);

  const handleLinkClick = () => {
    setIsNavExpanded(false);
  };

  return (
    <nav className="navigation">
      <div className="brand-name">
        <Navbar.Brand href="/my-react">
          <img src={logo} width="40px" alt="logo" />
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
        <ul>
          <img
            className="img-navi"
            src={logo}
            style={{
              width: "50px",
              paddingBottom: "1rem",
            }}
            alt="LOGO"
          />
          <hr className="kreska" />

          <li>
            <a href="/">Home  </a>
            <FaArrowRight className="FaArrowRight" />
          </li>

          <li>
            <a href="/Sublimation">Sublimation </a>
            <FaArrowRight className="FaArrowRight" />
          </li>

          <li>
            <a href="/Contact">Contact</a>
            <FaArrowRight className="FaArrowRight" />
          </li>
          <li>
            <a
              href="/Produkty"
            >
              Produkty </a>
            <FaArrowRight className="FaArrowRight" />
          </li>

          {myUser && (
            <li>
              <a href="/CheckOut">CheckOut </a>
              <FaArrowRight className="FaArrowRight" />
            </li>
          )}
          <li>
            <Link to="/cart" onClick={handleLinkClick}>
              <i className="fa fa-shopping-cart " style={{ fontSize: "20px" }}>
                <span className="cart-value">{amount}</span>
              </i>
            </Link>
            <FaArrowRight className="FaArrowRight" />
          </li>
          <li style={{ color: "gray", marginTop: "0.6rem" }}>
            {myUser ? (
              <a
                onClick={() => {
                  dispatch(clearCart());
                  logout({
                    returnTo:
                      window.location.hostname === "localhost"
                        ? "http://localhost:3000"
                        : "https://danielu96.github.io/my-react/",
                  });
                  handleLinkClick();
                }}
              >
                logout <BsFillPersonDashFill size={23} style={{ marginTop: "-3px" }} />
              </a>
            ) : (
              <a onClick={() => {
                loginWithRedirect();
                handleLinkClick();
              }}>
                login <BsFillPersonPlusFill size={23} style={{ marginTop: "-3px" }} />
              </a>
            )}
            <FaArrowRight className="FaArrowRight" />
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
          <hr className="kreska" />
          <div className="test">
            <h1>Wersja testowa</h1>
            <p>2020</p>
          </div>
        </ul>
      </div>
    </nav>
  );
}


// import React, { useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { FaTimes, FaArrowRight } from "react-icons/fa";
// import { BsFillPersonPlusFill, BsFillPersonDashFill } from "react-icons/bs";
// import "../Styles/Css/navigation2.css";
// import Navbar from "react-bootstrap/Navbar";
// import { useState } from "react";
// import { useSelector } from 'react-redux'
// import { clearCart } from "../Cart/cartSlice";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import logo from "../Images/LOGO2.png";
// export default function Nav() {
//   const { isAuthenticated, logout, loginWithRedirect, user } = useAuth0()
//   const { amount } = useSelector((store) => store.cart);
//   const [isNavExpanded, setIsNavExpanded] = useState(false);
//   const [myUser, setMyUser] = useState(null);
//   const dispatch = useDispatch();

//   // useEffect(() => {
//   //   if (isAuthenticated) {
//   //     setMyUser(user)
//   //   } else {
//   //     setMyUser(false)
//   //   }
//   // }, [isAuthenticated])
//   useEffect(() => {
//     setMyUser(user)
//   }, [user])

//   return (
//     <nav className="navigation">
//       <div className="brand-name">
//         < Navbar.Brand href="/my-react">
//           <img src={logo} width="40px" alt="logo" />
//         </Navbar.Brand>
//       </div>
//       <button
//         className="hamburger"
//         onClick={() => {
//           setIsNavExpanded(!isNavExpanded);
//         }}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           viewBox="0 0 20 20"
//           fill="gray"
//         >
//           <path
//             fillRule="evenodd"
//             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>
//       <div
//         className={
//           isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
//         }
//       >

//         <ul>

//           <img
//             className="img-navi"
//             src={logo}
//             style={{
//               width: "50px",
//               paddingBottom: "1rem"
//             }}
//             alt="LOGO"
//           >
//           </img>

//           <hr className="kreska" />
//           <li><Link to="/">Home</Link></li>
//           {/* <li>
//             <a href="/my-react">Home  </a>
//             <FaArrowRight className="FaArrowRight" />
//           </li> */}
//           <li><Link to="/sublimation">Sublimation</Link></li>
//           {/* <li>
//             <a href="/my-react/sublimation">Sublimation </a>
//             <FaArrowRight className="FaArrowRight" />
//           </li> */}
//           <li><Link to="/contact">Contact</Link></li>
//           {/* <li>
//             <a href="/my-react/contact">Contact</a>
//             <FaArrowRight className="FaArrowRight" />
//           </li> */}
//           <li><Link to="/produkty">Produkty</Link></li>
//           {/* <li>
//             <a
//               href="/my-react/produkty"
//             >
//               Produkty </a>
//             <FaArrowRight className="FaArrowRight" />
//           </li> */}

//           {myUser && (
//             <li>
//               <Link to="/checkOut">CheckOut </Link>
//               <FaArrowRight className="FaArrowRight" />
//             </li>
//           )}
//           <li>

//             <Link to="/cart">
//               <i
//                 className="fa fa-shopping-cart " style={{ fontSize: "20px" }} > <span className="cart-value"  >{amount}</span></i>

//             </Link>
//             <FaArrowRight className="FaArrowRight" />
//           </li>

//           <li style={{ color: "gray", marginTop: "0.6rem" }}>
//             {/* <button type="btn" onClick={() => logout(
//               { returnTo: window.location.origin }
//             )}>Logout</button> */}
//             {myUser ? (
//               <a onClick={() => {
//                 dispatch(clearCart());
//                 logout({ returnTo: window.location.hostname === "localhost" ? "http://localhost:3000" : "https://danielu96.github.io/my-react/" })
//               }
//               }
//               >
//                 logout <  BsFillPersonDashFill size={23} style={{ marginTop: "-3px" }} /> </a>
//             ) : (
//               <a onClick={loginWithRedirect}>login < BsFillPersonPlusFill size={23} style={{ marginTop: "-3px" }} /></a>
//             )
//             }
//             <FaArrowRight className="FaArrowRight" />
//           </li>

//           <li>
//             <button
//               className="nav-btn nav-close-btn"
//               onClick={() => {
//                 setIsNavExpanded(!isNavExpanded);
//               }}
//             >
//               <FaTimes />
//             </button>
//           </li>
//           <hr className="kreska" />
//           <div className="test">
//             <h1>Wersja testowa</h1>
//             <p>2020</p>
//           </div>
//         </ul>


//       </div>
//     </nav >
//   );
// }
