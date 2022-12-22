import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from './modalSlice';
import { Link } from 'react-router-dom';


const CartContainer = () => {
    const dispatch = useDispatch();
    const { cartItems, amount, total } = useSelector((state) => state.cart);
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
                <span>TOTAL {total}</span>

                <button className='btn_my' onClick={() =>
                    dispatch(openModal())}>Clear Cart</button>

            </div>
        </>
    );
}

export default CartContainer;

{/* <span>TOTAL {totalCena.toFixed(2)}</span> */ }
