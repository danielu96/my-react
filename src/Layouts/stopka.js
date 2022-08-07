import React from 'react';
import {Routes, Route} from 'react-router-dom';
import "../Styles/Footer.css";
const Footer = () => {
    return ( 
       <>
        <div className='footer'>
               <div >
  <img src="images/LOGO.png" width= "70px" alt="LOGO"></img>
      </div>
        <Routes>
        <Route path ="/" element = { 
<p>Strona główna</p>  } />
<Route path ="/cards/:title" element = { 
<p>Strona produktów</p>  } /> 
<Route path ="/contact" element = { 
<p>Strona Kontaktu</p>  } /> 
<Route path ="/Sublimation" element = { 
<p>Strona o Sublimacji</p>  } /> 

        </Routes>
        </div>
        </>
     );
} 
export default Footer;