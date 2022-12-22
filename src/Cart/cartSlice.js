import { createSlice } from '@reduxjs/toolkit';
import cartItems from './cartItems';
import CartContainer from './CartContainer';

// const getLocalStorage = () => {
//     let cart = localStorage.getItem('cart')
//     if (cart) {
//         return JSON.parse(localStorage.getItem('cart'))
//     }
//     else {
//         return []
//     }
// }
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
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addItem(state, action) {
        //     const itemIndex = state.cartItems.findIndex(
        //         (item) => item.id === action.payload.id
        //     );
        //     if (itemIndex >= 0) {
        //         state.cartItems[itemIndex].quantity += 1;
        //     } else {
        //         const tempProduct = { ...action.payload, quantity: 1 };
        //         state.cartItems.push(tempProduct);
        //     }

        // },
        AddCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            )

            state.amount = amount + newItem.amount;
            // state.total = total + newItem.cena;


            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    cena: newItem.cena,
                    totalPrice: newItem.cena,
                    amount: newItem.amount,
                    availableProducts: newItem.availableProducts,

                });

            }
            else {
                // existingItem.calculateTotals++;
                // existingItem.total =
                //     (existingItem.total) + (newItem.cena);
            }
            // state.amount = state.cartItems.reduce(
            //     (total, item) => total + Number(item.cena) * Number(item.amount),
            //     0
            // );

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map
                (item => item)))

            localStorage.setItem('amount', JSON.stringify(state.amount));
            localStorage.setItem('total', JSON.stringify(state.total));


        },
        clearCart: (state) => {
            state.cartItems = [];
            state.amount = 0;
            state.total = 0;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map
                (item => item)))

            localStorage.setItem('amount', JSON.stringify(state.amount));
            localStorage.setItem('total', JSON.stringify(state.total));
        },
        removeItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);

            if (existingItem) {
                state.cartItems = state.cartItems.filter((item) =>
                    item.id !== id);
                state.amount = state.amount - existingItem.amount;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map
                (item => item)))

            localStorage.setItem('amount', JSON.stringify(state.amount));
            localStorage.setItem('total', JSON.stringify(state.total));

        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id
                === payload.id)
            cartItem.amount = cartItem.amount + 1;
            state.amount++;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map
                (item => item)))
            localStorage.setItem('amount', JSON.stringify(state.amount));
            localStorage.setItem('total', JSON.stringify(state.total));

        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id
                === payload.id)
            cartItem.amount = cartItem.amount - 1;
            state.amount--;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map
                (item => item)))

            localStorage.setItem('amount', JSON.stringify(state.amount));
            localStorage.setItem('total', JSON.stringify(state.total));
        },


        // calculateTotals: (state) => {
        //     let amount = 0;
        //     let total = 0;
        //     state.cartItems.forEach((item) => {
        //         amount += item.amount
        //         total += item.amount * item.cena
        //     })
        //     state.amount = amount
        //     state.total = total
        // }
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount
                total += item.amount * item.cena
            })
            state.amount = amount
            state.total = total

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map
                (item => item)))

            localStorage.setItem('amount', JSON.stringify(state.amount));
            localStorage.setItem('total', JSON.stringify(state.total));
        }

    },
}
);

export const { clearCart, removeItem, increase, decrease, calculateTotals, AddCart, addItem } = cartSlice.actions;
export default cartSlice.reducer;