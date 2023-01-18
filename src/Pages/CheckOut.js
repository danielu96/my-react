import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "../Styles/Css/Cart.css";

const CheckOut = () => {
    const { cartItems, amount, total } = useSelector((state) => state.cart);
    if (amount < 1) {
        return (
            <>
                <div style={{ textAlign: "center", margin: "2rem auto 4rem auto" }}>
                    <h1 >Koszyk jest pusty</h1>
                    <div style={{ margin: "2rem auto 4rem auto", alignContent: "center" }}>
                        <Link className="btn" to="/Products" >Kup coś</Link>
                    </div>
                </div>
            </>
        );
    }
    return (
        <div style={{ textAlign: "center", margin: "2rem auto 2rem auto" }}><h1>CheckOut here</h1></div>
    );
}

export default CheckOut;