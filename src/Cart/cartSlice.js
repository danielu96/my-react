import { createSlice } from '@reduxjs/toolkit';
import cartItems from './cartItems';
import CartContainer from './CartContainer';
import CartItem from './CartItem';

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
        AddCart: (state, action) => {
            const { id, cena, title, amount, availableProducts, name, price } = action.payload;
            const existingItem = state.cartItems.find((i) => i.id === id)
            if (existingItem) {
                const tempCart = state.cartItems.map((cartItem) => {
                    if (cartItem.id === id) {

                        let newAmount = cartItem.amount + amount
                        if (newAmount > cartItem.max) {
                            newAmount = cartItem.max
                        }

                        return { ...cartItem, amount: newAmount }

                    } else {
                        return cartItem
                    }

                })
                state.cartItems = (tempCart)


            }
            else {
                let max = availableProducts
                const newItem = {
                    id: id,
                    name,
                    price,
                    amount,
                    availableProducts,
                    max,
                }
                state.cartItems.push(newItem);

            }
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
            if (cartItem.amount > cartItem.max) {
                cartItem.amount = cartItem.max
            }

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
            state.availableProducts++;
            cartItem.availableProducts = cartItem.availableProducts + 1;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map
                (item => item)))

            localStorage.setItem('amount', JSON.stringify(state.amount));
            localStorage.setItem('total', JSON.stringify(state.total));
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount
                total += item.amount * item.price
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

export const { clearCart, removeItem, increase, decrease, calculateTotals, AddCart, addItem, availableProducts } = cartSlice.actions;
export default cartSlice.reducer;


