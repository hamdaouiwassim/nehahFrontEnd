import React , { useEffect , useState } from 'react'
//import moment from "moment";
import { Container, Row , Col , Table , Button , Pagination , Modal   } from 'react-bootstrap'
import { useDispatch , useSelector  } from 'react-redux'
import Layout from '../../components/Layout'
import { getAllIdees , addIdee, validateByAdmin , DeleteIdee} from '../../actions/idee.actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from '../../components/ui/input'
import { faCoffee , faLightbulb , faPlusSquare , faCheckCircle , faBan , faSignInAlt } from '@fortawesome/free-solid-svg-icons'


const Idees = (props) => {

    const dispatch = useDispatch();
    useEffect( ()=>{
        dispatch(getAllIdees())
        
        
    }, [])
const idee =  useSelector( state => state.idee );
const user = useSelector( state=> state.auth.user )


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
     dispatch(getAllIdees())
    //console.log(id)
    setShow(false);
} 
  const handleShow = () => setShow(true);
// function  to render idees
const validateIdee = (ideeId) => {
    dispatch(validateByAdmin(ideeId))
    dispatch(getAllIdees())
}

const deleteIdee = (ideeId) => {
    /* eslint no-restricted-globals:0 */
    if ( confirm(`voulez-vous vraiment supprimer cette idee`) ){
        dispatch(DeleteIdee(ideeId))
        dispatch(getAllIdees())
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
                    <button className="btn btn-success mr-2" onClick={ () => validateIdee(sidee._id) }>
                            <FontAwesomeIcon icon={faCheckCircle} />                            
                        </button>
                        
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
export default  Idees