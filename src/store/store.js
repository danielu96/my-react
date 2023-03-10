import { configureStore, createReducer } from '@reduxjs/toolkit'
import cartReducer from '../Cart/cartSlice';
import modalReducer from '../Cart/modalSlice';
import productReducer from '../Slices/productSlice';
// import userSlice from '../Slices/userSlice'


const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    modal: modalReducer,
    // user: userSlice,

  },
});

export default store;