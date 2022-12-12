import React, { useEffect, useState } from "react";
import { removeItem, increase, decrease, AddCart } from "./kartySlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

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
const KartyItem = ({ id, title, amount, cena, quantity }) => {

    const { cartItems, subTotal } = useSelector((state) => state.karty);
    const dispatch = useDispatch()
    const toggleShow = () => setCentredModal(!centredModal);
    const [centredModal, setCentredModal] = useState(false);
    const navigate = useNavigate();
    const handleOnClick = () => navigate(-1);

    return (
        <>
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
                <span>cena = {amount * cena}</span>

            </div>

            {/* <div className="d-container-cart">
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
                                        <button className="btn_cart" onClick={() => {
                                            dispatch(increase({ id }));
                                        }}>+</button>
                                        <p>{card.amount}</p>

                                        <button className="btn_cart" onClick={() => {
                                            if (amount === 1) {
                                                dispatch(removeItem(id));
                                                return;
                                            }
                                            dispatch(decrease({ id }));
                                        }}>-</button>
                                        <Link className=" btn" onClick={toggleShow} to={`/NowaLista/${card.title}`}> Kup</Link>
                                        <MDBBtn color='primary' onClick={handleOnClick}>
                                            Close
                                        </MDBBtn>
                                    </MDBModalFooter>
                                </MDBModalContent>
                            </MDBModalDialog>
                        </div>

                    )
                    )

                }
            </div> */}



        </>

    );
}

export default KartyItem;
