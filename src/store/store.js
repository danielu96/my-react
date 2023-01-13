import { configureStore, createReducer } from '@reduxjs/toolkit'
import cartReducer from '../Cart/cartSlice';
import cardReducer from '../Pages/CardSlice';
import modalReducer from '../Cart/modalSlice';
// import Auth0Slice from '../Cart/Auth0Slice';
// import CardModalReducer from '../Pages/CardModalSlice';
// import kartyReducer from "../KARTY/kartySlice";


const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Auth0: Auth0Slice,
    modal: modalReducer,
    // CardModal: CardModalReducer,
    // karty: kartyReducer,

  },
});

export default store;