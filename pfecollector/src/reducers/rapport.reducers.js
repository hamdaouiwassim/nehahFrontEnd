import { rapportsConstants } from "../actions/constants";
const initialState ={
    rapports : [],
    rapport : {},
    error : null,
    message : ''
     
}

export default (state = initialState ,action) => {
    switch(action.type){
        case rapportsConstants.GET_ALL_RAPPORTS_SUCCESS :
        state = {
            ...state,
            rapports : action.payload.rapport
        }
        break;
        case rapportsConstants.GET_PROJET_RAPPORT_SUCCESS : 
        state = {
            ...state,
            rapport : action.payload.rapport
           
        }
        case rapportsConstants.GET_PROJET_RAPPORT_FAILURE : 
        state = {
            ...state,
            error : action.payload.error
        }
        case rapportsConstants.DELETE_RAPPORT_FAILURE : 
        state = {
            ...state,
            message : action.payload.message
        }
        case rapportsConstants.DELETE_RAPPORT_FAILURE : 
        state = {
            ...state,
            error : action.payload.error
        }
      
        default :
        console.log("default")
         
    }
    return state;
} 