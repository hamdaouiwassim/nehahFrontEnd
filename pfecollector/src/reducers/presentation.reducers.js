import { presentationsConstants } from "../actions/constants";
const initialState ={
    presentations : [],
    presentation : {},
    error : null,
    message : ''
     
}

export default (state = initialState ,action) => {
    switch(action.type){
        case presentationsConstants.GET_ALL_PRESENTATIONS_SUCCESS :
        state = {
            ...state,
            presentations : action.payload.presentation
        }
        break;
        case presentationsConstants.GET_PROJET_PRESENTATION_SUCCESS : 
        state = {
            ...state,
            presentation : action.payload.presentation
           
        }
        case presentationsConstants.GET_PROJET_PRESENTATION_FAILURE : 
        state = {
            ...state,
            error : action.payload.error
        }
        case presentationsConstants.DELETE_PRESENTATION_FAILURE : 
        state = {
            ...state,
            message : action.payload.message
        }
        case presentationsConstants.DELETE_PRESENTATION_FAILURE : 
        state = {
            ...state,
            error : action.payload.error
        }
      
        default :
        console.log("default")
         
    }
    return state;
} 