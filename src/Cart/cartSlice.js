import { createSlice } from '@reduxjs/toolkit';
import cartItems from './cartItems';
import CartContainer from './CartContainer';

const initialState = {
    cartItems: cartItems,
    amount: 1,
    total: 2,
    isLoading: true,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddCart: (state, action) => {
            state.cartItems = [];
            state.cartItems.push(action.payload);
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