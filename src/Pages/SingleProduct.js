import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Styles/Css/App.css";
import React, { useEffect, useState } from "react";
import { increase, decrease, AddCart, } from "../Cart/cartSlice";
import products from '../Pages/cardItems';




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



const SingleProduct = ({ id }) => {
    // const { cartItems, amount, total } = useSelector((state) => state.cart);

    const [basicModal, setBasicModal] = useState(false);
    const dispatch = useDispatch();
    const { productTitle } = useParams();
    const toggleShow = () => setCentredModal(!centredModal);
    const [centredModal, setCentredModal] = useState(false);
    const [currentItems, setCurrentItems] = useState([]);
    const [calculation, setCalculation] = useState(0);
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const product = products.find((product) => product.title ===
        productTitle);
    const { title, cena, Image, availableProducts, opis } = product;
    const handleOnClick = () => navigate(-1);

    const handleAdd = () => {
        dispatch(
            AddCart(

                {
                    // id: id,
                    id: Math.random(),
                    title: title,
                    cena: cena,

                    amount: count,
                    // amount: amount,
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
                                <MDBModalTitle > <h1 style={{ paddingLeft: "2.1rem" }}>{title}</h1></MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={handleOnClick}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody>
                                <div className="opis">{opis}</div>
                                <img className="Image" src={`${Image}`} alt="kubek czarny"></img>
                            </MDBModalBody>
                            <MDBModalFooter>
                                <p style={{ textAlign: "left" }}>{cena} zł</p>

                                <button disabled={count === availableProducts ? true : false}
                                    className='btn_my' style={{ width: "50px" }} onClick={() => setCount((c) => c + 1)}>+</button>
                                <p>{count}</p>
                                <button disabled={count === 0 ? true : false} className='btn_my'
                                    style={{ width: "50px" }} onClick={() => setCount((c) => c - 1)}>-</button>
                                {count > 0 && <Link className=" btn" onClick={() =>
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



