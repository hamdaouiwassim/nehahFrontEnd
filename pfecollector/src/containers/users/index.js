import React , { useEffect , useState } from 'react'
import { Container, Row , Col , Table , Pagination } from 'react-bootstrap'
import { useDispatch , useSelector  } from 'react-redux'
import Layout from '../../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends , faLightbulb , faPlusSquare , faCheckCircle , faBan , faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { DeleteUser , getAllUsers  } from '../../actions'


const Utilisateurs = (props) => {
    const dispatch = useDispatch();
    useEffect( () =>{
        dispatch(getAllUsers())
      
        
    }, [])





const user = useSelector( state => state.utilisateur )


const deleteUser = (userId) => {
    /* eslint no-restricted-globals:0 */
    if ( confirm(`voulez-vous vraiment supprimer l'utilisateur`) )
    dispatch(DeleteUser(userId))
}



const renderUtilisateurs = () => {
    return(
        
        <Table responsive="sm" striped bordered hover>
        <thead>
                    <tr>
                        <th>#</th>
                        
                        <th>Utilisateur</th>
                        <th>Email</th>
                        <th>Nom utilisateur</th>
                        <th>Role</th>
                        <th>Date d'ajout</th>
                        <th>Actions</th>
                        
                        
                    </tr>
        </thead>
        <tbody>
        {
                user.users.length > 0 ? 
                user.users.map(( suser , index ) =>
                     <tr key={suser._id }>
                     <td>{ index+1 }</td>
                    <td> {suser.lastname} {suser.firstname}</td>
                    
                     <td>{suser.email} </td>
                    <td>{ suser.username  }</td>
                    <td>{ suser.role  }</td>
                     <td>
                        { new Date(suser.createdAt).toLocaleDateString() } 
                     </td>
                     <td>
                   
                        
                         <button className="btn btn-danger" onClick={ ()=> deleteUser(suser._id) }>
                            <FontAwesomeIcon icon={faBan} />
                         </button>
                     </td>
                
                 </tr>  ) :  null 
            }
        </tbody>
      </Table>
    )
}


    return (
        <div>
            <Layout sidebar>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="alert alert-primary" style={{ display: 'flex' , justifyContent : 'space-between' , padding: '20px' }}>
                              
                                <h4> <FontAwesomeIcon icon={faUserFriends} /> Liste des Utilisateurs </h4>
                                
                               
                                


                            </div>
                            <hr />

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {/* here the table */}
                        { renderUtilisateurs() }
                
                        
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}
export default  Utilisateurs