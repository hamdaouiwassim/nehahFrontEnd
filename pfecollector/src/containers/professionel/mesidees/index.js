import React, { useEffect , useState  } from 'react'
import Layout from '../../../components/Layout'
import { Container, Row , Col , Modal , Button , Table  } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addIdee , DeleteIdee , getMesIdees } from '../../../actions'
import {  useSelector , useDispatch} from 'react-redux'
import Input from '../../../components/ui/input'
import { faCoffee , faLightbulb , faPlusSquare , faCheckCircle , faBan , faSignInAlt } from '@fortawesome/free-solid-svg-icons'


/**
* @author
* @function MesIdees
**/

const MesIdees = (props) => {
  const dispatch = useDispatch();
  const idee =  useSelector( state => state.idee );
  const user = useSelector( state=> state.auth.user )
  useEffect( ()=>{
      dispatch(getMesIdees(user._id))
  }, [])



const [ name , setName ] = useState('');
const [ description , setDescription ] = useState('');
const [ createdBy , setCreatedBy ] = useState(user._id);
const [show, setShow] = useState(false);

const handleClose = () => {
  // //dispatch(addIdee(form))
    const form = {
        name ,
        description,
        createdBy ,
    }
   dispatch(addIdee(form))
   dispatch(getMesIdees(user._id))
  //console.log(id)
  setShow(false);
} 
const handleShow = () => setShow(true);
// function  to render idees


const deleteIdee = (ideeId) => {
  /* eslint no-restricted-globals:0 */
  if ( confirm(`voulez-vous vraiment supprimer cette idee`) ){
      dispatch(DeleteIdee(ideeId))
      dispatch(getMesIdees(user._id))
  }
  
}

const renderIdees = () => {
 
  
   //idees = Object.assign({}, idees)
  return(
      <>
      <Table responsive="sm" striped bordered hover>
      <thead>
                  <tr>
                      <th>#</th>
                      <th>Nom</th>
                      <th>Description</th>
                      <th>Etat</th>
                      <th>Utilisateur</th>
                      <th>Date d'ajout</th>
                      <th>Actions</th>
                      
                      
                  </tr>
      </thead>
      <tbody>
          {
              idee.idees.idees.length > 0 ? 
              idee.idees.idees.map((sidee , index ) =>
                
                   <tr key={sidee._id }>
                   <td>{ index+1 }</td>
                  <td>{sidee.name}</td>
                   <td>{sidee.description} </td>
                  <td>{ sidee.stat }</td>
                   <td>{sidee.createdBy.firstname } {sidee.createdBy.lastname }</td>
                   <td>
                      { new Date(sidee.createdAt).toLocaleDateString() } 
                   </td>
                   <td>
                      
                       <button className="btn btn-danger" onClick={ ()=> deleteIdee(sidee._id)}>
                          <FontAwesomeIcon icon={faBan} />
                       </button>
                   </td>
                   
               </tr>  ) : null 
          }
               
      </tbody>
    </Table>
    </>
  );
}

  

  return (
      <div>
          <Layout sidebar>
              <Container>
                  <Row>
                      <Col md={12}>
                          <div className="alert alert-primary" style={{ display: 'flex' , justifyContent : 'space-between' , padding: '20px' }}>
                            
                              <h4> <FontAwesomeIcon icon={faLightbulb} /> Liste des Idees </h4>
                              <button className="btn btn-primary" onClick={handleShow}> <FontAwesomeIcon icon={faPlusSquare} /> </button>
                             
                              


                          </div>
                          <hr />

                      </Col>
                  </Row>
                  <Row>
                      <Col>
                      {/* here the table */}
                      { renderIdees() }
                      
                      
                      </Col>
                  </Row>
              </Container>

              <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter une nouvelle idee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Input 
              value={name}
              placeholder={'Nom de votre idee'}
              onChange={(e)=> setName(e.target.value)}

          />
          <textarea value={description} placeholder={'Description pour votre idee ...'} className="form-control" onChange={(e)=> setDescription(e.target.value)}>

          </textarea>
          
      </Modal.Body>
      <Modal.Footer>
       
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
          </Layout>
      </div>
  )
}

export default MesIdees