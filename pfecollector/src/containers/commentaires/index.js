import React , { useEffect } from 'react'
import { Container, Row , Col , Table , Pagination } from 'react-bootstrap'
import { useDispatch , useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import { getAllCommentaires , DeleteComment } from '../../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments , faLightbulb , faPlusSquare , faCheckCircle , faBan , faSignInAlt } from '@fortawesome/free-solid-svg-icons'


const Commentaires = (props) => {
    const dispatch = useDispatch();
    useEffect( ()=>{
        dispatch(getAllCommentaires())
    }, [])
const commentaire = useSelector(state => state.commentaire )
const idees = useSelector(state => state.idee.idees.idees)
const projets = useSelector(state => state.project.projets)

console.log(idees)
const getIdeeName = (ideeId)=> {
    for (var i = 0; i < idees.length; i++) {
        if ( idees[i]._id === ideeId){
            return idees[i].name
        }
      }
      
}
const getProjetName = (projetId) => {
    for (var i = 0; i < projets.length; i++) {
        if ( projets[i]._id === projetId){
            return projets[i].name
        }
      }
}

const deleteComment = (commentId) => {
    //alert(commentId)
        /* eslint no-restricted-globals:0 */
        if ( confirm(`voulez-vous vraiment supprimer ce commentaire`) ){
            dispatch(DeleteComment(commentId))
            dispatch(getAllCommentaires())
        }
}

    function renderCommentaires() {
        return (
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
                    {commentaire.commentaires.length > 0 ?
                        commentaire.commentaires.map((scommentaire, index) => <tr key={scommentaire._id}>
                            <td>{index + 1}</td>

                            <td>{scommentaire.content}</td>
                            <td>{scommentaire.createdBy.firstname} {scommentaire.createdBy.firstname} </td>
                            <td>{scommentaire.type == 'idee' ? getIdeeName(scommentaire.attachment) : getProjetName(scommentaire.attachment)}</td>
                            <td>{scommentaire.type}</td>
                            <td>
                                {new Date(scommentaire.createdAt).toLocaleDateString()}
                            </td>
                            <td>


                                <button class="btn btn-danger" onClick={ ()=> deleteComment(scommentaire._id) }>
                                    <FontAwesomeIcon icon={faBan} />
                                </button>
                            </td>

                        </tr>
                        )
                        : null}



                </tbody>
            </Table>
        )
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