import { color } from "@mui/system";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "../Styles/Css/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div style={{ textAlign: "center", color: 'gray' }}>
          {/* <img
            src="images/LOGO2.png"
            style={{
              width: "50px",
            }}
            alt="LOGO"
          ></img> */}
          Copyright: &copy; 2023 - DK
        </div>
        {/* <span style={{ fontFamily: "-moz-initial" }}>Copyright: &copy; 2023 - DK */}
        {/* <Routes>
            <Route path="/" element={<p>Strona główna</p>} />
            <Route path="/cards/:title" element={<p>Strona produktów</p>} />
            <Route path="/contact" element={<p>Strona Kontaktu</p>} />
            <Route path="/Sublimation" element={<p>Strona o Sublimacji</p>} />
            <Route path="/Formularz" element={<p>Darmowy kubek</p>} />
          </Routes> */}
        {/* </span> */}
      </div >
    </>
  );
};
export default Footer;
