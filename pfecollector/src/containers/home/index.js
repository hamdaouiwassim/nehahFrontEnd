import React from 'react'
import { Jumbotron , Button, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Layout from '../../components/Layout/index'
import './style.css'

const Home =  (props) => {
    return (
       
                  
                            <Layout sidebar>

                                <Jumbotron>
                                
                                <Image src="uploads/home.jpg" fluid />
                                <h1 className="mt-3" >PFECOLLECTOR </h1>
                                <p>
                                Est une application web permet d'aider les etudiants a constriure 
                                        une idee de projet PFE ou bien memoire a travers la consultation des anciennes projets avec
                                        les remarques , les notes , les documents.
                                </p>
                                <p>
                                    <Button variant="primary" className="mr-3"><NavLink style={{ color : 'white'}} to={`user/idees`}>Consulter les idees</NavLink></Button>
                                    <Button variant="success"><NavLink to={`user/idees`} style={{ color : 'white'}}>Consulter les projets</NavLink></Button>
                                </p>
                                </Jumbotron>
                                  
                            </Layout>
                 
        
    )
}

export default Home;