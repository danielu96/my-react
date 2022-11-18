// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
// import moment from "moment";
// import { deleteBuy, editBuy, increase } from '../actions/taskAction'
// // import { editBuy } from '../actions/taskAction'
// import { DELETE } from '../actions/appActions';
// import { useParams, useNavigate, useCallback } from "react-router-dom";
// import DatePicker from "react-datepicker";



// const List = ({ id, amount }) => {

//     const [data, setData] = useState([]);
//     const apiGet = () => {
//         fetch("../DATA/data.json")
//             .then((response) => response.json())
//             .then((data) => {
//                 setData(data);
//             });
//     };
//     useEffect(() => {
//         apiGet();
//     }, []);

//     // const [amount, setAmount] = useState(0);
//     // const [id, setId] = useState(1);

//     const { title } = useParams();
//     const dispatch = useDispatch();

//     const deleteBuyhandler = (id) => {
//         dispatch(deleteBuy({ id: id }));

//     }
//     const editBuyhandler = (id) => {
//         dispatch(
//             editBuy({
//                 id: id,
//                 title: (`${title}`),
//                 // tekst: (`${tekst}`),


//             }));

//     }
//     const increaseBuyhandler = (id) => {
//         dispatch(increase({
//             id: id,

//         }));


//     }
//     const buys = useSelector((state) => state.buys.buys);
//     const buysTable = buys.map((buy) => (
//         <ul className='task' key={buy.id}>
//             <li>{buy.title}</li>
//             <span>{buy.ilosc} szt.</span>
//             <span>nadruk: {buy.tekst}</span>
//             <p>{buy.cena} zł</p>
//             {(`${buy.date}`) > (`${buy.selectedDate} `) ? false : <span style={{ fontWeight: "bold" }}> termin nie dostępny</span>}
//             < p > dostawa: {moment(buy.date).format("DD/MM/YYYY")} </p>
//             <button className='btn_my' onClick={() => deleteBuyhandler(buy.id)}>kasuj</button>
//             <button className='btn_my' onClick={() => editBuyhandler(buy.id)}>edytuj</button>
//             <button className="btn_my" onClick={() => { increaseBuyhandler(buy.id) }}>dodaj</button>
//             <p className='amount'>{amount}</p>
//         </ul>))
//     return (
//         <>
//             {
//                 <div className='task'>Kupiłeś
//                     <p> {buysTable}

//                     </p>

//                 </div>
//                 // tasks.map((task) => (
//                 //     <div className='task' key={task.id}>
//                 //         <h3>{task.title}</h3>
//                 //         <p>Ilość: {task.ilosc}</p>
//                 //         <span>cena {task.cena} zł. </span>
//                 //         <p>Nadruk: {task.tekst} </p>

//                 //         <button className='btn_my' style={{ float: 'none' }} onClick={() => ADD(zrobic.id)}>edycja</button>
//                 //         <button className='btn_my' style={{ float: 'none' }} onClick={() => DELETE(zrobic.id)}>kasuj</button>
//                 //         {(`${zrobic.date}`) > (`${selectedDate} `) ? false : <span style={{ fontWeight: "bold" }}> termin nie dostępny</span>}
//                 //         < p > dostawa: {moment(zrobic.date).format("DD/MM/YYYY")} </p>

//                 //     </div>

//                 // )
//                 // )
//             }

//         </>
//     );
// }
// export default List;

