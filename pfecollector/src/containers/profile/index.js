import React , { useEffect , useState } from 'react'
import { Container, Row, Col, Image, Modal , Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import Input from '../../components/ui/input'
//import image from './uploads/Fame.jpg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faInfo,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

const Profile = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(getAllProfile())
  }, []);
  const user = useSelector((state) => state.auth.user);
  const [show, setShow] = useState(false);
  const [firstname,setFirstname ] = useState(user.firstname)
  const [lastname,setLastname ] = useState(user.lastname)
  const [email,setEmail ] = useState(user.email)
  const [username,setUsername ] = useState(user.username)
  const [password,setPassword ] = useState(null)

  const handleClose = () => {
   
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <div>
      <Layout sidebar>
        <Container>
          <Row>
            <Col md={12}>
              <div
                class="alert alert-primary"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "20px",
                }}
              >
                <h4>
                  {" "}
                  <FontAwesomeIcon icon={faUserCircle} /> Profile{" "}
                </h4>
              </div>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              {/* here the table */}
              <Image
                src={process.env.PUBLIC_URL + "/uploads/Fame.jpg"}
                thumbnail
              />
            </Col>
            <Col md={9}>
              <div className="alert alert-success">
                <h4>
                  <FontAwesomeIcon icon={faInfo} /> Informations generales{" "}
                </h4>
              </div>

              <hr />
              <div>
                <h5>
                  Nom , prenom : {user.firstname} {user.lastname}
                </h5>
                <hr />
                <h5>Email : {user.email}</h5>
                <hr />
                <h5>Nom Utilisateur : {user.username} </h5>
                <hr />
                <h5>Role : {user.role} </h5>
                <hr />
                <button
                  className="btn btn-secondary mr-auto"
                  onClick={handleShow}
                >
                  <FontAwesomeIcon icon={faEdit} />
                  Modifier
                </button>
              </div>
            </Col>
          </Row>
        </Container>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modifier coordonnes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Input
              value={firstname}
              
              onChange={(e) => setFirstname(e.target.value)}
            />
            <Input
              value={lastname}
              
              onChange={(e) => setLastname(e.target.value)}
            />
             <Input
              value={email}
              
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              value={username}
              placeholder={`tapper votre nouvel mot de passe`}
              onChange={(e) => setUsername(e.target.value)}
            />
             <Input
              value={password}
              
              onChange={(e) => setPassword(e.target.value)}
            />
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Layout>
    </div>
  );
};
export default Profile;
