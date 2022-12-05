import React from "react";

import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from "./CardSlice";
import { useEffect } from "react";

// import cartItems from "../Cart/cartItems";
import CartItem from "./FullCard";
const Products = () => {
    const { cardItems, total, amount } = useSelector((store) => store.card);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotals());

    }, [cardItems]);

    if (amount < 1) {
        return (
            <h2>nie ma nic </h2>
        );
    }

    return (
        <div>



            {cardItems.map((item) => {
                return <CartItem key={item.id}{...item} />



            })}
            <span>TOTAL {total}</span>
        </div>
    );
}

export default Products;