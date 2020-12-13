import axios from "../helpers"
import { userConstants } from "./constants"
// signup user 
export const signup = (user) => {
    //console.log(user)
    return async dispatch => {
        console.log('hello from sign up')
        //dispatch({ type : userConstants.USER_REGISTER_REQUEST })
         const res = await axios.post(`/admin/signup`, {
                ...user
        })
        console.log(res.data)
        if ( res.status === 200 ){
            const { message } = res.data;
              dispatch({ 
                type : userConstants.USER_REGISTER_SUCCESS,
                payload : {
                    message
                } 
            })
        }else{
            if ( res.status === 400 ){
                //console.log('before dispatch')
                dispatch({
                    type : userConstants.USER_REGISTER_FAILURE ,
                    payload : {error : res.data.error }
                })
            }
        }
    }

}
