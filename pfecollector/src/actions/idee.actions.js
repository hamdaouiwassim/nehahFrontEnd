import axios from "../helpers"
import { ideesConstants } from "./constants";

export const getIdee = (ideeId) => {
    return async dispatch => {
        const res = await axios.get(`idee/`+ideeId);
        if ( res.status === 200 ){ // succes de chargements des idees 
            dispatch({
                type : ideesConstants.GET_IDEE_SUCCESS ,
                payload : { idee : res.data.idee }
            })
        }else{ // echec de chargements des idees
            dispatch({
                 type : ideesConstants.GET_IDEE_FAILURE ,
                 payload : { error : res.data.error }
            })
        }


    }
}

export const getAllIdees = () => {
    return async dispatch => {
        dispatch({ type : ideesConstants.GET_ALL_IDEES_REQUEST })
        const res = await axios.get(`idee/getall`);
        console.log("data here");
        console.log(res.data);
        if ( res.status === 200 ){ // succes de chargements des idees 
            const  ideesList   = res.data;
            console.log("List des idees ")
            console.log(ideesList)
            dispatch({
                type : ideesConstants.GET_ALL_IDEES_SUCCESS ,
                payload : { idees : ideesList }
            })
        }else{ // echec de chargements des idees
            dispatch({
                 type : ideesConstants.GET_ALL_IDEES_FAILURE ,
                 payload : { error : res.data.error }
            })
        }
    } 
}

export const addIdee = (form) => {
    return async dispatch => {
        dispatch({ type : ideesConstants.ADD_NEW_IDEE_REQUEST })
        const res = await axios.post(`/idee/create`,form)
        if ( res.status === 201 ){
            dispatch({ 
                type : ideesConstants.ADD_NEW_IDEE_SUCCESS ,
                payload : {idee : res.data.createdidee }
             })
        }else{
            dispatch({ 
                type : ideesConstants.ADD_NEW_IDEE_FAILURE ,
                payload : res.data.error
             })

        }
        console.log("add idee function")
        console.log(res)
    }

} 

export const validateByAdmin = (ideeId) => {
    return async dispatch => {
        dispatch({ type : ideesConstants.ADD_NEW_IDEE_REQUEST })
        const res = await axios.get(`/idee/validate/`+ideeId)
        if ( res.status === 200 ){
            dispatch({ 
                type : ideesConstants.VALIDATE_IDEE_SUCCESS ,
                payload : {message : res.data.message }
             })
        }else{
            dispatch({ 
                type : ideesConstants.VALIDATE_IDEE_FAILURE ,
                payload : res.data.error
             })

        }
        console.log("add idee function")
        console.log(res)
    }
} 

export const DeleteIdee = (ideeId) => {
    return async dispatch => {
        const res = await axios.get(`idee/delete/`+ideeId);
        if ( res.status === 200 ){
            dispatch({ 
                type : ideesConstants.DELETE_IDEE_SUCCESS ,
                payload : { message : res.data.message }
             })
        }
        else{
            dispatch({ 
                type : ideesConstants.DELETE_IDEE_FAILURE ,
                payload : { error : res.data.error }
             })
        }
        
    } 
}


