import { createSlice } from '@reduxjs/toolkit';
import cartItems from './cartItems';
import CartContainer from './CartContainer';
import CartItem from './CartItem';
// import { availableProducts } from './cartItems';

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
// const availableProducts = localStorage.getItem('availableProducts') !== null ? JSON.parse
//     (localStorage.getItem('availableProducts')) : [];

const initialState = {
    cartItems: items,
    amount: amount,
    total: total,
    // availableProducts: availableProducts,
    isLoading: true,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddCart: (state, action) => {
            // const { id, amount, cena, title, availableProducts } = action.payload;
            const { id, cena, title, amount, availableProducts } = action.payload;
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
                // return { state, cartItems: tempCart }

            }
            else {
                let max = availableProducts
                const newItem = {
                    id: id,
                    title,
                    cena,
                    amount,
                    availableProducts,
                    max,
                }
                state.cartItems.push(newItem);
                // return { ...state, cartItems: [...state.cartItems, newItem] }
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
            // localStorage.setItem('availableProducts', JSON.stringify(state.availableProducts));

        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id
                === payload.id)
            cartItem.amount = cartItem.amount + 1;
            if (cartItem.amount > cartItem.max) {
                cartItem.amount = cartItem.max
            }

            state.amount++;
            // state.availableProducts--;
            // cartItem.availableProducts = cartItem.availableProducts - 1;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map
                (item => item)))
            localStorage.setItem('amount', JSON.stringify(state.amount));
            localStorage.setItem('total', JSON.stringify(state.total));
            // localStorage.setItem('availableProducts', JSON.stringify(state.availableProducts));

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

export const { clearCart, removeItem, increase, decrease, calculateTotals, AddCart, addItem, availableProducts } = cartSlice.actions;
export default cartSlice.reducer;


// AddCart: (state, action) => {
//     const newItem = action.payload;
//     const existingItem = state.cartItems.find(
//         (item) => item.id === newItem.id
//     )
//     const tempProduct = state.cartItems.map((existingItem) => {
//         if (existingItem.id === id) {
//             let newAmount = existingItem.amount + newItem.amount;
//             if (newAmount > existingItem.max) {
//                 newAmount = existingItem.max
//             }

//         }),
//         state.amount = amount + newItem.amount;
// if(!existingItem) {
//     state.cartItems.push({
//         id: newItem.id,
//         title: newItem.title,
//         cena: newItem.cena,
//         amount: newItem.amount,
//         max: newItem.availableProducts

//     });
// }
//     else {
//     existingItem.amount = existingItem.amount + newItem.amount;

// }








//     localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map
//     (item => item)))
//     localStorage.setItem('amount', JSON.stringify(state.amount));
// localStorage.setItem('total', JSON.stringify(state.total));


// },

// AddCart: (state, action) => {
//     const { id, amount, cart } = action.payload;
//     const tempItem = state.cartItems.find(
//         (item) => item.id === id
//     )

//     if (tempItem) {
//         const existingItem = state.cartItems.map((cartItem) => {
//             if (cartItem.id === id) {
//                 let newAmount = cartItem.amount + amount
//                 if (newAmount > cartItem.max) {
//                     newAmount = cartItem.max
//                 }
//             }
//         })

//         existingItem.amount = existingItem.amount + amount;

//     }

//     if (existingItem.amount > availableProducts) {
//         existingItem.amount = availableProducts
//     }
//     else {
//         const newItem = {
//             id: id,
//             title: cart.title,
//             cena: cart.cena,
//             amount: amount,
//             max: cart.availableProducts

//         };
//     }

//     localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map
//         (item => item)))
//     localStorage.setItem('amount', JSON.stringify(state.amount));
//     localStorage.setItem('total', JSON.stringify(state.total));
// },




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

        //         const tempCart = state.cartItems.map((cartItem) => {
        //             if (cartItem.id === id) {
        //                 let newAmount = cartItem.amount + amount
        //                 if (newAmount.amount > cartItem.max) {
        //                     newAmount.amount = cartItem.max
        //                 }
        //                 return { ...cartItem, amount: newAmount }
        //             } else {
        //                 return cartItem
        //             }
        //         })
        //         return { ...state, cartItems: tempCart }

        //     } else {
        //         const newItem = {
        //             id: id,
        //             title: product.title,
        //             cena: product.cena,
        //             amount,
        //             max: product.availableProducts,

        //         }
        //         return { ...state, cartItems: [...state.cartItems, newItem] }
        //     }


        // },
        // const tempCart = state.cartItems.map((existingItem) => {
        //     if (existingItem.id = id) {
        //         let newAmount = existingItem.amount + amount
        //     }
        // }),



        // if (existingItem) {
        //     const tempCart = state.cartItems.map((existingItem) => {
        //         if (existingItem.id === id) {
        //             let newAmount = existingItem.amount + amount;
        //             if (newAmount > existingItem.max) {
        //                 newAmount = existingItem.max
        //             }
        //             return { ...existingItem, amount: newAmount }
        //         }
        //         else {
        //             return existingItem
        //         }
        //     })
