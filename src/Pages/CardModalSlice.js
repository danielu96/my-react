import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartItems from '../Cart/cartItems';

const url = "../DATA2/data2.json"

const initialState = {
    cartItems: cartItems,
    isOpen: false,
    amount: 0,
    total: 0,
};
export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
    return fetch(url)
        .then((resp) => resp.json())
        .catch((err) => console.log(err));
});

const CardModalSlice = createSlice({
    name: 'CardModal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
        },
        closeModal: (state, action) => {
            state.isOpen = false;
        },
        increase: (state, { payload }) => {
            const CardModal = state.cartItems.find((item) => item.id
                === payload.id)
            CardModal.amount = CardModal.amount + 1;
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
export const { openModal, closeModal, increase, decrease, calculateTotals } = CardModalSlice.actions;
export default CardModalSlice.reducer;