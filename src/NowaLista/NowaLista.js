import React, { useState, useReducer, useEffect } from "react";
import { useParams, useNavigate, useCallback } from "react-router-dom";
import DatePicker from "react-datepicker";
// import { addBuy, editBuy, deleteBuy, increase, kasuj, deleteCard } from '../actions/taskAction';
import { useDispatch, useSelector } from "react-redux";
import List from '../Pages/tasksList';
import axios from 'axios';


// import reducer from './reducer'


const NowaLista = ({ id }) => {
    // const { state, dispatch } = useReducer();
    const [count, setCount] = useState(0);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [input, setInput] = useState("");
    const [availableProducts, setAvailableProducts] = useState();
    const [calculation, setCalculation] = useState(0);
    const { title, setTitle } = useParams();
    // const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    // const [id, setId] = useState(1);
    const dispatch = useDispatch();
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

    // const deleteCardhandler = (id) => {
    //     dispatch(deleteCard({ id: id }));

    // }
    // const addBuyhandler = (id) => {
    //     dispatch(
    //         addBuy({
    //             title: (`${title}`),
    //             tekst: (`${input}`),
    //             cena: (`${calculation}`),
    //             ilosc: (`${count}`),
    //             date: (`${selectedDate}`),
    //             availableProducts: (`${availableProducts}`),

    //             id: (`${id}`),
    //         },
    //             setInput(""),
    //             setCount(0),
    //             setSelectedDate(new Date())
    //         )

    //     )
    // }
    //     const increaseBuyhandler = (id) => {
    //         dispatch(increase({
    //             id: id,


    //         }));


    // }

    useEffect(() => {
        axios.get(("/DATA2/data2.json"), {
            // axios.get(("https://rickandmortyapi.com/api/character/"), {




        })
            .then(({ data }) =>
                setPrice(data.karty[0].cena)

            );

    }, [id]);

    useEffect(() => {
        axios.get((`/DATA2/data2.json`), {

            // axios.get(("https://rickandmortyapi.com/api/character/"), {
            params: {
                title: `${title}`,
            }

        })
            .then(({ data }) => setAvailableProducts(data.karty[0].availableProducts))

    }, [title])

    useEffect(() => {

        setCalculation(() => count * price)

    }, [count]);
    const cards = useSelector((state) => state.cards.cards);

    return (
        <>
            <div className='container'>
                {

                    data.
                        slice(0, 4).map((card) => (
                            <div className='task' key={card.id} >
                                <p>{card.title}</p>
                                <span>{card.cena}</span>
                                <p>dostępne: {availableProducts} szt.</p>
                                <span>wartość zamówienia {calculation} zł </span>
                                <label style={{ width: '500px' }}>Treść nadruku <input type="text" value={input} onChange={(e) => setInput(e.target.value)} /></label>
                                {/* <button className="btn_my" onClick={() => { increaseBuyhandler(card.id) }}>dodaj</button> */}
                                <p className='amount'>{card.amount}</p>


                                {/* {count > 0 && <button className='btn_my' style={{ width: "100px" }} onClick={addBuyhandler}>DODAJ</button>} */}
                                {/* <button className='btn_my' style={{ width: "100px" }} onClick={() => { addBuyhandler(id) }}>DODAJ</button> */}
                                {/* <button className='btn_my' onClick={() => { deleteCardhandler(card.id) }} >kasuj</button> */}
                            </div>

                        ))

                }
                {/* <List /> */}
            </div>
        </>
    );
}

export default NowaLista;