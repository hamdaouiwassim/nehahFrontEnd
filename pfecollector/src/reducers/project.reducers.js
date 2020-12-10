import { projetsConstants } from "../actions/constants";
const initialState ={
    projets : [],
    projet : {},
    error : null,
    message : ''
     
}

export default (state = initialState ,action) => {
    switch(action.type){
        case projetsConstants.GET_ALL_PROJETS_SUCCESS :
        state = {
            ...state,
            projets : action.payload.projet
        }
        break;
        case projetsConstants.ADD_NEW_PROJET_SUCCESS : 
        state = {
            ...state,
            projet : action.payload.projet,
            message : 'Projet Ajoutee avec succes'
        }
        case projetsConstants.ADD_NEW_PROJET_FAILURE : 
        state = {
            ...state,
            error : action.payload.error
        }
        case projetsConstants.GET_PROJET_SUCCESS : 
        state = {
            ...state,
            projet : action.payload.projet
        }
        case projetsConstants.GET_PROJET_FAILURE : 
        state = {
            ...state,
            error : action.payload.error
        }
        default :
        console.log("default")
         
    }
    return state;
} 