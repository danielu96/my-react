import React from 'react';
import Product from './Product';
import {useState, useEffect} from 'react';
import axios from 'axios'
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

    //   const products = state.products;
              return (
            <React.Fragment>
                <div>
                    <button onClick ={apiGet}>Feetch Api </button>
                    {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
            <div>
            <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.name}{item.img}</li>
                 ))}
                    </ul>                            
                {/* <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                    </ul> */}
                    </div>
                    </div>
               {/* {products} */}
              {/* <Product data={products}/> */}
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

export default Apek