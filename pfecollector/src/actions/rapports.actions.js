import axios from "../helpers"

export const getAllRapports = () => {
    return async dispatch => {
        const res = await axios.get(`rapports/getall`);
        console.log(res.data);
    } 
}