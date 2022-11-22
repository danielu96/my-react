import { createSlice } from '@reduxjs/toolkit';
import cartItems from './cartItems';
import CartContainer from './CartContainer';

const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isLoading: true,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddCart: (state, action) => {
            // state.cartItems = [];
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) =>
                item.id === itemId);
            // state.cartItems.push(action.payload);
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) =>
                item.id !== itemId);

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
// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals, AddCart } = cartSlice.actions;
export default cartSlice.reducer;