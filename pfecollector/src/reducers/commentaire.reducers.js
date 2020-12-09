import { commentairesConstants } from "../actions/constants";
const initialState ={
    commentaires : [],
    loading  : false,
    message: null,
    error : null 
}

export default (state = initialState ,action) => {
    switch(action.type){
        case commentairesConstants.GET_ALL_COMMENTAIRES_SUCCESS :
        state = {
            ...state,
            commentaires : action.payload.commentaire,
            
        }
        break;
        case commentairesConstants.GET_ALL_COMMENTAIRES_FAILURE :
        state = {
            ...state,
            error : action.payload.error
        }
        break;

        case commentairesConstants.ADD_NEW_COMMENTAIRE_REQUEST :
            state = {
                ...state ,
                loading : true 
            }
        break;
        case commentairesConstants.ADD_NEW_COMMENTAIRE_SUCCESS :
            //const updatedCommentaires = builNewCommentaire(state.commentaires,action.payload.idee)
            // console.log("Updated Commentaires => : ")
            // console.log(updatedCommentaires)
             state = {
                ...state ,
               // commentaires : updatedCommentaires,
                loading : false 
            }
        break;
        case commentairesConstants.ADD_NEW_COMMENTAIRE_FAILURE :
            state = {
                ...initialState, 
            }
        break;
   
        case commentairesConstants.DELETE_COMMENTAIRE_SUCCESS :
            state = {
                ...state,
                message : action.payload.message 
            }
        break;
        case commentairesConstants.DELETE_COMMENTAIRE_FAILURE :
            state = {
                ...state,
                error : action.payload.error 
            }
        break;

        default :
        console.log("default")
         
    }
    return state;
} 