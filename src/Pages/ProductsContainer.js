import React from "react";

import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from "./CardSlice";
import { useEffect } from "react";

// import cartItems from "../Cart/cartItems";
import CartItem from "./FullCard";
const ProductsContainer = () => {
    const { cardItems, totalQuantity, totalAmount } = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotals());

    }, [cardItems]);

    if (totalAmount < 1) {
        return (
            <h2>nie ma nic </h2>
        );
    }

    return (
        <div>



            {cardItems.map((item) => {
                return <CartItem key={item.id}{...item} />



            })}
            <span>TOTAL {totalQuantity}</span>
        </div>
    );
}

export default ProductsContainer;