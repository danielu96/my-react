import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, AddCart, } from "../Cart/cartSlice";
import { increase, decrease } from "./CardSlice";
import { Link } from "react-router-dom";



const CartItem = ({ id, title, cena, amount, quantity, availableProducts }) => {

  const navigate = useNavigate();
  const handleOnClick = () => navigate(-1);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  console.log(navigate);

  const handleAdd = (id) => {
    dispatch(
      AddCart({
        id: id,
        title: title,
        cena: cena,
        quantity: quantity,
        amount: count,
        availableProducts: availableProducts,
      }
      ))
  };
  return (
    <>
      <div className="cart-item">
        <div className="item_title">  <h4>{title}</h4></div>
        <div className="item_cena"> <p >{cena} zł</p></div>
        <div className="item_quantity"> <p>dostępne {availableProducts} szt</p></div>
        <div className="item3">
          <button disabled={count === availableProducts ? true : false}
            className='btn_my' style={{ width: "50px" }} onClick={() => setCount((c) => c + 1)}>+</button>

        </div>
        <div className="item_amount">
          <p>{count} </p>
        </div>
        <div className="item5">
          <button disabled={count === 0 ? true : false} className='btn_my'
            style={{ width: "50px" }} onClick={() => setCount((c) => c - 1)}>-</button>
        </div>
        <div className="item6">
        </div>
        <div className="item7">
        </div>
        <Link className='btn_remove' onClick={() => handleAdd(id)} to={`/Cart`}>
          dodaj
        </Link>
      </div>

    </>
  );
};
export default CartItem;
