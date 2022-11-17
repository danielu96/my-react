import { createReducer } from "@reduxjs/toolkit";
import { addBuy, deleteCard, editBuy, increase, kasuj } from "../actions/taskAction";


const initialState = {
    cards: [],

    // buy: buyItem,
    total: 1,
    amount: 5,
    increase,
    kasuj
}
const cardReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addBuy, (state, action) => {
            state.cards.push(action.payload);
            // state.buys = state.buys.filter((buy) => buy.id === action.payload.id);
            // state.buys.push(action.payload.id);
        })
        .addCase(deleteCard, (state, action) => {
            state.cards = state.cards.filter((card) => card.id !== action.payload.id);
        })
        .addCase(kasuj, (state, action) => {
            state.cards = state.cards.filter((card) => card.id !== action.payload.id);
        })
        .addCase(editBuy, (state, action) => {
            state.cards = state.cards.filter((card) => card.id === action.payload.id);
            state.cards.push(action.payload);
        })
        .addCase(increase, (state = initialState, action) => {
            let tempCard = state.cards.map((card) => {
                if (card.id === action.payload) {
                    return { ...card, amount: card.amount + 1 }
                }

            })
            return { ...state, card: tempCard }
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

export default cardReducer;

