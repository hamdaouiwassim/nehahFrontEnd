import axios from "../helpers"
import { projetsConstants } from "./constants";

export const getAllProjects = () => {
    return async dispatch => {
        const res = await axios.get(`projet/getall`);
        if ( res.status === 200 ){
            dispatch({ 
                type : projetsConstants.GET_ALL_PROJETS_SUCCESS ,
                payload : { projet : res.data.projets }
             })
        }
        console.log(res.data);
    } 
}


export const addProjet = (form) => {
    return async dispatch => {
        //dispatch({ type : ideesConstants.ADD_NEW_IDEE_REQUEST })
        const res = await axios.post(`/projet/create`,form)
        if ( res.status === 201 ){
            dispatch({ 
                type : projetsConstants.ADD_NEW_PROJET_SUCCESS ,
                payload : {projet : res.data.createdprojet }
             })
        }else{
            dispatch({ 
                type :  projetsConstants.ADD_NEW_PROJET_FAILURE,
                payload : res.data.error
             })

        }
        console.log("add projet function")
        console.log(res)
    }
}

export const getProjet = (projetId) => {
    return async dispatch => {
        //dispatch({ type : ideesConstants.ADD_NEW_IDEE_REQUEST })
        const res = await axios.get(`/projet/get/`+projetId)
        if ( res.status === 200 ){
            dispatch({ 
                type : projetsConstants.GET_PROJET_SUCCESS ,
                payload : {projet : res.data.projet }
             })
        }else{
            dispatch({ 
                type :  projetsConstants.GET_PROJET_FAILURE,
                payload : res.data.error
             })

        }
        console.log("add projet function")
        console.log(res)
    }
}