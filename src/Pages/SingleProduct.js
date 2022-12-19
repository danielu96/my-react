import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from './cardItems';
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, AddCart, } from "../Cart/cartSlice";



const SingleProduct = ({ id }) => {
    const dispatch = useDispatch();
    const { productTitle } = useParams();
    const [count, setCount] = useState(0);
    const product = products.find((product) => product.title ===
        productTitle);
    const { title, cena, Image, availableProducts } = product;
    const handleAdd = () => {
        dispatch(
            AddCart(

                {

                    id: Math.random(),
                    title: title,
                    cena: cena,
                    amount: count,
                    availableProducts: availableProducts,
                }
            ))
    };

    return (
        <section className="container">

            <h1>Halo</h1>
            {/* <img src={Image} /> */}
            <img className="Image" src={`${Image}`} alt="kubek czarny"></img>
            <p>{title}</p>
            <span>{cena}</span>
            <p>{availableProducts} dostępne</p>
            <button disabled={count === availableProducts ? true : false}
                className='btn_my' style={{ width: "50px" }} onClick={() => setCount((c) => c + 1)}>+</button>
            <p>{count}</p>
            <button disabled={count === 0 ? true : false} className='btn_my'
                style={{ width: "50px" }} onClick={() => setCount((c) => c - 1)}>-</button>
            <Link className=" btn" onClick={() =>
                dispatch(handleAdd(id))} to={`/Cart`}> Kup</Link>
            <Link to='/'>back to Carts</Link>
        </section>
    );
}

export default SingleProduct;