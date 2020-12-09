import axios from "../helpers"
import { commentairesConstants } from "./constants";

export const getAllCommentaires = () => {

    return async dispatch => {
        //dispatch({ type : commentairesConstants.GET_ALL_COMMENTAIRES_REQUEST })
        const res = await axios.get(`commentaire/getall`);
        const res1 = await axios.get(`idee/getall`);
        const res2 = await axios.get(`projet/getall`);
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