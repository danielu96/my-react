import { removeItem, increase, decrease, AddCart } from "../Cart/cartSlice";
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



const Modal = ({ id, amount, quantity }) => {

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
    const [data, setData] = useState([]);
    const apiGet = () => {
        fetch("../DATA/data.json")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    };
    useEffect(() => {
        apiGet();
    }, []);
    return (
        <>
            <aside className="modal-container-cart" >
                <div className='modal-cart'>
                    remove all
                </div>
                <button onClick={() => {
                    dispatch(clearCart());
                    dispatch(closeModal());
                }}>confirm</button>
                <button onClick={() => {

                    dispatch(closeModal());
                }}>cancel</button>
            </aside>;



            <div className='container'>
                {/* <MDBBtn onClick={toggleShow}>LAUNCH DEMO MODAL</MDBBtn> */}
                {/* <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                    <MDBModalDialog>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Modal title</MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody>Modal body text goes here.</MDBModalBody>

                            <MDBModalFooter>
                                <MDBBtn color='secondary' onClick={toggleShow}>
                                    Close
                                </MDBBtn>
                                <MDBBtn>Save changes</MDBBtn>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal> */}




                {/* {

                    data.
                        filter((card) => card.title === title)
                        .map((card) => (
                            <div className='task' key={card.id} >
                                <p>{card.title}</p>
                                <span>{card.cena}</span>
                                <p>dostępne: {availableProducts} szt.</p>
                                <span>wartość zamówienia {calculation} zł </span>
                                <label style={{ width: '500px' }}>Treść nadruku <input type="text" value={input} onChange={(e) => setInput(e.target.value)} /></label>
                                <p className='amount'>{count}</p>
                            </div>
                        ))
                } */}
            </div>
            <div>
                {data
                    .filter((card) => card.title === title)
                    .map((card, id) => (
                        <div key={id}>
                            <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                                <MDBModalDialog centered>
                                    <MDBModalContent>
                                        <MDBModalHeader>
                                            <MDBModalTitle > <h1 style={{ paddingLeft: "2.1rem" }}>{card.title}</h1></MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>
                                            <div className="opis">{card.opis}</div>
                                            <img className="Image" src={`${card.Image}`} alt="kubek czarny"></img>

                                        </MDBModalBody>
                                        <MDBModalFooter>
                                            <button disabled={amount === quantity ? true : false} className="btn_cart" onClick={() => {
                                                dispatch(increase({ id }));
                                            }}>+</button>
                                            <p>{amount}</p>
                                            <button className="btn_cart" onClick={() => {
                                                if (amount === 1) {
                                                    dispatch(removeItem(id));
                                                    return;
                                                }
                                                dispatch(decrease({ id }));
                                            }}>-</button>
                                            <Link className=" btn" onClick={toggleShow} to={`/NowaLista/${card.title}`}> Kup</Link>

                                            <MDBBtn color='primary' onClick={toggleShow}>
                                                Close
                                            </MDBBtn>

                                        </MDBModalFooter>
                                    </MDBModalContent>
                                </MDBModalDialog>
                            </MDBModal>
                        </div>))}
            </div>

            {/* <div className='container'>

                {
                    data.
                        filter((card) => card.title === title)
                        .map((card, id) => (
                            <div key={id}>
                                {card.title}


                            </div>))}
            </div> */}
        </>
    );
}

export default Modal;



