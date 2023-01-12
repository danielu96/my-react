import { useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";
import { closeModal } from "./modalSlice";


const Modal = () => {
    const dispatch = useDispatch();
    return (
        <div
            className="d-container-cart"  >
            <div className="d-cart">
                <p>  remove all</p>
                <button style={{ marginRight: "1rem" }} className="btn" onClick={() => {
                    dispatch(clearCart());
                    dispatch(closeModal());
                }}>confirm</button>
                <button style={{ marginLeft: "1rem" }} className="btn" onClick={() => {
                    dispatch(closeModal());
                }}>cancel</button>
            </div>
        </div >);
}

export default Modal;