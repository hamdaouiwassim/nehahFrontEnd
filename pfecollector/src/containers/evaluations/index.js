import React , { useEffect } from 'react'
import { Container, Row , Col , Table , Pagination } from 'react-bootstrap'
import { useDispatch  } from 'react-redux'
import Layout from '../../components/Layout'
import { getAllEvaluations } from '../../actions/evaluations.actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGavel , faLightbulb , faPlusSquare , faCheckCircle , faBan , faSignInAlt } from '@fortawesome/free-solid-svg-icons'


const Evaluations = (props) => {
    const dispatch = useDispatch();
    useEffect( ()=>{
        dispatch(getAllEvaluations())
    }, [])

const renderEvaluations = () => {
    return(
        <Table responsive="sm" striped bordered hover>
      <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom projet</th>
                        <th>Mention</th>
                        <th>Note</th>
                        <th>FeedBack</th>
                        <th>Actions</th>
                        
                        
                    </tr>
        </thead>
        <tbody>
                <tr>
                    <td>1</td>
                    <td>PlateForme de gestion</td>
                    <td>Bien </td>
                    <td>15</td>
                    <td>
                       Feedback
                       <br /> 
                       Feedback 
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
                    <td>Projet 3</td>
                    <td>Tres Bien </td>
                    <td>17</td>
                    <td>
                       Feedback
                       <br /> 
                       Feedback 
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
                    <td>Collection 1</td>
                    <td>Assez Bien </td>
                    <td>13</td>
                    <td>
                       Feedback
                       <br /> 
                       Feedback 
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
                              
                                <h4> <FontAwesomeIcon icon={faGavel} /> Liste des Evaluations </h4>
                                <button class="btn btn-primary"> <FontAwesomeIcon icon={faPlusSquare} /> </button>
                               
                                


                            </div>
                            <hr />

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {/* here the table */}
                        { renderEvaluations() }
                        { renderPagination() }
                        
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}
export default  Evaluations