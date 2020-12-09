import axios from "../helpers"
import { usersConstants } from "./constants";

export const getAllUsers = () => {
    return async dispatch => {
        const res = await axios.get(`utilisateur/getall`);
        if ( res.status === 200 ){
            dispatch({ 
                type : usersConstants.GET_ALL_USERS_SUCCESS ,
                payload : { utilisateur : res.data.users }
             })
        }
        else{
            dispatch({ 
                type : usersConstants.GET_ALL_USERS_SUCCESS ,
                payload : { error : res.data.error }
             })
        }
        
    } 
}

export const DeleteUser = (userId) => {

    return async dispatch => {
        const res = await axios.get(`utilisateur/delete/`+userId);
        if ( res.status === 200 ){
            dispatch({ 
                type : usersConstants.DELETE_USER_SUCCESS ,
                payload : { message : res.data.message }
             })
        }
        else{
            dispatch({ 
                type : usersConstants.DELETE_USER_FAILURE ,
                payload : { error : res.data.error }
             })
        }
        
    } 
}