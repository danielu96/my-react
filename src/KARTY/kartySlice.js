import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../Cart/cartItems';

// import CartContainer from './CartContainer';

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
}
const kartySlice = createSlice({
    name: 'karty',
    initialState,
    reducers: {
        addItem(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1;
            } else {
                const tempProduct = { ...action.payload, quantity: 1 };
                state.cartItems.push(tempProduct);
            }

        },
        // AddCart: (state, action) => {

        //     const itemId = action.payload;
        //     const { id, title, amount } = action.payload;
        //     state.cartItems = state.cartItems.find((item) =>
        //         item.id === itemId);
        //     const newItem = {
        //         id: id,
        //         title: title,
        //         amount: amount,
        //     }
        //     return { newItem }
        //     state.cartItems.push(action.payload);
        // },
        // addItem(state, action) {
        //     const newItem = action.payload;
        //     const { id, title, cena, card } = action.payload;
        //     const tempItem = state.data.find(
        //         (item) => item.id === newItem.id

        //     );
        //     state.total++;
        //     state.cartItems.push({
        //         id: newItem.id,
        //         title: card.title,
        //         quantity: 1,
        //     })
        // },
        // addItem: (state, action) => {
        //     const newItem = action.payload;

        //     const existingItem = state.cartItems.find(
        //         (item) => item.id === newItem.id
        //     );
        //     state.amount++;

        //     if (!existingItem) {
        //         state.cartItems.push({
        //             id: newItem.id,
        //             title: newItem.title,

        //             cena: newItem.cena,

        //             quantity: 1,
        //             totalCena: newItem.cena,

        //         });
        //         existingItem.quantity++;
        //     }
        //     else {
        //         existingItem.amount++;
        //         existingItem.total =
        //             Number(existingItem.total) + Number(newItem.cena);
        //     }
        //     state.totalAmount = state.cartItems.reduce(
        //         (total, item) => total + Number(item.cena) * Number(item.quantity),
        //         0
        //     );




        // },

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
        },

    },


});
// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals, AddCart, addItem } = kartySlice.actions;
export default kartySlice.reducer;