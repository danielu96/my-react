
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useCallback } from "react-router-dom";
import "../Styles/Css/App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import axios from 'axios';
import { Prev } from 'react-bootstrap/esm/PageItem';
import List from './tasksList';
import { useDispatch } from "react-redux";
import NowaLista from '../NowaLista/NowaLista';
// import { ADD, addTask, DELETE, editTask } from '../actions/appActions';
// import { addBuy, editBuy, increase, amount } from '../actions/taskAction'
// import { faStepBackward } from '@fortawesome/free-solid-svg-icons';

function Zakupy({ data


}
) {
    const { title, setTitle } = useParams();
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    const [price, setPrice] = useState(0);
    const [id, setId] = useState(1);
    const [availableProducts, setAvailableProducts] = useState();
    const handleOnClick = () => navigate(-1);
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [TotalPrice, setTotalPrice] = useState(0);

    const dispatch = useDispatch();

    //     const tastObject = {
    //         title: title,
    //         id,
    //         cena
    //     };
    //     id
    //         ? dispatch(editTask(taskObject)) :
    //         dispatch(addTask(taskObject));
    //     if (id) {
    //         useCallback();

    //     }

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

    useEffect(() => {
        // const TotalPrice = price + calculation
        setTotalPrice(() => `${calculation}` + `${price}`);
    }, [price, calculation])

    const increase = (id) => {
        dispatch(increase({
            id: id,
            amount: (`${count}`),
        }));


    }

    // const addBuyhandler = () => {
    //     dispatch(
    //         addBuy({
    //             title: (`${title}`),
    //             tekst: (`${input}`),
    //             cena: (`${calculation}`),
    //             ilosc: (`${count}`),
    //             date: (`${selectedDate}`),
    //             availableProducts: (`${availableProducts}`),
    //             id: Math.random(),
    //         },
    //             setInput(""),
    //             setCount(0),
    //             setSelectedDate(new Date())
    //         )

    //     )
    // }
    // const editBuyhandler = (id) => {
    //     dispatch(
    //         editBuy({
    //             id: id,
    //             title: (`${title}`),
    //             // tekst: (`${tekst}`),


    //         }));

    // }


    // const [karty, setKarty] = useState([])
    // useEffect(() => {
    //     axios.get((`/DATA3/data3.json/${title}`), {
    //         params: {
    //             title: `${title}`,
    //         }
    //     })
    //         .then(({ data }) => setAvailableProducts(data.karty[0].availableProducts))

    // }, [title])


    // axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)


    // .then(res => {
    //     console.log(res)
    //     setKarty(res.data)
    // })
    // .catch(err => {
    //     console.log(err)

    // })



    return (
        <>

            <div className='container'>

                {data

                    .slice(0, 3).map((card, index) => (
                        <div className='task' key={index} >
                            <h2>{card.title}</h2>
                            <p>Ilość: {count} </p>
                            <p>{card.cena} zł szt.</p>
                            <p>dostępne: {availableProducts} szt.</p>
                            <span>wartość zamówienia {calculation} zł </span>
                            <label style={{ width: '500px' }}>Treść nadruku <input type="text" value={input} onChange={(e) => setInput(e.target.value)} /></label>
                            {/* <span>TOTAL{calculation * card.cena}</span> */}
                            <label >Do kiedy zrobić : </label>

                            <DatePicker
                                selected={selectedDate}
                                onChange={date => setSelectedDate(date)}
                                dateFormat='dd/MM/yyyy'
                                minDate={new Date()}
                                filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                                // isClearable
                                showYearDropdown
                                scrollableMonthYearDropdown
                            />
                            <div className='task'>
                                <button disabled={count === availableProducts ? true : false} className='btn_my' style={{ width: "50px" }} onClick={() => setCount((c) => c + 1)}>+</button>
                                <button disabled={count === 0 ? true : false} className='btn_my' style={{ width: "50px" }} onClick={() => setCount((c) => c - 1)}>-</button>
                                {/* {count > 0 && <button className='btn_my' style={{ width: "100px" }} onClick={addBuyhandler}>DODAJ</button>} */}
                                <div>{amount}</div>
                                <button className='btn_my' onClick={() => increase(card.id)}>dodawaj</button>
                                {/* <button className='btn_my' onClick={() => editBuyhandler(card.id)}>edytuj</button> */}
                                {/* <button className='btn_my' style={{ width: "100px" }} onClick={() => dispatch({ type: "DELETE" })}>kasuj</button> */}
                            </div>
                        </div>
                    ))}








                {/* <div><input type='text' onChange={e => (e.target.value)}
                />
                    <div>{karty.title}{karty.cena}</div>
                    <ul>{posts.map(post => (
                        <li key={post.id}>{post.title}</li>))}</ul>
                </div> */}


                <h1 style={{ textAlign: "center", fontWeight: 600 }}>Zamówienia</h1>
                {data
                    .filter((card) => card.title === title)
                    .map((card, index) => (
                        <div className='task' key={index} >
                            <h2>{card.title}</h2>
                            <p>Ilość: {count} </p>
                            <p>{card.cena} zł szt.</p>
                            <p>dostępne: {availableProducts} szt.</p>
                            <span>wartość zamówienia {calculation} zł </span>
                            <label style={{ width: '500px' }}>Treść nadruku <input type="text" value={input} onChange={(e) => setInput(e.target.value)} /></label>
                            {/* <span>TOTAL{calculation * card.cena}</span> */}
                            <label >Do kiedy zrobić : </label>

                            <DatePicker
                                selected={selectedDate}
                                onChange={date => setSelectedDate(date)}
                                dateFormat='dd/MM/yyyy'
                                minDate={new Date()}
                                filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                                // isClearable
                                showYearDropdown
                                scrollableMonthYearDropdown
                            />
                        </div>
                    ))}
                <div className='task'>
                    <button disabled={count === availableProducts ? true : false} className='btn_my' style={{ width: "50px" }} onClick={() => setCount((c) => c + 1)}>+</button>
                    <button disabled={count === 0 ? true : false} className='btn_my' style={{ width: "50px" }} onClick={() => setCount((c) => c - 1)}>-</button>
                    {/* {count > 0 && <button className='btn_my' style={{ width: "100px" }} onClick={addBuyhandler}>DODAJ</button>} */}
                    <div>{amount}</div>
                    {/* <button className='btn_my' onClick={() => increase(id)}>dodawaj</button> */}
                    {/* <button className='btn_my' style={{ width: "100px" }} onClick={() => dispatch({ type: "DELETE" })}>kasuj</button> */}
                </div>
                <div style={{ margin: '2rem 0 1rem 0' }}><span>TOTAL {TotalPrice} zł</span></div>

                <hr></hr>
                {/* <List /> */}

                <hr></hr>

                <button className="btn_my" style={{ width: "200px" }} onClick={handleOnClick}>
                    Wróć do poprzedniej strony{" "}
                </button>
            </div>

        </>
    )
};


export default Zakupy;