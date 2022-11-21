import { removeItem, increase, decrease, AddCart } from "./cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ id, title, amount, cena, quantity }) => {
    const dispatch = useDispatch()
    return (
        <div className="cart-item">
            <div className="item_title">  <h4>{title}</h4></div>
            <div className="item_cena"> <p >{cena} zł szt.</p></div>
            <div className="item_quantity"> <p>dostępne {quantity} szt.</p></div>
            <div className="item3">
                <button disabled={amount === quantity ? true : false} className="btn_cart" onClick={() => {
                    dispatch(increase({ id }));
                }}>+</button>
            </div>
            <div className="item_amount"> <p>{amount}</p></div>
            <div className="item5">
                <button className="btn_cart" onClick={() => {
                    if (amount === 1) {
                        dispatch(removeItem(id));
                        return;
                    }
                    dispatch(decrease({ id }));
                }}>-</button>
            </div>

            <div className="item6">
                <button className='btn_remove' onClick={() => {
                    dispatch(removeItem(id));
                }}
                > remove </button>
            </div>
            <div className="item7">
                <button className='btn_remove' onClick={() => {
                    dispatch(AddCart(id));
                }}
                > Add </button>
            </div>

        </div>
    );
}

export default CartItem;
