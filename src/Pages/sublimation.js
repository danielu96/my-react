import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
const Sublimation= () => {
    const navigate = useNavigate();
    const handleOnClick = () => navigate(-1);
const [data , setData] = useState  ([]);
const apiGet = () => {
   fetch('../DATA3/data3.json')
    .then((response) => response.json())
    .then((json)=>{
        // console.log(json);
    setData(json);
    }) ;
      };
      useEffect(() => {
        apiGet(); 
    }, []);
                return (
            <React.Fragment>                               
            <div className='Contact'>     
            <h1>Sublimacja</h1>           
                    
                    {data.map((product) => (
                        <p key={product.id}>{product.description}</p>
                    ))}
                    
                    <button className='btn_my'  onClick={handleOnClick}>Wróć do poprzedniej strony </button>
                    </div>               
            </React.Fragment>                  
                );
};
export default Sublimation