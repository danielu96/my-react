import React from 'react';
import {Link } from 'react-router-dom';

import './Styles/App.css';
 const Grid = ({data}) =>{
   return (
        <>        
       {/* <div className='box' >
            {data.map((card,index) => (
            <div className='card' key ={index}>
            <h1>{card.title}</h1>
                <p>{card.description}</p>             
                <img className="img"src={`${card.img}` }alt="..."></img> 
                <Link to= { `/cards/${card.title}`}> Zobacz</Link>
                    </div>          
         ))} 
         </div>                     */}
         <div className='container' >
            
    <div class="col-sm-12">
        <div class="row py-5">
        
            <div class="text-center">

                <h1>Kubki z nadrukiem </h1>
            </div>
            <div class="card mb-3" max-width= "540px">
            {data.map((card,index) => (
            <div className='card' key ={index}>
            <h1>{card.title}</h1>
                <p>{card.description}</p>             
                <img className="img"src={`${card.img}` }alt="..."></img> 
                <Link to= { `/cards/${card.title}`}> Zobacz</Link>
                    </div>      
                ))} 
                {/* <div class="row g-0">
                    <div class="col-md-4">
                        <img src="image/kubek1.jpg" class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Kubki z nadrukiem </h5>
                            <p class="card-text">Kubki z kolorowym nadrukiem , wykonane na życznie klienta.</p>
                            <p class="card-text"><small class="text-muted">
                                    <a href="{{ route('kubki') }}">zobacz</a></small></p>
                        </div>
                    </div>
                </div> */}
            </div>
          
            {/* <div class="card mb-3" max-width= "540px">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="image/kubekimie.jpg" class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Kubki imienne</h5>
                            <p class="card-text">Kubki imienne z koloorowym nadrukiem wykonanym na życzenie klienta.</p>
                            <p class="card-text"><small class="text-muted">
                                    <a href="{{ route('kubki') }}">zobacz</a></small></p>
                        </div>
                    </div>
                </div>
            </div>          */}
        </div>
    </div>
    </div>
            </>
     );
 };
 export default Grid;
 