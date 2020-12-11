import authReducer from './auth.reducers'
import userReducer from './user.reducer'
import ideeReducer from './idee.reducers'
import projectReducer from './project.reducers'
import utilisateurReducer from './utilisateur.reducers'
import commentaireReducer from './commentaire.reducers'
import presentationReducer from './presentation.reducers'
import evaluationReducer from './evaluation.reducers'
import rapportReducer from './rapport.reducers'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    auth: authReducer ,
    user: userReducer ,
    idee: ideeReducer ,
    project: projectReducer,
    utilisateur: utilisateurReducer,
    commentaire: commentaireReducer,
    presentation: presentationReducer,
    evaluation: evaluationReducer,
    rapport: rapportReducer,

})
export default rootReducer;