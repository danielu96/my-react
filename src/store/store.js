// import { applyMiddleware } from 'redux';
import { configureStore, createReducer } from '@reduxjs/toolkit'


// import { validateAuthorMiddleware } from '../middleware/validateAuthorMiddleware';


import cartReducer from '../Cart/cartSlice';
import modalReducer from '../Cart/modalSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },


});

export default store;