import React from 'react';
import Product from './Product';
import {useState, useEffect} from 'react';
import axios from 'axios'

import './sass/app.scss';
import './sass/main.min.css';
const Apek = () => {
const [data , setData] = useState  ([]);
const apiGet = () => {
    // fetch('https://jsonplaceholder.typicode.com/todos')
//  fetch('https://randomuser.me/api/?results=1')
    fetch('../Data3/data.json')
   .then((response) => response.json())
    .then((json)=>{
        console.log(json);
    setData(json);
    }) ;
      };
      useEffect(() => {
        apiGet(); 
    }, []);
                  return (
            <React.Fragment>
                {/* <div>
                    <button onClick ={apiGet}>Feetch Api </button>
                    <pre>{JSON.stringify(data,null,2)}</pre>
            <div>
            <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.name}{item.img}</li>
                 ))}
                    </ul>                            
                </div>
                    </div> */}

<ul class="nav justify-content-end">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="{{ route('onas') }}">O nas</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="{{ route('filizanki') }}">Filiżanki</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="{{ route('metalowe_wizytowki') }}">Metalowe wizytówki</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="{{ route('nietypowe_kalendarze') }}">Nietypowe Kalendarze</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="{{ route('kubki_magiczne') }}">Kubki magiczne</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="{{ route('kubki_imienne') }}">Kubki imienne</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="{{ route('kubki') }}">Kubki</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="{{ route('podkladki') }}">Podkładki</a>

    </li>
</ul>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="image/banery/baner-2018.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src="image/banery/baner-2017.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src="image/banery/baner-2019.jpg" class="d-block w-100" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>
{/* 
<div class="container">
    <div class="col-sm-12">
        <div class="row py-5">
            
            <div class="text-center">

                <h1>Kubki z nadrukiem </h1>
            </div>
            <div class="card mb-3" >
                <div class="row g-0">
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
                </div>
            </div>
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="image/kubekmag.jpg" class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Kubki magiczne</h5>
                            <p class="card-text">Kubki zmieniające kolor pod wpływem ciepła z koloorowym nadrukiem wykonanym na życzenie klienta.</p>
                            <p class="card-text"><small class="text-muted">
                                    <a href="{{ route('kubki') }}">zobacz</a>
                                </small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3" style="max-width: 540px;">
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
            </div>


            


        </div>
    </div>
</div> */}



            </React.Fragment>
        )
}
           
export default Apek