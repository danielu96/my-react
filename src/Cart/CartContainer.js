import CartItem from './CartItem';
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from './modalSlice';
import { Link, useNavigate } from 'react-router-dom';
import { grid } from '@mui/system';
import { useState } from "react";
import "../Styles/Css/Cart.css";


const CartContainer = () => {
    const [myUser, setMyUser] = useState(null)
    const navigate = useNavigate();
    const handleOnClick = () => navigate(-1);
    const dispatch = useDispatch();
    const { logout, loginWithRedirect, user } = useAuth0()
    const { cartItems, amount, total } = useSelector((state) => state.cart);
    useEffect(() => {
        setMyUser(user)
    }, [user])
    if (amount < 1) {
        return (
            <>
                <div>
                    <h1 style={{ textAlign: "center" }}>Koszyk jest pusty</h1>

                </div>
                <div style={{ margin: "2rem auto", alignContent: "center" }}>
                    <Link className="btn" to="/Products" >Kup coś</Link>
                </div>
            </>
        );
    }

    return (
        <>
            <div>
                <div style={{ fontSize: '3rem', textAlign: 'center', fontFamily: 'impact' }}>KOSZYK</div>

                <div className='container'>
                    {cartItems.map((item) => {
                        return <CartItem key={item.id}{...item} />;
                    })}
                </div>
                <hr />

                <div style={{ display: "flex", justifyContent: "space-between" }}>

                    <div style={{ marginLeft: "0" }}> <Link className="btn" to="/Products" >Continue</Link></div>
                    <div >
                        <button className='btn-clear' onClick={() =>
                            dispatch(openModal())}>Clear Cart</button>
                    </div>
                </div>
                <div className='total'>
                    <h1>TOTAL : {total} zł</h1>

                </div>
                <div className='total'>
                    {myUser ? (
                        <button className='btn-checkout' ><Link to='/CheckOut'>checkout</Link></button>

                    ) : (
                        <button className='btn-checkout' onClick={loginWithRedirect}>login</button>
                    )}


                </div>

            </div>
        </>
    );
}

export default CartContainer;

{/* <span>TOTAL {totalCena.toFixed(2)}</span> */ }
