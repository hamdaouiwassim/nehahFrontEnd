import axios from "../helpers"
import { rapportsConstants } from "./constants";

export const getAllRapports = () => {
    return async dispatch => {
        const res = await axios.get(`rapport/getall`);
        if ( res.status === 200 ){
            dispatch({ 
                type : rapportsConstants.GET_ALL_RAPPORTS_SUCCESS ,
                payload : { rapport : res.data.rapports }
             })
        }
        console.log(res.data);
    } 
}

export const getRapport = (projetId) => {
    return async dispatch => {
        const res = await axios.get(`projet/rapport/get/`+projetId);
        if ( res.status === 200 ){
            dispatch({ 
                type : rapportsConstants.GET_PROJET_RAPPORT_SUCCESS ,
                payload : {rapport : res.data.rapport }
             })
        }else{
            dispatch({ 
                type :  rapportsConstants.GET_PROJET_RAPPORT_FAILURE,
                payload : res.data.error
             })

        }
    } 

}

export const addRapport = (form) => {
    return async dispatch => {
        const res = await axios.post(`rapport/create`,form);
        if ( res.status === 200 ){
            dispatch({ 
                type : rapportsConstants.ADD_RAPPORT_SUCCESS ,
                payload : { rapport : res.data.createdrapport }
             })
        }else{
            dispatch({ 
                type :  rapportsConstants.ADD_RAPPORT_FAILURE,
                payload : res.data.error
             })

        }
    } 

}

export const DeleteRapport = (rapportId) => {
    return async dispatch => {
        const res = await axios.get(`rapport/delete/`+rapportId);
        if ( res.status === 200 ){
            dispatch({ 
                type : rapportsConstants.DELETE_RAPPORT_SUCCESS ,
                payload : { message : res.data.message }
             })
        }
        else{
            dispatch({ 
                type : rapportsConstants.DELETE_RAPPORT_FAILURE ,
                payload : { error : res.data.error }
             })
        }
        
    } 
}