import React from "react";
import CartItem from "./FullCard";

import cartItems from "../Cart/cartItems";
const Products = ({ data }) => {

    return (
        <div className="container">

            {data.map((item) => {
                return <CartItem key={item.id}{...item} />
            })}
        </div>
    );
}

export default Products;