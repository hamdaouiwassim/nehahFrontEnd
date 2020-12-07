import { ideesConstants } from "../actions/constants";
const initialState ={
    idees : [],
    loading  : false,
    error : null 
}
const builNewIdee = ( idees , idee ) => {
    //idees.push(idee)
    
    let myidees = [];
    for(let myidee of Object.keys(idees) ){
        //console.log(myidee);
        let ide = idees[myidee];
        myidees.push(ide)
       
    }
    myidees[0].push(idee)
    return myidees;
}
export default (state = initialState ,action) => {
    switch(action.type){
        case ideesConstants.GET_ALL_IDEES_SUCCESS :
        state = {
            ...state,
            idees : action.payload.idees
        }
        break;
        case ideesConstants.ADD_NEW_IDEE_REQUEST :
            state = {
                ...state ,
                loading : true 
            }
        break;
        case ideesConstants.ADD_NEW_IDEE_SUCCESS :
            const updatedIdees = builNewIdee(state.idees,action.payload.idee)
            console.log("Updated Idees => : ")
            console.log(updatedIdees)
            state = {
                ...state ,
                idees : updatedIdees,
                loading : false 
            }
        break;
        case ideesConstants.ADD_NEW_IDEE_FAILURE :
            state = {
                ...initialState, 
            }
        break;

        default :
        console.log("default")
         
    }
    return state;
} 