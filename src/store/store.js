import { configureStore, createReducer } from '@reduxjs/toolkit'
import cartReducer from '../Cart/cartSlice';
import cardReducer from '../Pages/CardSlice';
import modalReducer from '../Cart/modalSlice';
import CardModalReducer from '../Pages/CardModalSlice';
import kartyReducer from "../KARTY/kartySlice";


const store = configureStore({
  reducer: {
    cart: cartReducer,
    card: cardReducer,
    modal: modalReducer,
    CardModal: CardModalReducer,
    karty: kartyReducer,

  },
});

export default store;