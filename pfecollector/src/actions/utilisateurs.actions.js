import axios from "../helpers"

export const getAllUtilisateurs = () => {
    return async dispatch => {
        const res = await axios.get(`utilisateurs/getall`);
        console.log(res.data);
    } 
}