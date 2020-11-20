import axios from "../helpers"

export const getAllCommentaires = () => {
    return async dispatch => {
        const res = await axios.get(`commentaires/getall`);
        console.log(res.data);
    } 
}