import React , { useEffect } from 'react'
import { Container, Row , Col , Table , Pagination , Image } from 'react-bootstrap'
import { useDispatch  } from 'react-redux'
import Layout from '../../components/Layout'
//import image from './uploads/Fame.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserCircle ,  faInfo , faEdit } from '@fortawesome/free-solid-svg-icons'


const Profile = (props) => {
    const dispatch = useDispatch();
    useEffect( ()=>{
        //dispatch(getAllProfile())
    }, [])

    return (
        <div>
            <Layout sidebar>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div class="alert alert-primary" style={{ display: 'flex' , justifyContent : 'space-between' , padding: '20px' }}>
                              
                                <h4> <FontAwesomeIcon icon={faUserCircle} /> Profile </h4>
                               
                                


                            </div>
                            <hr />

                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                        {/* here the table */}
                        <Image src={process.env.PUBLIC_URL + '/uploads/Fame.jpg'} thumbnail />
                        
                        
                        </Col>
                        <Col md={9}>
                            <div className="alert alert-success">
                                    <h4><FontAwesomeIcon icon={faInfo} /> Informations generales  </h4>
                            </div>
                            
                            <hr />
                            <div>
                                        <h5>Nom   : Ahmed Ali</h5>
                                        <hr />
                                        <h5>Email : Ahmedali@gmail.com</h5>
                                        <hr />
                                        <h5>Nom Utilisateur  : Ahmed123 </h5>
                                        <hr />
                                        <h5>Role : Admin </h5>
                                        <hr />
                                        <button className="btn btn-secondary mr-auto">
                                            <FontAwesomeIcon icon={faEdit} />
                                            Modifier
                                        </button>
                            </div>
                            
                        
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}
export default  Profile