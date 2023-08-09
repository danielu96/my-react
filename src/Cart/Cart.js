import CartContainer from "./CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../Cart/cartSlice";
import { useEffect } from "react";
import Modal from "./Modal";
import "../Styles/Css/Cart.css";

const Cart = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const { isOpen } = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotals());

    }, [cartItems]);

    return (
        <>
            <div style={{ minHeight: "70vh", margin: "3rem auto" }} >

                {isOpen && <Modal />}
                <CartContainer />
            </div>
        </>
    )
}

export default Cart;

