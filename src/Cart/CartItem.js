import { removeItem, increase, decrease } from "./cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ id, title, amount, cena, quantity }) => {
    const dispatch = useDispatch()
    return (
        <div className="task">
            <h4>{title}</h4>
            <p>{cena}</p>
            <button className='btn_my' onClick={() => {
                dispatch(removeItem(id));
            }}
            >
                remove
            </button>
            <button className="btn_my" onClick={() => {
                dispatch(increase({ id }));
            }}>Add</button>
            <span>{amount}</span>
            <button className="btn_my" onClick={() => {
                if (amount === 1) {
                    dispatch(removeItem(id));
                    return;
                }
                dispatch(decrease({ id }));
            }}>decr</button>

        </div>
    );
}

export default CartItem;
