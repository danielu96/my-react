import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Css/App.css";
import React, { useEffect, useState } from "react";
import { increase, decrease, AddCart, } from "../Cart/cartSlice";
import products from '../Pages/cardItems';
import { FaPlus, FaMinus } from "react-icons/fa";

import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';



const SingleProduct = () => {
    // const { cartItems, amount, total } = useSelector((state) => state.cart);
    // const { availableProducts } = useSelector((state) => state.cart);
    const [basicModal, setBasicModal] = useState(false);
    const dispatch = useDispatch();
    const { productTitle } = useParams();
    const toggleShow = () => setCentredModal(!centredModal);
    const [centredModal, setCentredModal] = useState(false);


    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const product = products.find((product) => product.title ===
        productTitle);
    const { id, title, cena, Image, opis, availableProducts } = product;
    const handleOnClick = () => navigate(-1);
    const [amount, setAmount] = useState(1)
    const increase = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount + 1
            if (tempAmount > availableProducts) {
                tempAmount = availableProducts
            }
            return tempAmount
        })
    }
    const decrease = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount - 1
            if (tempAmount < 1) {
                tempAmount = 1
            }
            return tempAmount
        })
    }

    const handleAdd = () => {
        dispatch(
            AddCart(

                {
                    id: id,
                    // id: Math.random(),
                    title: title,
                    cena: cena,
                    amount: amount,
                    availableProducts: availableProducts,
                }
            ))
    };

    return (
        <>
            <div className="d-container-cart">
                <div className="container">

                    <MDBModalDialog centered>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle > <h1 style={{ paddingLeft: "2.1rem" }}>{title}</h1>
                                    <p style={{ paddingLeft: "2.1rem" }}>{cena} zł szt.</p>
                                    {/* <span style={{ paddingLeft: "2.1rem" }}>{availableProducts} dostępne</span> */}
                                </MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={handleOnClick}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody>
                                <div className="opis">{opis}</div>
                                <img className="Image" src={`${Image}`} alt="kubek czarny"></img>
                            </MDBModalBody>
                            <MDBModalFooter>


                                <button className='btn_my' onClick={increase}><FaPlus /></button>
                                <p>{amount}</p>
                                <button className='btn_my' onClick={decrease}><FaMinus /></button>
                                {/* <button disabled={count === availableProducts ? true : false}
                                        className='btn_my' style={{ width: "50px" }} onClick={() => setCount((c) => c + 1)}>+</button> */}
                                {/* <p>{count}</p> */}

                                {/* <button disabled={count === 0 ? true : false} className='btn_my'
                                        style={{ width: "50px" }} onClick={() => setCount((c) => c - 1)}>-</button> */}
                                {amount > 0 && <Link className=" btn" onClick={() =>
                                    dispatch(handleAdd(id))} to={`/Cart`}> Kup</Link>}
                                {/* {count > 0 && <button className='btn_my' style={{ width: "100px" }} onClick={addBuyhandler}>DODAJ</button>} */}
                                <MDBBtn color='primary' onClick={handleOnClick}>
                                    Close
                                </MDBBtn>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </div>
            </div>
        </>
    );
}

export default SingleProduct;



