import React from "react";
import { Routes, Route } from "react-router-dom";
// import "../Styles/Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 py-7">
          <img
            src="images/LOGO.png"
            style={{
              width: "70px",
             
            }}
            alt="LOGO"
          ></img>
          <h3 className="lg:text-4x1 text-3x1 md:mb-0 mb-6 lg:leading-normal  font-semibold md:w-2/5">
            <Routes>
              <Route path="/" element={<p>Strona główna</p>} />
              <Route path="/cards/:title" element={<p>Strona produktów</p>} />
              <Route path="/contact" element={<p>Strona Kontaktu</p>} />
              <Route path="/Sublimation" element={<p>Strona o Sublimacji</p>} />
            </Routes>
          </h3>
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
      </footer>
    </>
  );
};
export default Footer;
