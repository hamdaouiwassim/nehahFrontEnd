import { ideesConstants } from "../actions/constants";
const initialState ={
    idees : [

    ]
}
export default (state = initialState ,action) => {
    switch(action.type){
        case ideesConstants.GET_ALL_IDEES_SUCCESS :
        state = {
            ...state,
            idees : action.payload.idees
        }
        break;
         
    }
    return state;
} 