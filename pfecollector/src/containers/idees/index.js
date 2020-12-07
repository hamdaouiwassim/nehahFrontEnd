import React , { useEffect , useState } from 'react'
//import moment from "moment";
import { Container, Row , Col , Table , Button , Pagination , Modal   } from 'react-bootstrap'
import { useDispatch , useSelector  } from 'react-redux'
import Layout from '../../components/Layout'
import { getAllIdees , addIdee} from '../../actions/idee.actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from '../../components/ui/input'
import { faCoffee , faLightbulb , faPlusSquare , faCheckCircle , faBan , faSignInAlt } from '@fortawesome/free-solid-svg-icons'


const Idees = (props) => {

    //let user = [];
    const dispatch = useDispatch();
    useEffect( ()=>{
        console.log('idees.js')
        //console.log(window.Storage.Item("user"))
        dispatch(getAllIdees())
        
    }, [])
const idee =  useSelector( state => state.idee );
console.log("liste des idees => GET ALL IDEES")
console.log(idee)
//const auth =  useSelector( state => state.auth.user._id );

const [ titre , setTitre ] = useState('');
const [ description , setDescription ] = useState('');
const [ iduser , setIdUser ] = useState('');
console.log(" show user ")
// console.log(auth)
//const iduser =  ;


const [show, setShow] = useState(false);
// console.log("index idees")
// console.log(idee)

// function to show modal

const handleClose = () => {
   
    const form = new FormData()
    form.append('titre',titre)
    form.append('description',description)
    form.append('iduser',"qwertyqedcfs")
    console.log(form)
    //dispatch(addIdee(form))
     const id = {
         titre ,
         description,
         iduser : "qwertyqedcfs"
     }
    dispatch(addIdee(id))
    //console.log(id)
    setShow(false);
} 
  const handleShow = () => setShow(true);
// function  to render idees

const renderIdees = (idee) => {
   
    
     //idees = Object.assign({}, idees)
    return(
        <Table responsive="sm" striped bordered hover>
        <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Utilisateur</th>
                        <th>Date d'ajout</th>
                        <th>Actions</th>
                        
                        
                    </tr>
        </thead>
        <tbody>
            {
                idee.idees.length > 0 ? 
                idee.idees.map(sidee =>
                     <tr key={sidee._id }>
                     <td>1</td>
                    <td>{sidee.titre}</td>
                     <td>{sidee.description} </td>
                     <td>{sidee.iduser}</td>
                     <td>
                        { new Date(sidee.createdAt).toLocaleDateString() } 
                     </td>
                     <td>
                    <button className="btn btn-success mr-2">
                            <FontAwesomeIcon icon={faCheckCircle} />                            
                        </button>
                        
                         <button className="btn btn-danger">
                            <FontAwesomeIcon icon={faBan} />
                         </button>
                     </td>
                
                 </tr>  ) : null 
            }
                 
        </tbody>
      </Table>
    );
}
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
const renderPagination =() => {
        return (
            <div>
            <Pagination>{items}</Pagination>
            <br />
        
            
            </div>
        
        )
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
                        { renderIdees(idee) }
                        { renderPagination() }
                        
                        </Col>
                    </Row>
                </Container>

                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une nouvelle idee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Input 
                value={titre}
                placeholder={'Nom de votre idee'}
                onChange={(e)=> setTitre(e.target.value)}

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