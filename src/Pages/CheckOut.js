import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "../Styles/Css/Cart.css";


const CheckOut = () => {
    const { cartItems, amount, total } = useSelector((state) => state.cart);
    const [myUser, setMyUser] = useState(null);
    const { isAuthenticated, logout, loginWithRedirect, user } = useAuth0()
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
                <button style={{ marginTop: "2rem" }} className="btn">Pay</button>
            </div>

        </>
    );
}

export default CheckOut;