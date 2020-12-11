import React from 'react'
import Header from '../Header/index';
import './style.css'
import { Navbar , Nav ,Container , Jumbotron , Row , Col  } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt , faLightbulb , faComments , faBook , faUserFriends , faUserCircle , faGavel , faFilePowerpoint } from '@fortawesome/free-solid-svg-icons'




const Layout =  (props) => {
    //const user = useSelector( state=> state.auth.user )
    const user = JSON.parse(window.localStorage.getItem('user'));
    const renderLlinksByRole = () => {

        if (user.role == "admin"){
                return(  
                        <Col md={2} className="sidebar">
                                    <ul>
                                        <li> <NavLink exact to={`/`}><FontAwesomeIcon icon={faListAlt} /> Accueil </NavLink> </li>
                                        <li> <NavLink to={`/idees`}><FontAwesomeIcon icon={faLightbulb} /> Idees </NavLink> </li>
                                        <li> <NavLink to={`/projects`}><FontAwesomeIcon icon={faListAlt} /> Projets </NavLink> </li>
                                        <li> <NavLink to={`/commentaires`}><FontAwesomeIcon icon={faComments} /> Commentaires </NavLink> </li>
                                        <li> <NavLink to={`/presentations`}><FontAwesomeIcon icon={faFilePowerpoint} /> Presentations </NavLink> </li>
                                        <li> <NavLink to={`/evaluations`}><FontAwesomeIcon icon={faGavel} /> Evaluations </NavLink> </li>
                                        <li> <NavLink to={`/rapports`}><FontAwesomeIcon icon={faBook} /> Rapports </NavLink> </li>
                                        <li> <NavLink to={`/utilisateurs`}><FontAwesomeIcon icon={faUserFriends} /> Utilisateurs </NavLink> </li>
                                        <li> <NavLink to={`/profile`}><FontAwesomeIcon icon={faUserCircle} /> Profile </NavLink> </li>
                                    </ul>
                        </Col>)
        }else if(user.role == "etudiant"){
            return(  
                <Col md={2} className="sidebar">
                            <ul>
                                <li> <NavLink exact to={`/`}><FontAwesomeIcon icon={faListAlt} /> Accueil </NavLink> </li>
                                <li> <NavLink to={`/user/idees`}><FontAwesomeIcon icon={faLightbulb} /> Idees </NavLink> </li>
                                <li> <NavLink to={`/user/projets`}><FontAwesomeIcon icon={faListAlt} /> Projets </NavLink> </li>
                                <li> <NavLink to={`/profile`}><FontAwesomeIcon icon={faUserCircle} /> Profile </NavLink> </li>
                            </ul>
                </Col>)
        }else{
            return(  
                <Col md={2} className="sidebar">
                            <ul>
                            <li> <NavLink exact to={`/`}><FontAwesomeIcon icon={faListAlt} /> Accueil </NavLink> </li>
                                <li> <NavLink to={`/user/idees`}><FontAwesomeIcon icon={faLightbulb} /> Idees </NavLink> </li>
                                <li> <NavLink to={`/user/projets`}><FontAwesomeIcon icon={faListAlt} /> Projets </NavLink> </li>
                                <li> <NavLink to={`/user/me/idees`}><FontAwesomeIcon icon={faLightbulb} /> Mes Idees </NavLink> </li>
                                <li> <NavLink to={`/user/me/projets`}><FontAwesomeIcon icon={faListAlt} /> Mes Projets </NavLink> </li>
                                <li> <NavLink to={`/profile`}><FontAwesomeIcon icon={faUserCircle} /> Profile </NavLink> </li>
                            </ul>
                </Col>)
        }
    }
    return (
        <>
       
                 <Header />
                 {
                     props.sidebar ?
                     <Container fluid>      
                                <Row>
                                    { renderLlinksByRole() }
                                    <Col md={10} style={{ marginLeft: 'auto' , paddingTop : '70px' }}>
                                        {props.children}
                                    </Col>
                                </Row>
                    </Container>
                    :
                    props.children
                 }
                 
                 
        </>
    )
}

export default Layout;
