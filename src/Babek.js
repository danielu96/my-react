import React from 'react';
import Product from './Product';
import {useState, useEffect} from 'react';
import axios from 'axios'
import './sass/app.scss';
import './sass/main.min.css';
const Babek = () => {
const [data , setData] = useState  ([]);
const apiGet = () => {
   fetch('../DATA3/data.json')
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
                <div>
                    {/* <button onClick ={apiGet}>Feetch Api </button>
                     <pre>{JSON.stringify(data,null,2)}</pre>  */}
            <div>
                
                    <ul>
                    {data.map((product) => (
                        <li key={product.id}>{product.opis}{product.img}</li>
                    ))}
                    </ul>
                    </div>
                    </div>
               {/* {products} */}
              {/* <Product data={products}/> */}
              <div class="container">
    <div class="col-sm-12">
        <div class="row py-5">
                <div class="text-center">
                <h1>Kubki Imienne </h1>
            </div>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
             <img src="../Images/latte.png" class="img-fluid rounded-start" alt="..."/>
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
</div>
            </React.Fragment>
        )
}
// const API = 'https://randomuser.me/api/?results=1'
// class Apek extends React.Component {
//     state = {
//                products: []
//     }
//     componentDidMount() { 
//        fetch('../Data/data.json')
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({
//                     products: data.products
//                 })
//             })
//     }
   

    // render() {
//  const products = this.state.products.map(product => <Product key={product.id} name={product.name}  />)
        //  const products = this.state.products;
        // return (
        //     <React.Fragment>
        //        {/* {products} */}
        //       <Product data={products}/>
        //     </React.Fragment>
        // )
    // }
// }
export default Babek