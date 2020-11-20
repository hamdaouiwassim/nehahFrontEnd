import axios from "../helpers"

export const getAllIdees = () => {
    return async dispatch => {
        const res = await axios.get(`idee/getall`);
        console.log(res.data);
    } 
}