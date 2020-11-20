import axios from "../helpers"

export const getAllPresentations = () => {
    return async dispatch => {
        const res = await axios.get(`presentations/getall`);
        console.log(res.data);
    } 
}