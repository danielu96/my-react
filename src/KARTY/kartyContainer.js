import KartyItem from './KartyItem';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";

// import { openModal } from './modalSlice';
import { fontSize } from '@mui/system';

const KartyContainer = () => {
    const dispatch = useDispatch();
    const { title } = useParams();
    const { cartItems, total, amount } = useSelector((state) => state.karty);
    if (amount < 1) {
        return (
            <h2>nie ma nic </h2>
        );
    }
    return (
        <>
            <div>
                <div style={{ fontSize: '3rem', textAlign: 'center', fontFamily: 'impact' }}>KOSZYK</div>

                <div className='container'>
                    {cartItems
                        // .filter((item) => item.title === title)
                        .map((item) => {
                            return <KartyItem key={item.id}{...item} />;
                        })}
                </div>
                <hr />
                <span>TOTAL {total.toFixed(2)}</span>

                {/* <button className='btn_my' onClick={() =>
                    dispatch(openModal())}>Clear Cart</button> */}

            </div>
        </>
    );
}

export default KartyContainer;