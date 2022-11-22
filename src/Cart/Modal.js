import { useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";
import { closeModal } from "./modalSlice";


const Modal = () => {
    const dispatch = useDispatch();
    return (
        <aside className="modal-container-cart" >
            <div className='modal-cart'>
                remove all
            </div>
            <button onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
            }}>confirm</button>
            <button onClick={() => {

                dispatch(closeModal());
            }}>cancel</button>
        </aside>);
}

export default Modal;