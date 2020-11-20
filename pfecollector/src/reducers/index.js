import authReducer from './auth.reducers'
import userReducer from './user.reducer'
import ideeReducer from './idee.reducers'
import projectReducer from './project.reducers'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    auth: authReducer ,
    user: userReducer ,
    idee: ideeReducer ,
    project: projectReducer  
})
export default rootReducer;