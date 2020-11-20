import React , { useEffect } from 'react'
//import moment from "moment";
import { Container, Row , Col , Table , Pagination } from 'react-bootstrap'
import { useDispatch , useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import { getAllIdees } from '../../actions/idee.actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faLightbulb , faPlusSquare , faCheckCircle , faBan , faSignInAlt } from '@fortawesome/free-solid-svg-icons'


const Idees = (props) => {
    const dispatch = useDispatch();
    useEffect( ()=>{
        dispatch(getAllIdees())
    }, [])
const idee =  useSelector(state => state.idee );

const renderIdees = () => {
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
                idee.idees.map(idee =>
                    <tr key={idee._id }>
                    <td>1</td>
                    <td>{idee.titre}</td>
                    <td>{idee.description} </td>
                    <td>{idee.iduser}</td>
                    <td>
                       { new Date(idee.createdAt).toLocaleDateString() } 
                    </td>
                    <td>
                    <button class="btn btn-success mr-2">
                            <FontAwesomeIcon icon={faCheckCircle} />                            
                        </button>
                        
                        <button class="btn btn-danger">
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
                            <div class="alert alert-primary" style={{ display: 'flex' , justifyContent : 'space-between' , padding: '20px' }}>
                              
                                <h4> <FontAwesomeIcon icon={faLightbulb} /> Liste des Idees </h4>
                                <button class="btn btn-primary"> <FontAwesomeIcon icon={faPlusSquare} /> </button>
                               
                                


                            </div>
                            <hr />

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {/* here the table */}
                        { renderIdees() }
                        { renderPagination() }
                        
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}
export default  Idees