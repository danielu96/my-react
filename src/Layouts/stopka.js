import React from 'react';
import {Routes, Route} from 'react-router-dom';
import "../Styles/Footer.css";
const Footer = () => {
    return ( 
       <>
        <div className='footer'>
               <div >
  <img src="images/LOGO.png" width= "100px" alt="LOGO"></img>
      </div>
        <Routes>
        <Route path ="/" element = { 
<p>Jesteś na stronie główniej</p>  } />
<Route path ="/cards/:title" element = { 
<p>Jesteś na stronie produktów</p>  } /> 
<Route path ="/contact" element = { 
<p>Jesteś na stronie Kontaktu</p>  } /> 
        </Routes>
        </div>
        </>
     );
} 
export default Footer;