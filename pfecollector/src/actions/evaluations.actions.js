import axios from "../helpers"

export const getAllEvaluations = () => {
    return async dispatch => {
        const res = await axios.get(`evaluations/getall`);
        console.log(res.data);
    } 
}