import React , { useEffect ,  useState } from 'react'
import { Container, Row , Col , Table , Pagination , Modal , Button } from 'react-bootstrap'
import { useDispatch , useSelector  } from 'react-redux'
import Layout from '../../components/Layout'
import { getAllProjects , addProjet} from '../../actions/project.actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt , faPlusSquare , faCheckCircle , faBan , faSignInAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import Input from '../../components/ui/input'
import { NavLink } from 'react-router-dom'

const Projects = (props) => {
    const dispatch = useDispatch();
    useEffect( ()=>{
        dispatch(getAllProjects())
    }, [])


const projet =  useSelector( state => state.project );
const user = useSelector( state=> state.auth.user )
const [ name , setName ] = useState('');
const [ description , setDescription ] = useState('');
const [ createdBy , setCreatedBy ] = useState(user._id);
const [ domaine , setDomaine ] = useState('');
const [ depot , setDepot ] = useState('');
const [ note , setNote ] = useState('');


const [show, setShow] = useState(false);
const handleClose = () => {
    const form = {
        name ,
        description,
        createdBy ,
        domaine,
        depot,
        note
    }
   dispatch(addProjet(form))
   dispatch(getAllProjects())
   setName('')
   setDescription('')
   setDomaine('')
   setNote('')
   setDepot('')
    setShow(false);
} 
const handleShow = () => setShow(true);

const renderProjects = () => {
    return(
        <Table responsive="sm" striped bordered hover>
        <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Etat</th>
                        <th>Utilisateur </th>
                        <th>Domaine</th>
                        <th>Date de depot</th>
                        <th>Note de projet </th>
                        <th>Actions</th>
                        
                        
                    </tr>
        </thead>
        <tbody>
        {
                projet.projets.length > 0 ? 
                projet.projets.map((sprojet , index ) =>
                
                <tr>
                    <td>{ index+1 }</td>
                    <td>{ sprojet.name }</td>
                    <td>{ sprojet.description } </td>
                    <td>{ sprojet.stat } </td>
                    <td>{ sprojet.createdBy.firstname } { sprojet.createdBy.lastname }</td>
                    <td>
                       {sprojet.domaine}
                    </td>
                    <td>
                       {new Date(sprojet.depot).toLocaleDateString()}
                    </td>
                    <td>
                      { sprojet.note }
                    </td>
                    <td>
                    <button class="btn btn-success mr-2">
                        <NavLink to={`/projet/show`}><FontAwesomeIcon icon={faEdit} /> </NavLink>
                        </button>
                    <button class="btn btn-success mr-2">
                            <FontAwesomeIcon icon={faCheckCircle} />                            
                        </button>
                        
                        <button class="btn btn-danger">
                            <FontAwesomeIcon icon={faBan} />
                        </button>
                    </td>
                
                </tr> 
                ) 
                 : null }
                 
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
                                <h4><FontAwesomeIcon icon={faListAlt} />Liste des Projects </h4>
                                <button class="btn btn-primary" onClick={handleShow}> <FontAwesomeIcon icon={faPlusSquare} /> </button>


                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {/* here the table */}
                        { renderProjects() }
                        { renderPagination() }
                        
                        </Col>
                    </Row>
                </Container>
                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une nouvelle Projet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Input 
                value={name}
                placeholder={'Nom de votre projet'}
                onChange={(e)=> setName(e.target.value)}

            />
            <textarea value={description} placeholder={'Description pour votre projet ...'} className="form-control" onChange={(e)=> setDescription(e.target.value)}>

            </textarea>
            <Input 
                value={domaine}
                placeholder={'Domaine de votre projet'}
                onChange={(e)=> setDomaine(e.target.value)}

            />
             <Input 
                value={depot}
                type={'date'}
                placeholder={'Date de depot votre projet'}
                onChange={(e)=> setDepot(e.target.value)}

            />
             <Input 
                value={note}
                type={'number'}
                placeholder={'Note de votre projet'}
                onChange={(e)=> setNote(e.target.value)}

            />

            
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
export default  Projects