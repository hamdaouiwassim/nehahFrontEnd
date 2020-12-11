import { evaluationsConstants } from "../actions/constants";
const initialState ={
    evaluations : [],
    evaluation : {},
    error : null,
    message : ''
     
}

export default (state = initialState ,action) => {
    switch(action.type){
        case evaluationsConstants.GET_ALL_EVALUATIONS_SUCCESS :
        state = {
            ...state,
            evaluations : action.payload.evaluation
        }
        break;
        case evaluationsConstants.GET_PROJET_EVALUATION_SUCCESS : 
        state = {
            ...state,
            evaluation : action.payload.evaluation
           
        }
        case evaluationsConstants.GET_PROJET_EVALUATION_FAILURE : 
        state = {
            ...state,
            error : action.payload.error
        }
        case evaluationsConstants.DELETE_EVALUATION_FAILURE : 
        state = {
            ...state,
            message : action.payload.message
        }
        case evaluationsConstants.DELETE_EVALUATION_FAILURE : 
        state = {
            ...state,
            error : action.payload.error
        }
      
        default :
        console.log("default")
         
    }
    return state;
} 