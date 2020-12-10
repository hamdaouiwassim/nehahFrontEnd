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
import { getProjet , getPresentation , addPresentation , DeletePresentation } from '../../../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from '../../../components/ui/input'
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Container, Row , Col , Table , Button , Pagination , Modal , Form  } from 'react-bootstrap'


/**
* @author
* @function ShowProject
**/

const ShowProject = (props) => {

let { projectId } = useParams();
console.log(projectId)
const dispatch = useDispatch()
const projet = useSelector( state => state.project.projet )
const presentation = useSelector( state => state.presentation.presentation )
console.log(typeof projet[0])
useEffect(()=>{
  
  dispatch(getProjet(projectId))
  dispatch(getPresentation(projectId))
  //dispatch(getRapport(projectId))
  //dispatch(getEvaluation(projectId))
},[])




const [ document , setDocument] = useState('')
const [ visibilite , setVisibilite ] = useState('Oui')


const [show, setShow] = useState(false);

const handleClose = () => {
    
  const form = {
    document,
    visibilite,
    projet: projectId
}
dispatch(addPresentation(form))
dispatch(getPresentation(projectId))


//console.log(form)
setShow(false);
} 
  const handleShow = () => setShow(true);


const deletePresentation = (presentationId) => {
  /* eslint no-restricted-globals:0 */
  if ( confirm(`voulez-vous vraiment supprimer cette presentation`) ){
  dispatch(DeletePresentation(presentationId))
  dispatch(getPresentation(projectId)) }
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
                   <button className="btn btn-success ml-2"><FontAwesomeIcon icon={faEye} />  </button>              
                    <button className="btn btn-primary ml-2 mr-2"> <FontAwesomeIcon icon={faEdit} /> </button>
                    <button className="btn btn-danger" onClick={()=> deletePresentation(pr._id) } > <FontAwesomeIcon icon={faTrash} /> </button> 
                     
                  </div>  : <span> Le createur de presentation a limitee l'access pour ce fichier  </span>  } 
                
                
             </div>
          </>
        )
      }) 
       : <button className="btn btn-primary" onClick={ handleShow }> Ajouter </button> 
    }
    
    <hr />
    <h3> Rapport </h3>
    <button className="btn btn-primary"> Ajouter </button>
    <hr />
    <h3> Evaluation </h3>
    <button className="btn btn-primary"> Ajouter </button>
     


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une nouvelle prsentation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Input 
                value={document}
                placeholder={'Document de presentation'}
                type={'file'}
                onChange={(e)=> setDocument(e.target.value)}

            />
            <Form.Group >
                <Form.Label>Type de compte</Form.Label>
                <Form.Control value={visibilite} as="select" custom  onChange={(e) => {setVisibilite(e.target.value)}}>
                  <option selected >Oui</option>
                  <option>Non</option>
                  
                </Form.Control>
              </Form.Group>
            
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
   </Layout>
   )

 }

export default ShowProject