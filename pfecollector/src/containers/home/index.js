import React from 'react'
import { Navbar , Nav ,Container , Jumbotron , Row , Col  } from 'react-bootstrap'
import Layout from '../../components/Layout/index'
import './style.css'
const Home =  (props) => {
    return (
       
                  
                            <Layout>
                                <Container fluid>      
                                        <Row>
                                            <Col md={2} className="sidebar">Side bar
                                            </Col>
                                            
                                            <Col md={10} style={{ marginLeft: 'auto' }}>Container
                                            </Col>
                                        </Row>
                                </Container>
                                {/* <Jumbotron style={{ margin: '5em' , background: '#fff' }} className="text-center">
                                    <h1>Welcome Administration Panel </h1>
                                    <p>
                                    it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                                     and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                    </p>
                                </Jumbotron> */}
                            </Layout>
                 
        
    )
}

export default Home;