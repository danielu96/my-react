import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Styles/App.css';
const Contact = ({data}) =>{
      const navigate = useNavigate();
      const handleOnClick = () => navigate(-1);
      console.log(navigate);
     return (
     
           <div className='Contact'>
               
                <h1>Kontakt</h1> 
                <p>Nawiązując do nauki Reacta </p>
                <p>Strona została wykonana w celach naukowych </p>
               
                
                <button className='btn_my'  onClick={handleOnClick}>Wróć do poprzedniej strony </button>   
                </div>
     );
 };
 export default Contact;