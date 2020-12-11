import React , { useEffect } from 'react'
import { Container, Row , Col , Table , Pagination } from 'react-bootstrap'
import { useDispatch, useSelector  } from 'react-redux'
import Layout from '../../components/Layout'
import { getAllEvaluations , DeleteEvaluation } from '../../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGavel , faLightbulb , faPlusSquare , faCheckCircle , faBan , faSignInAlt } from '@fortawesome/free-solid-svg-icons'


const Evaluations = (props) => {
    const dispatch = useDispatch();
    useEffect( ()=>{
        dispatch(getAllEvaluations())
    }, [])
    const deleteEvaluation = (evaluationId) => {
        /* eslint no-restricted-globals:0 */
        if ( confirm(`voulez-vous vraiment supprimer cette evaluation`) ){
        dispatch(DeleteEvaluation(evaluationId))
        dispatch(getAllEvaluations());
        }
      }
const evaluation = useSelector((state) => state.evaluation);
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
        {evaluation.evaluations.length > 0
            ? evaluation.evaluations.map((re, index) => {
                return (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{re.projet.name}</td>
                      <td>
                          {re.mention}
                      </td>
                      <td>{re.note}</td>

                      <td>{re.feedback}</td>
                      <td>
                        <button
                          class="btn btn-danger"
                          onClick={() => deleteEvaluation(re._id)}
                        >
                          <FontAwesomeIcon icon={faBan} />
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })
            : null}
            
           
           
        </tbody>
      </Table>
    );
}

    

    return (
        <div>
            <Layout sidebar>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div class="alert alert-primary" style={{ display: 'flex' , justifyContent : 'space-between' , padding: '20px' }}>
                              
                                <h4> <FontAwesomeIcon icon={faGavel} /> Liste des Evaluations </h4>
                          
                               
                                


                            </div>
                            <hr />

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {/* here the table */}
                        { renderEvaluations() }
                       
                        
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}
export default  Evaluations