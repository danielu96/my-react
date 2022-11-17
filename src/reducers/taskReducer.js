import { createReducer } from "@reduxjs/toolkit";
import { addBuy, deleteBuy, editBuy, increase, kasuj } from "../actions/taskAction";


const initialState = {
    buys: [],

    // buy: buyItem,
    total: 1,
    amount: 2,
    increase,
    kasuj
}
const taskReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addBuy, (state, action) => {
            state.buys.push(action.payload);
            // state.buys = state.buys.filter((buy) => buy.id === action.payload.id);
            // state.buys.push(action.payload.id);
        })
        .addCase(deleteBuy, (state, action) => {
            state.buys = state.buys.filter((buy) => buy.id !== action.payload.id);
        })
        .addCase(kasuj, (state, action) => {
            state.buys = state.buys.filter((buy) => buy.id !== action.payload.id);
        })
        .addCase(editBuy, (state, action) => {
            state.buys = state.buys.filter((buy) => buy.id === action.payload.id);
            state.buys.push(action.payload);
        })
        .addCase(increase, (state = initialState, action) => {
            let tempBuy = state.buys.map((buy) => {
                if (buy.id === action.payload) {
                    return { ...buy, amount: buy.amount + 1 }
                }
                return buy
            })
            return { ...state, buy: tempBuy }
        })
    // .addCase(increase, (state = initialState, action) => {
    //     state.buys = state.buys.map((buy) => {
    //         if (buy.id === action.payload.id) {
    //             return { ...state, amount: state.amount + 1 }
    //         }
    //         return state
    //     })

    // })
})

export default taskReducer;

