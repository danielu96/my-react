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
        setTimeout(() => {
            dispatch(clearCart());
            logout({ returnTo: window.location.origin })
        }, 5000);
        return (
            <>
                <div >
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
                <div style={{ minHeight: "75vh", margin: "2rem auto 2rem auto", textAlign: "center", justifyContent: "space-between" }}>
                    <h1 >Koszyk jest pusty</h1>
                    <div >
                        <Link className="btn" style={{ width: "150px", margin: "2rem auto" }} to="/Produkty" >Kup coś</Link>
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <div style={{ minHeight: "75vh", textAlign: "center", margin: "2rem auto 2rem auto" }}><h1>Hello</h1>
                <h1> {myUser && myUser.name}</h1>
                <span>do zapłaty {total} zł</span>
                <button style={{ marginTop: "2rem" }} className="btn" onClick={() => {
                    handlePay();
                    setSucceeded(false);
                    // document.body.innerHTML = "<h1>wwwwww<h1/>"              
                }
                }>Pay</button>
                {succeeded ? (
                    <article style={{ margin: "2rem " }}>
                        <h4></h4>
                    </article>
                ) : (
                    <article style={{ margin: "2rem" }}><h4><strong>Nic nie płacisz</strong>, to jest wersja testowa strony.</h4>
                        <span>za chwilę zostaniesz wylogowany</span>
                    </article>)}

            </div>

        </>
    );
}

export default CheckOut;