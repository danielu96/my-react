
import store from "../store/store";

import { useDispatch, useSelector } from "react-redux";
// import { calculateTotals } from "./cartSlice";
import { useEffect } from "react";
// import Modal from "./Modal";
import "../Styles/Css/Cart.css";
import KartyContainer from "./kartyContainer";
import { calculateTotals } from "./kartySlice";


const Karty = () => {
    const { cartItems } = useSelector((store) => store.karty);
    // const { isOpen } = useSelector((store) => store.modal);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotals());

    }, [cartItems]);

    return (
        <>
            <div className="container">
                {/* {isOpen && <Modal />} */}
                <KartyContainer />

            </div>
        </>
    )
}

export default Karty;