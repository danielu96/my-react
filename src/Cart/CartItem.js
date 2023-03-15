import React, { useState, useReducer, useEffect } from "react";
import { removeItem, increase, decrease } from "./cartSlice";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import { FaPlus, FaMinus, FaTrashRestore } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";
const CartItem = ({ id, title, amount, price, name }) => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className="cart-item">

            <div className="item_title" >  <h4>{name} </h4></div>
            <div className="item_quantity"> <input style={{ width: '300px' }} placeholder="treść nadruku" type="text"
                value={input} onChange={(e) => setInput(e.target.value)} /></div>
            {/* <div className="item8">realizacja</div> */}
            <div className="item3" >
                <p style={{ paddingRight: "7px", paddingTop: "3px", marginBottom: "14px" }}>realizacja </p>
                <DatePicker
                    style={{ width: '100px' }}
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
            <div className="item_amount">
                <button className="amount-btn" onClick={() => {
                    dispatch(increase({ id }));
                }} ><FaPlus /></button>
                {amount}
                <button className='amount-btn' onClick={() => {
                    if (amount === 1) {
                        dispatch(removeItem(id));
                        return;
                    }
                    dispatch(decrease({ id }));
                }}><FaMinus /></button>
            </div>
            <div className="item5">
                {amount * price} zł
            </div>
            <div className="item6">
                <button className='btn_remove' onClick={() => {
                    dispatch(removeItem(id));
                }}
                >  <  IoTrashBinOutline />
                </button>
            </div>
        </div>
    );
}
export default CartItem;

 // const [state] = useReducer(reducer, initialState)
    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(state.cart))
    // }, [state.cart]);


    // <button disabled={amount === availableProducts ? true : false}