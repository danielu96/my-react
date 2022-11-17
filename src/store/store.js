// import { applyMiddleware } from 'redux';
import { configureStore, createReducer } from '@reduxjs/toolkit'


// import { validateAuthorMiddleware } from '../middleware/validateAuthorMiddleware';
import taskReducer from '../reducers/taskReducer';
import { appReducer } from '../reducers/appReducer';
import { rootReducer } from '../reducers/rootReducer';
import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../Cart/cartSlice';
import modalReducer from '../Cart/modalSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },


});

export default store;