// import { useSelector } from "react-redux";
// import store from "../store/store";
import CartContainer from "./CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../Cart/cartSlice";
import { useEffect } from "react";
import Modal from "./Modal";
import "../Styles/Css/Cart.css";


const Cart = () => {
    const { cartItems } = useSelector((store) => store.cart);
    const { isOpen } = useSelector((store) => store.modal);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotals());

    }, [cartItems]);

    return (
        <>
            <div className="container">
                {isOpen && <Modal />}
                <CartContainer />

            </div>
        </>
    )
}

export default Cart;