import { usersConstants } from "../actions/constants";
const initialState ={
    users : [],
    message : null 
     
}

export default (state = initialState ,action) => {
    switch(action.type){
        case usersConstants.GET_ALL_USERS_SUCCESS :
        state = {
            ...state,
            users : action.payload.utilisateur
        }
        break;
        case usersConstants.DELETE_USER_SUCCESS :
        state = {
            ...state,
            message : action.payload.message
        }
        break;
        
        default :
        console.log("default")
         
    }
    return state;
} 