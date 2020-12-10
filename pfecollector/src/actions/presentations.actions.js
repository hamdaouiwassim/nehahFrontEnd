import axios from "../helpers"
import { presentationsConstants } from "./constants";

export const getAllPresentations = () => {
    return async dispatch => {
        const res = await axios.get(`presentation/getall`);
        if ( res.status === 200 ){
            dispatch({ 
                type : presentationsConstants.GET_ALL_PRESENTATIONS_SUCCESS ,
                payload : { presentation : res.data.presentations }
             })
        }
        console.log(res.data);
    } 
}

export const getPresentation = (projetId) => {
    return async dispatch => {
        const res = await axios.get(`projet/presentation/get/`+projetId);
        if ( res.status === 200 ){
            dispatch({ 
                type : presentationsConstants.GET_PROJET_PRESENTATION_SUCCESS ,
                payload : {presentation : res.data.presentation }
             })
        }else{
            dispatch({ 
                type :  presentationsConstants.GET_PROJET_PRESENTATION_FAILURE,
                payload : res.data.error
             })

        }
    } 

}

export const addPresentation = (form) => {
    return async dispatch => {
        const res = await axios.post(`presentation/create`,form);
        if ( res.status === 200 ){
            dispatch({ 
                type : presentationsConstants.ADD_PRESENTATION_SUCCESS ,
                payload : { presentation : res.data.createdpresentation }
             })
        }else{
            dispatch({ 
                type :  presentationsConstants.ADD_PRESENTATION_FAILURE,
                payload : res.data.error
             })

        }
    } 

}

export const DeletePresentation = (presentationId) => {
    return async dispatch => {
        const res = await axios.get(`presentation/delete/`+presentationId);
        if ( res.status === 200 ){
            dispatch({ 
                type : presentationsConstants.DELETE_PRESENTATION_SUCCESS ,
                payload : { message : res.data.message }
             })
        }
        else{
            dispatch({ 
                type : presentationsConstants.DELETE_PRESENTATION_FAILURE ,
                payload : { error : res.data.error }
             })
        }
        
    } 
}