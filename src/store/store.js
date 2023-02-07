import { configureStore, createReducer } from '@reduxjs/toolkit'
import cartReducer from '../Cart/cartSlice';
import cardReducer from '../Pages/CardSlice';
import modalReducer from '../Cart/modalSlice';
import productsReducer from '../Slices/productSlice';


const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    modal: modalReducer,
  },
});

export default store;