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
import { getProjet , getPresentation ,getRapport,getEvaluation , getCommentsByProjets , addCommentaire } from '../../../actions'
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
useEffect(()=>{
  
  dispatch(getProjet(projectId))
  dispatch(getPresentation(projectId))
  dispatch(getCommentsByProjets(projectId))
  dispatch(getRapport(projectId))
  dispatch(getEvaluation(projectId))
  
},[])
console.log(projectId)
const dispatch = useDispatch()
const projet = useSelector( state => state.project.projet )
const presentation = useSelector( state => state.presentation.presentation )
const rapport = useSelector( state => state.rapport.rapport )
const evaluation = useSelector( state => state.evaluation.evaluation )
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
    {
      rapport.length > 0 ? 
      rapport.map((pr)=> {
        return (
          <>
            <div>
            <p className='p-3' >
                      { pr.feedback }
                    </p>s
                 { pr.visibilite == 'Oui' ?
                  <div> 
                   <button className="btn btn-success ml-2"><FontAwesomeIcon icon={faEye} /> voir la document de rapport  </button>              
                  </div>  : <span> Le createur de presentation a limitee l'access pour ce fichier  </span>  } 
                
                
             </div>
          </>
        )
      }) 
       : <p>Aucun fichier associer</p>
    }
    <hr />
    <h3> Evaluation </h3>
    {
      evaluation.length > 0 ? 
      evaluation.map((er)=> {
        return (
          <>
            <div>

                  <p className='p-3' >
                      { er.feedback  }
                      
                      
                      
                    </p>
                    <h5 className='p-3'> Note : { er.note } </h5>
                      <h5 className='p-3'> Mention :{ er.mention }  </h5>
                
             </div>
          </>
        )
      }) 
       : <p>Aucun fichier associer</p>
    }
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