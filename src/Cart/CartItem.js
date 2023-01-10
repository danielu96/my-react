import { removeItem, increase, decrease } from "./cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
const CartItem = ({ id, title, amount, cena, availableProducts, max }) => {
    const dispatch = useDispatch()
    return (
        <div className="cart-item">
            <div className="item_title">  <h4>{title}</h4></div>
            <div className="item_cena"> <p >{cena} zł szt.</p></div>
            <div className="item_quantity"> <span>zamówione {amount} szt.</span></div>
            <div className="item3">
                {/* <button className="btn_cart" onClick={() => {
                    dispatch(increase({ id }));
                }}>+</button> */}
            </div>
            <div className="item_amount">
                <button className="amount-btn" onClick={() => {
                    dispatch(increase({ id }));
                }} ><FaPlus /></button>
                {amount}
                <button className='amount-btn' onClick={() => {
                    if (amount === 1) {
                        dispatch(removeItem(id));
                        return;
                    }
                    dispatch(decrease({ id }));
                }}><FaMinus /></button>



            </div>
            <div className="item5">
                {/* <button className="btn_cart" onClick={() => {
                    if (amount === 1) {
                        dispatch(removeItem(id));
                        return;
                    }
                    dispatch(decrease({ id }));
                }}>-</button> */}
            </div>
            <div className="item6">
                <button className='btn_remove' onClick={() => {
                    dispatch(removeItem(id));
                }}
                >  <  FaTrashAlt /></button>

            </div>
            <div className="item7">

                <span>cena = {amount * cena} zł</span>

            </div>
            <div>
                {/* <p>dostępne {availableProducts} szt</p> */}
            </div>
        </div>
    );
}

export default CartItem;

 // const [state] = useReducer(reducer, initialState)
    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(state.cart))
    // }, [state.cart]);


    // <button disabled={amount === availableProducts ? true : false}