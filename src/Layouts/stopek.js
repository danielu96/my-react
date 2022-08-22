import React from "react";
import { Routes, Route } from "react-router-dom";
import "../Styles/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <img
            src="images/LOGO.png"
            style={{
              width: "80px",
            }}
            alt="LOGO"
          ></img>
        </div>
        <span>
          <Routes>
            <Route path="/" element={<p>Strona główna</p>} />
            <Route path="/cards/:title" element={<p>Strona produktów</p>} />
            <Route path="/contact" element={<p>Strona Kontaktu</p>} />
            <Route path="/Sublimation" element={<p>Strona o Sublimacji</p>} />
          </Routes>
        </span>
        {/* <div>
      <input
        type="text"
        placeholder="dupa"
        className="sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2"
      />
      <button className="bg-blue-400 hover:bg-blue-500 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full">
        NAPISZ
      </button>
    </div> */}
      </div>
    </>
  );
};
export default Footer;
