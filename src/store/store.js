import { configureStore, createReducer } from '@reduxjs/toolkit'
import cartReducer from '../Cart/cartSlice';
import modalReducer from '../Cart/modalSlice';
import productsSlice from '../Slices/productSlice';
import userSlice from '../Slices/userSlice'


const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsSlice,
    modal: modalReducer,
    user: userSlice,

  },
});

export default store;