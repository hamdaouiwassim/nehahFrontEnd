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
import { getIdee  , getCommentsByIdees , addCommentaire } from '../../../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from '../../../components/ui/input'
import { faCheck, faComments, faEdit, faEye, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
import { Container, Row , Col , Table , Button , Pagination , Modal , Form  } from 'react-bootstrap'


/**
* @author
* @function UserProject
**/

const UserProject = (props) => {

let { ideeId } = useParams();
console.log(ideeId)
const dispatch = useDispatch()
const idee = useSelector( state => state.idee.idee )
const commentaire = useSelector(state=> state.commentaire)
const user = useSelector( state=> state.auth.user )

const [content,setContent] = useState('')
const [attachment,setAttachment] = useState(ideeId)
const [type , setType] = useState('idee')
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
   dispatch(getCommentsByIdees(ideeId))
   setContent('')
  
} 


useEffect(()=>{
  
  dispatch(getIdee(ideeId))
  dispatch(getCommentsByIdees(ideeId))
  
},[])



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

     
 
      
                <div>
                          <h1>
                          { idee.name }
                          </h1>
                          <p>
                            { idee.description }
                          </p>
                </div>
         
    
   
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