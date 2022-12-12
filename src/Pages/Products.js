import React from "react";
import CartItem from "./FullCard";
import cartItems from "../Cart/cartItems";
const Products = () => {
    return (
        <div className="container">

            {cartItems.map((item) => {
                return <CartItem key={item.id}{...item} />
            })}
        </div>
    );
}

export default Products;