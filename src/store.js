import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState={};
const middleware=[thunk];//中间件

// 获取新的state或者计算新的state的过程，叫reducer;
export const store=createStore(rootReducer,initialState,applyMiddleware(...middleware));