import axios from "../helpers"

export const getAllProjects = () => {
    return async dispatch => {
        const res = await axios.get(`projects/getall`);
        console.log(res.data);
    } 
}