import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../Cart/cartItems'


const items = localStorage.getItem('cartItems') !== null ? JSON.parse
    (localStorage.getItem('cartItems')) : [];

const amount = localStorage.getItem('amount') !== null ? JSON.parse
    (localStorage.getItem('amount')) : 0;

const total = localStorage.getItem('total') !== null ? JSON.parse
    (localStorage.getItem('total')) : 0;



const initialState = {

    cartItems: items,
    amount: amount,
    total: total,
    isLoading: true,
}
const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {

        AddCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            )
            state.amount++
            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    cena: newItem.cena,
                    quantity: 1,
                    total: newItem.cena,
                });
            }
            else
                existingItem.amount++;

            existingItem.total =
                Number(existingItem.total) + Number(newItem.cena);

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map
                (item => item)))

            localStorage.setItem('amount', JSON.stringify(state.amount));
            localStorage.setItem('total', JSON.stringify(state.total));

        },

        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cardItems.filter((item) =>
                item.id !== itemId);
            state.amount--;


        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id
                === payload.id)
            cartItem.amount = cartItem.amount + 1;


        },

        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id
                === payload.id)
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount
                total += item.amount * item.cena
            })
            state.amount = amount
            state.total = total
        }
    },


});

export const { clearCart, removeItem, increase, decrease, calculateTotals, AddCart } = cardSlice.actions;
export default cardSlice.reducer;