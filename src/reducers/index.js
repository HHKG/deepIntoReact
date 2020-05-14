import {combineReducers} from 'redux';//用于连接多个reducer
import postReducer from './postReducer';

export default combineReducers({
posts:postReducer
})