import {FETCH_POSTS} from './type';
export function fetchPosts(){
    return function(dispatch){
        fetch('http://jsonplaceholder.typicode.com/posts').then((res) => {
      return res.json()
    }).then((data) => {
        dispatch({
            type:FETCH_POSTS, //type是状态的标识，返回那个状态由type决定；
            payload:data
        })
    })
    }
}