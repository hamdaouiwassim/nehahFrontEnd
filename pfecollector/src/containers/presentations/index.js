import React , { useEffect } from 'react'
import { Container, Row , Col , Table , Pagination } from 'react-bootstrap'
import { useDispatch, useSelector  } from 'react-redux'
import Layout from '../../components/Layout'
import { getAllPresentations , DeletePresentation } from '../../actions/presentations.actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePowerpoint , faLightbulb , faPlusSquare , faCheckCircle , faBan , faSignInAlt } from '@fortawesome/free-solid-svg-icons'


const Presentations = (props) => {
    const dispatch = useDispatch();
    useEffect( ()=>{
        dispatch(getAllPresentations())
    }, [])
const presentation = useSelector(state=>state.presentation)
const renderPresentations = () => {
    return(
        <Table responsive="sm" striped bordered hover>
          <thead>
                    <tr>
                        <th>#</th>
                        <th>Projet</th>
                        <th>Document</th>
                        <th>visibilite</th>
                        
                        <th>Actions</th>
                        
                        
                    </tr>
        </thead>
        <tbody>
            {
                presentation.presentations.length > 0 ? 
                presentation.presentations.map((pr,index)=> {
                    return(
                        <>
                        <tr>
                                            <td>{index+1}</td>
                                            <td>{pr.projet.name}</td>
                                            <td><button className="btn btn-primary"> Voir </button> </td>
                                            <td>{pr.visibilite}</td>
                                            
                                            <td>
                                           
                                                
                                                <button class="btn btn-danger" onClick={ ()=> deletePresentation(pr._id)}>
                                                    <FontAwesomeIcon icon={faBan} />
                                                </button>
                                            </td>
                                        
                        </tr> 
            
                        </>
                    )
                })
                : null
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
const deletePresentation = (presentationId) => {
    /* eslint no-restricted-globals:0 */
    if ( confirm(`voulez-vous vraiment supprimer cette presentation`) ){
    dispatch(DeletePresentation(presentationId))
    dispatch(getAllPresentations()) }
  }   

    return (
        <div>
            <Layout sidebar>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div class="alert alert-primary" style={{ display: 'flex' , justifyContent : 'space-between' , padding: '20px' }}>
                              
                                <h4> <FontAwesomeIcon icon={faFilePowerpoint} /> Liste des Presentations </h4>
                                
                               
                                


                            </div>
                            <hr />

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {/* here the table */}
                        { renderPresentations() }
                        { renderPagination() }
                        
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}
export default  Presentations