import axios from 'axios';
import { FETCH_USER } from './types'

// export const fetchUser = () =>{
// //    const request = axios.get('/api/current_user');
// //    return {
// //        type: FETCH_USER,
// //        payload: request

// //    }

// return function  (dispatch) {
//     axios.get('/api/current_user')
//     .then(res => dispatch ({
    
//         type: FETCH_USER ,
//         payload: {"hi" :"i"}}
//     )
    
// )
// }

// }


export const fetchUser = () => async dispatch=>{


//     await axios.get('/api/current_user')
//     .then(res => dispatch ({
    
//         type: FETCH_USER ,
//         payload: res}
//     )
    
// )
const res = await axios.get('/api/current_user');
console.log("client response" , 455)
dispatch ({type: FETCH_USER , payload: res})


}

export const handleToken = (token) =>async dispatch=>{


    const res = await axios.post('/api/stripe' ,token);
    console.log("client response" , 455)
    dispatch ({type: FETCH_USER , payload: res.data})
    
    
    }