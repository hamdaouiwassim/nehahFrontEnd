import React , { useEffect } from 'react'
import { Container, Row , Col , Table , Pagination } from 'react-bootstrap'
import { useDispatch  } from 'react-redux'
import Layout from '../../components/Layout'
import { getAllCommentaires } from '../../actions/commentaire.actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments , faLightbulb , faPlusSquare , faCheckCircle , faBan , faSignInAlt } from '@fortawesome/free-solid-svg-icons'


const Commentaires = (props) => {
    const dispatch = useDispatch();
    useEffect( ()=>{
        dispatch(getAllCommentaires())
    }, [])

const renderCommentaires = () => {
    return(
        <Table responsive="sm" striped bordered hover>
        <thead>
                    <tr>
                        <th>#</th>
                        <th>Commentaire</th>
                        <th>Utilisateur</th>
                        <th>Publication</th>
                        <th>Type </th>
                        <th>Date d'ajout</th>
                        <th>Actions</th>
                        
                        
                    </tr>
        </thead>
        <tbody>
                <tr>
                    <td>1</td>
                    
                    <td>plateforme de gestion des rendez-vous </td>
                    <td>Ahmed Helali</td>
                    <td>PlateForme de gestion</td>
                    <td>Idee</td>
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
                    
                    <td>projet de collection de papier  </td>
                    <td>Mohamed Ben mrad</td>
                    <td>Collection des papier</td>
                    <td>Idee</td>
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
                    
                    <td>Application mobile  </td>
                    <td>Mariem safi</td>
                    <td>Wather Mobile App</td>
                    
                    
                    <td>Projet</td>
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
                              
                                <h4> <FontAwesomeIcon icon={faComments} /> Liste des Commentaires </h4>
                                <button class="btn btn-primary"> <FontAwesomeIcon icon={faPlusSquare} /> </button>
                               
                                


                            </div>
                            <hr />

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {/* here the table */}
                        { renderCommentaires() }
                        { renderPagination() }
                        
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}
export default  Commentaires