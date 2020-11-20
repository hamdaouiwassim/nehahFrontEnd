import React , { useEffect } from 'react'
import { Container, Row , Col , Table , Pagination } from 'react-bootstrap'
import { useDispatch  } from 'react-redux'
import Layout from '../../components/Layout'
import { getAllUtilisateurs } from '../../actions/utilisateurs.actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends , faLightbulb , faPlusSquare , faCheckCircle , faBan , faSignInAlt } from '@fortawesome/free-solid-svg-icons'


const Utilisateurs = (props) => {
    const dispatch = useDispatch();
    useEffect( ()=>{
        dispatch(getAllUtilisateurs())
    }, [])

const renderUtilisateurs = () => {
    return(
        <Table responsive="sm" striped bordered hover>
        <thead>
                    <tr>
                        <th>#</th>
                        
                        <th>Utilisateur</th>
                        <th>Email</th>
                        <th>Type</th>
                        <th>Date d'ajout</th>
                        <th>Actions</th>
                        
                        
                    </tr>
        </thead>
        <tbody>
                <tr>
                    <td>1</td>
                   
                    <td>Ahmed Helali</td>
                    <td>Ahmedhelali@gmail.com</td>
                    <td>Professionel</td>
                    <td>
                       22/10/2019 
                    </td>
                    <td>
                    <button class="btn btn-success mr-2">
                            <FontAwesomeIcon icon={faCheckCircle} />                            
                        </button>
                        
                        <button class="btn btn-danger">
                            <FontAwesomeIcon icon={faBan} />
                        </button>
                    </td>
                
                </tr> 
                <tr>
                    <td>2</td>
                    
                    <td>Mohamed Ben mrad</td>
                    <td>mohamed@gmail.com</td>
                    <td>Etudiant</td>
                    <td>
                       22/10/2019 
                    </td>
                    <td>
                    <button class="btn btn-success mr-2">
                            <FontAwesomeIcon icon={faCheckCircle} />                            
                        </button>
                        
                        <button class="btn btn-danger">
                            <FontAwesomeIcon icon={faBan} />
                        </button>
                    </td>
                
                </tr> 
                <tr>
                    <td>3</td>
                    <td>user</td>
                    <td>user@webinfo.com  </td>
                    <td>Professionel</td>
                    <td>
                       22/10/2019 
                    </td>
                    <td>
                    <button class="btn btn-success mr-2">
                            <FontAwesomeIcon icon={faCheckCircle} />                            
                        </button>
                        
                        <button class="btn btn-danger">
                            <FontAwesomeIcon icon={faBan} />
                        </button>
                    </td>
                
                </tr> 
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
                              
                                <h4> <FontAwesomeIcon icon={faUserFriends} /> Liste des Utilisateurs </h4>
                                <button class="btn btn-primary"> <FontAwesomeIcon icon={faPlusSquare} /> </button>
                               
                                


                            </div>
                            <hr />

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {/* here the table */}
                        { renderUtilisateurs() }
                        { renderPagination() }
                        
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}
export default  Utilisateurs