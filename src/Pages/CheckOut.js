import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "../Styles/Css/Cart.css";
import { clearCart } from "../Cart/cartSlice";
import Modal from "../Cart/Modal";
import { openModal } from "../Cart/modalSlice";

const CheckOut = () => {
    const { cartItems, amount, total } = useSelector((state) => state.cart);
    const [myUser, setMyUser] = useState(null);
    const [succeeded, setSucceeded] = useState(true);
    const { isAuthenticated, logout, loginWithRedirect, user } = useAuth0()
    const { isOpen } = useSelector((state) => state.modal);
    const dispatch = useDispatch();
    const handlePay = () => {
        console.log("Dziękujemy za test")
        // setSucceeded(false);
        setTimeout(() => {
            dispatch(clearCart());
            logout({ returnTo: window.location.origin })
        }, 5000);
        return (
            <>
                <div className="container">
                </div>
            </>
        )
    };
    useEffect(() => {
        setMyUser(user)
    }, [user])
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
        <>
            <div style={{ textAlign: "center", margin: "2rem auto 2rem auto" }}><h1>Hello</h1>
                <h1> {myUser && myUser.name}</h1>
                <span>do zapłaty {total} zł</span>

                <button style={{ marginTop: "2rem" }} className="btn" onClick={() => {
                    handlePay();
                    setSucceeded(false);
                    // document.body.innerHTML = "<h1>wwwwww<h1/>"                   

                }
                }>Pay</button>
                {succeeded ? (
                    <article style={{ margin: "2rem" }}>
                        <h4></h4>
                    </article>
                ) : (
                    <article style={{ margin: "2rem" }}><h4>Dziękujemy, to jest wersja testowa strony.</h4>
                        <span>za chwilę zostaniesz wylogowany</span>
                    </article>)}

            </div>

        </>
    );
}

export default CheckOut;