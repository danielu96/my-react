import { removeItem, increase, decrease, AddCart, addItem } from "../KARTY/kartySlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Styles/Css/App.css";
import React, { useEffect, useState } from "react";
import { clearCart } from "./CardSlice";
import { closeModal } from "./CardModalSlice";



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



const CartItem = ({ data, id }) => {

    const [basicModal, setBasicModal] = useState(false);
    const dispatch = useDispatch();
    const { title } = useParams();
    const toggleShow = () => setCentredModal(!centredModal);
    const [centredModal, setCentredModal] = useState(false);
    const [currentItems, setCurrentItems] = useState([]);
    const [availableProducts, setAvailableProducts] = useState();
    const [calculation, setCalculation] = useState(0);
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const handleOnClick = () => navigate(-1);
    const handleAddToCard = (card) => {
        dispatch(addItem(card));
    }
    return (
        <>
            <div className="d-container-cart">
                {data
                    .filter((card) => card.title === title)
                    .map((card, id) => (
                        <div key={id}>

                            <MDBModalDialog centered>
                                <MDBModalContent>
                                    <MDBModalHeader>
                                        <MDBModalTitle > <h1 style={{ paddingLeft: "2.1rem" }}>{card.title}</h1></MDBModalTitle>
                                        <MDBBtn className='btn-close' color='none' onClick={handleOnClick}></MDBBtn>
                                    </MDBModalHeader>
                                    <MDBModalBody>
                                        <div className="opis">{card.opis}</div>
                                        <img className="Image" src={`${card.Image}`} alt="kubek czarny"></img>

                                    </MDBModalBody>
                                    <MDBModalFooter>
                                        {/* <button className="btn_cart" onClick={() => {
                                            dispatch(increase({ id }));
                                        }}>+</button>
                                        <p>{card.amount}</p> */}

                                        {/* <button className="btn_cart" onClick={() => {
                                            if (amount === 1) {
                                                dispatch(removeItem(id));
                                                return;
                                            }
                                            dispatch(decrease({ id }));
                                        }}>-</button> */}
                                        <button className='btn_remove' onClick={() => handleAddToCard(card)}>

                                            dodaj do  </button>
                                        <button className='btn_remove' onClick={AddCart}

                                        > koszyk </button>
                                        <Link className=" btn" onClick={() =>
                                            dispatch(AddCart(id, title))} to={`/Karty`}> Kup</Link>

                                        <MDBBtn color='primary' onClick={handleOnClick}>
                                            Close
                                        </MDBBtn>
                                    </MDBModalFooter>
                                </MDBModalContent>
                            </MDBModalDialog>
                        </div>))}
            </div>
        </>
    );
}

export default CartItem;



