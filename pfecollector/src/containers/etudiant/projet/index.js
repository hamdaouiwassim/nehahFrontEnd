import React, { useEffect , useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Layout from '../../../components/Layout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { getProjet , getPresentation , getCommentsByProjets , addCommentaire } from '../../../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from '../../../components/ui/input'
import { faCheck, faComments, faEdit, faEye, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
import { Container, Row , Col , Table , Button , Pagination , Modal , Form  } from 'react-bootstrap'


/**
* @author
* @function UserProject
**/

const UserProject = (props) => {

let { projectId } = useParams();
console.log(projectId)
const dispatch = useDispatch()
const projet = useSelector( state => state.project.projet )
const presentation = useSelector( state => state.presentation.presentation )
const user = useSelector( state=> state.auth.user )

const [content,setContent] = useState('')
const [attachment,setAttachment] = useState(projectId)
const [type , setType] = useState('projet')
const [createdBy , setCreatedBy] = useState(user._id)


const addComment = () => {
  // //dispatch(addIdee(form))
    const form = {
      content ,
      attachment,
      type,
        createdBy ,
    }
   dispatch(addCommentaire(form))
   dispatch(getCommentsByProjets(projectId))
   setContent('')
  
} 


useEffect(()=>{
  
  dispatch(getProjet(projectId))
  dispatch(getPresentation(projectId))
  dispatch(getCommentsByProjets(projectId))
  
},[])

const commentaire = useSelector(state=> state.commentaire)
const renderCommentaires = () => {
  return(
  <>
        {commentaire.commentaires.length > 0
          ? commentaire.commentaires.map((scommentaire, index) => {
              return (
                <>
                  
                        <div>
                        <FontAwesomeIcon icon={faUser} style={{ marginRight : '10px' }}/> 
                          {scommentaire.createdBy.firstname} {scommentaire.createdBy.lastname} : 
                          {scommentaire.content}
                          </div>
                        <hr />
                       
                </>
              );
            })
          : null}
      </>
    );

}


  return(
   <Layout sidebar>
     {
       projet.length > 0 ? 
       projet.map((p=> {
         return(
           <>
        <h1>{ p.name }</h1>
        <p>{ p.description }</p>
         <span className="btn btn-primary" disabled >{ p.domaine }</span>
         <br /><br />
         <span>Cet projet a une note : </span><span className="text-primary"> { p.note } </span><br />
         <span>la date de depot de cet projet est :  </span><span className="text-primary">{ new Date(p.depot).toLocaleDateString() } </span><br />
         <span >Ajouter par : </span><span className="text-primary">{ p.createdBy.firstname } { p.createdBy.lastname }</span>
        <hr />
        </>
        )
       })): null
     }
    <h3> Presentation </h3>
    {
      presentation.length > 0 ? 
      presentation.map((pr)=> {
        return (
          <>
            <div>

                 { pr.visibilite == 'Oui' ?
                  <div> 
                   <button className="btn btn-success ml-2"><FontAwesomeIcon icon={faEye} /> voir la document de presentation  </button>              
                  </div>  : <span> Le createur de presentation a limitee l'access pour ce fichier  </span>  } 
                
                
             </div>
          </>
        )
      }) 
       : <p>Aucun fichier associer</p>
    }
    
    <hr />
    <h3> Rapport </h3>
    <p>Aucun fichier associer</p>
    <hr />
    <h3> Evaluation </h3>
    <p>Aucun fichier associer</p>
    <hr />
    <h3> <FontAwesomeIcon icon={faComments} /> Commentaires </h3>
    <hr />
    <Row>
                <Col md={11}>
                        <Input 
                        value={content}
                        type={'text'}
                        placeholder={'laisser un commentaire'}
                        onChange={ (e)=> setContent(e.target.value)}
                        />
                </Col>
                <Col md={1}>
                        <Button onClick={ addComment } style={{ marginTop : '25px' }}> <FontAwesomeIcon icon={faCheck} />  </Button>
                </Col>
    </Row>
    <hr />

{ renderCommentaires() }
   
   </Layout>
   )

 }

export default UserProject