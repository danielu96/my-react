import React from "react";
const Product = ({ data }) => {
  return (
    <>
      {data.map((product, index) => (
        <div className="card" key={index}>
          <h1>{product.name}</h1>
          <p>{product.opis}</p>
        </div>
      ))}
    </>
  );
};
export default Product;
