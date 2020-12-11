import axios from "../helpers"
import { commentairesConstants } from "./constants";

export const getAllCommentaires = () => {

    return async dispatch => {
        //dispatch({ type : commentairesConstants.GET_ALL_COMMENTAIRES_REQUEST })
        const res = await axios.get(`commentaire/getall`);
       
        //console.log("data here");
        console.log(res.data);
        if ( res.status === 200 ){ // succes de chargements des idees 
            dispatch({
                type : commentairesConstants.GET_ALL_COMMENTAIRES_SUCCESS ,
                payload : { commentaire : res.data.commentaires }
            })
           
        }else{ // echec de chargements des commentaires
            dispatch({
                 type : commentairesConstants.GET_ALL_COMMENTAIRES_FAILURE ,
                 payload : { error : res.data.error }
            })
        }
    } 
}

export const getCommentsByProjets = (projetId) => {
    return async dispatch => {
        //dispatch({ type : commentairesConstants.GET_ALL_COMMENTAIRES_REQUEST })
        const res = await axios.get(`/projet/commentaires/`+projetId);
        console.log(res.data);
        if ( res.status === 200 ){ // succes de chargements des idees 
            dispatch({
                type : commentairesConstants.GET_PROJET_COMMENTAIRES_SUCCESS ,
                payload : { commentaire : res.data.commentaires }
            })
           
        }else{ // echec de chargements des commentaires
            dispatch({
                 type : commentairesConstants.GET_PROJET_COMMENTAIRES_FAILURE ,
                 payload : { error : res.data.error }
            })
        }
    } 
}


export const getCommentsByIdees = (ideeId) => {
    return async dispatch => {
        //dispatch({ type : commentairesConstants.GET_ALL_COMMENTAIRES_REQUEST })
        const res = await axios.get(`/idee/commentaires/`+ideeId);
        console.log(res.data);
        if ( res.status === 200 ){ // succes de chargements des idees 
            dispatch({
                type : commentairesConstants.GET_PROJET_COMMENTAIRES_SUCCESS ,
                payload : { commentaire : res.data.commentaires }
            })
           
        }else{ // echec de chargements des commentaires
            dispatch({
                 type : commentairesConstants.GET_PROJET_COMMENTAIRES_FAILURE ,
                 payload : { error : res.data.error }
            })
        }
    } 
}





export const DeleteComment = (commentId) => {
    return async dispatch => {
        //dispatch({ type : commentairesConstants.GET_ALL_COMMENTAIRES_REQUEST })
        const res = await axios.get(`commentaire/delete/`+commentId);
        console.log(res.data);
        if ( res.status === 200 ){ // succes de chargements des idees 
            dispatch({
                type : commentairesConstants.DELETE_COMMENTAIRE_SUCCESS ,
                payload : { message : res.data.message }
            })
           
        }else{ // echec de chargements des commentaires
            dispatch({
                 type : commentairesConstants.DELETE_COMMENTAIRE_FAILURE ,
                 payload : { error : res.data.error }
            })
        }
    } 

}


export const addCommentaire = (form) => {
    return async dispatch => {
        //dispatch({ type : commentairesConstants.GET_ALL_COMMENTAIRES_REQUEST })
        const res = await axios.post(`commentaire/create`,form);
        console.log(res.data);
        if ( res.status === 200 ){ // succes de chargements des idees 
            dispatch({
                type : commentairesConstants.ADD_COMMENTAIRE_SUCCESS ,
                payload : { createdCommentaire : res.data.createdCommentaire }
            })
           
        }else{ // echec de chargements des commentaires
            dispatch({
                 type : commentairesConstants.ADD_COMMENTAIRE_FAILURE ,
                 payload : { error : res.data.error }
            })
        }
    } 
}
