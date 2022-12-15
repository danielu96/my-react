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
          {/* <button disabled={amount === availableProducts ? true : false} className="btn_cart" onClick={() => {
            dispatch(increase({ id }));
          }}>+</button> */}
          <button disabled={count === availableProducts ? true : false}
            className='btn_my' style={{ width: "50px" }} onClick={() => setCount((c) => c + 1)}>+</button>

        </div>
        <div className="item_amount">
          {/* <p>{amount}</p> */}
          <p>{count} </p>
        </div>
        <div className="item5">
          {/* <button className="btn_cart" onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}>-</button> */}
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
      {/* <div className="container">
        <p>{title}</p>
        <p>{amount} szt.</p>

        <p>dostępne {availableProducts} szt.</p>

        <span>cena = {amount * cena}</span>
        <button disabled={amount === quantity ? true : false} className="btn_cart" onClick={() => {
          dispatch(increase({ id }));
        }}>+</button>
        <button className="btn_cart" onClick={() => {
          if (amount === 1) {
            dispatch(removeItem(id));
            return;
          }
          dispatch(decrease({ id }));
        }}>-</button>
        <button className='btn_remove' onClick={() => {
          dispatch(AddCart(id));
        }}
        > Add </button>
        <span>cena = {amount * cena}</span>
      </div>
      <button className="btn_my" onClick={handleOnClick}>
        Wróć do poprzedniej strony{" "}
      </button> */}
    </>
  );
};
export default CartItem;
