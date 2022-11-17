// import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'


// import { validateAuthorMiddleware } from '../middleware/validateAuthorMiddleware';
import taskReducer from '../reducers/taskReducer';
import { appReducer } from '../reducers/appReducer';
import { rootReducer } from '../reducers/rootReducer';
import { combineReducers } from '@reduxjs/toolkit';
import cardReducer from '../reducers/cardReducer';

const store = configureStore({
  reducer: { buys: taskReducer, cards: cardReducer },


});

export default store;