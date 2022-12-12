import { useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";
import { closeModal } from "./modalSlice";


const Modal = () => {
    const dispatch = useDispatch();
    return (
        <div
            className="d-container-cart"  >
            <div className="d-cart">
                remove all

                <button onClick={() => {
                    dispatch(clearCart());
                    dispatch(closeModal());
                }}>confirm</button>
                <button onClick={() => {

                    dispatch(closeModal());
                }}>cancel</button>
            </div>
        </div >);
}

export default Modal;