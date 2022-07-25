import React from 'react';
import { useParams , Link, useNavigate} from 'react-router-dom';
import './Styles/App.css';
import {button} from 'bootstrap'
 const FullCard = ({data}) =>{
     const {title} = useParams();
     const navigate = useNavigate();
      const handleOnClick = () => navigate(-1);
      console.log(navigate);
     return (
         <section className='full'>
            <div className='container'>
           {data.filter((card) => card.title === title)
           .map((card,index) => (
               <div  className='fullcard'key={index}>
                   <h1>{card.title}</h1>
                   <div className="opis">{card.opis}</div>
                 <img className='Image' src={`${card.Image}` }alt="..."></img> 
<button  className ='btn_my' onClick={handleOnClick}>Wróć do poprzedniej strony </button>
               </div>                  
           ))}
 </div>
         </section>
           // <div className='Contact'>
            //     <div >
            //     <h1>kontakt</h1> 
            //     <p>Nawiązując do nauki Reaacta </p>
            //     <p>Strona została wykonana w celach naukowych </p>
               
            //     </div>
            //     <button   onClick={handleOnClick}>Wróć do poprzedniej strony </button>   
     );
 };
 export default FullCard;