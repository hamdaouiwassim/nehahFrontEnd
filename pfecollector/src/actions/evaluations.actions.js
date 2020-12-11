import axios from "../helpers"
import { evaluationsConstants } from "./constants";

export const getAllEvaluations = () => {
    return async dispatch => {
        const res = await axios.get(`evaluation/getall`);
        if ( res.status === 200 ){
            dispatch({ 
                type : evaluationsConstants.GET_ALL_EVALUATIONS_SUCCESS ,
                payload : { evaluation : res.data.evaluations }
             })
        }
        console.log(res.data);
    } 
}

export const getEvaluation = (projetId) => {
    return async dispatch => {
        const res = await axios.get(`projet/evaluation/get/`+projetId);
        if ( res.status === 200 ){
            dispatch({ 
                type : evaluationsConstants.GET_PROJET_EVALUATION_SUCCESS ,
                payload : {evaluation : res.data.evaluation }
             })
        }else{
            dispatch({ 
                type :  evaluationsConstants.GET_PROJET_EVALUATION_FAILURE,
                payload : res.data.error
             })

        }
    } 

}

export const addEvaluation = (form) => {
    return async dispatch => {
        const res = await axios.post(`evaluation/create`,form);
        if ( res.status === 200 ){
            dispatch({ 
                type : evaluationsConstants.ADD_EVALUATION_SUCCESS ,
                payload : { evaluation : res.data.createdevaluation }
             })
        }else{
            dispatch({ 
                type :  evaluationsConstants.ADD_EVALUATION_FAILURE,
                payload : res.data.error
             })

        }
    } 

}

export const DeleteEvaluation = (evaluationId) => {
    return async dispatch => {
        const res = await axios.get(`evaluation/delete/`+evaluationId);
        if ( res.status === 200 ){
            dispatch({ 
                type : evaluationsConstants.DELETE_EVALUATION_SUCCESS ,
                payload : { message : res.data.message }
             })
        }
        else{
            dispatch({ 
                type : evaluationsConstants.DELETE_EVALUATION_FAILURE ,
                payload : { error : res.data.error }
             })
        }
        
    } 
}