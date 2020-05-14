import {FETCH_POSTS} from '../actions/type';
const initialState={
    items:[]
}
// reducer的作用，返回新的状态
export default function(state=initialState,action){
    console.log('reducers');
    switch(action.type){
        case FETCH_POSTS:
        return {
            ...state, //被返回的新状态
            items:action.payload
        }
        default:
            return state;
    }
}