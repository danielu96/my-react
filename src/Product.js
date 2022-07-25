import React from 'react';
const Product = ({data}) => {
     
    return (
      <>
      {/* { data.map(product => <div key={product.id} name={product.name}  ></div>)} */}
      {data.map((product,index) => (
            <div className='card' key ={index}>
                <h1>{product.name}</h1>
                <p>{product.opis}</p>
      {/* <Link to={ `/cards/${card.title}`}>zobacz jeszcze coś </Link> */}
            </div>
         ))} 
      </>
    )
}
export default Product ;