import React , { useEffect } from 'react'
import { Container, Row , Col , Table , Pagination } from 'react-bootstrap'
import { useDispatch  } from 'react-redux'
import Layout from '../../components/Layout'
import { getAllProjects } from '../../actions/project.actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt , faPlusSquare , faCheckCircle , faBan , faSignInAlt } from '@fortawesome/free-solid-svg-icons'



const Projects = (props) => {
    const dispatch = useDispatch();
    useEffect( ()=>{
        dispatch(getAllProjects())
    }, [])

const renderProjects = () => {
    return(
        <Table responsive="sm" striped bordered hover>
        <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Utilisateur </th>
                        <th>Domaine</th>
                        <th>Date de depot</th>
                        <th>Note de projet </th>
                        <th>Actions</th>
                        
                        
                    </tr>
        </thead>
        <tbody>
                <tr>
                    <td>1</td>
                    <td>PlateForme de gestion</td>
                    <td>plateforme de gestion des rendez-vous </td>
                    <td>Ahmed Helali</td>
                    <td>
                       Informatique
                    </td>
                    <td>
                       2019 
                    </td>
                    <td>
                       17.5 
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
                    <td>Collection des papier</td>
                    <td>projet de collection de papier  </td>
                    <td>Mohamed Ben mrad</td>
                    <td>
                       Informatique de gestion
                    </td>
                    <td>
                       2017
                    </td>
                    <td>
                       13.5 
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
                    <td>Wather Mobile App</td>
                    <td>Application mobile  </td>
                    <td>Mariem safi</td>
                    <td>
                       Chimie
                    </td>
                    <td>
                       2018 
                    </td>
                    <td>
                       15 
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
                            <div className="alert alert-primary" style={{ display: 'flex' , justifyContent : 'space-between' , padding: '20px' }}>
                                <h4><FontAwesomeIcon icon={faListAlt} />Liste des Projects </h4>
                                <button class="btn btn-primary"> <FontAwesomeIcon icon={faPlusSquare} /> </button>


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
            </Layout>
        </div>
    )
}
export default  Projects