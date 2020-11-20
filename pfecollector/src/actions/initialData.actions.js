import axios from "../helpers"
import { initialDataConstants , ideesConstants , usersConstants } from "./constants"
export const getInitialData = () =>{
    return async dispatch =>{
       // dispatch({ type : initialDataContants.GET_ALL_INITIAL_DATA_REQUEST });
        const res = await axios.post(`/initialdata`);
        //console.log();
        if ( res.status === 200 ){
            const { users , idees } = res.data;
            dispatch({
                type : ideesConstants.GET_ALL_IDEES_SUCCESS ,
                payload : { idees }
            })
            dispatch({
                type : usersConstants.GET_ALL_USERS_SUCCESS ,
                payload : { users }
            })
        }
        console.log(res);
    }
}