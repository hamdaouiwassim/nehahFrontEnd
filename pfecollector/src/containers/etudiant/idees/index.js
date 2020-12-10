import React, { useEffect, useState } from "react";
//import moment from "moment";
import { Container, Row, Col, Card , Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../components/Layout";
import { getAllIdees } from "../../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faLightbulb,
  faPlusSquare,
  faCheckCircle,
  faBan,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const IdeesUser = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllIdees());
  }, []);
  const idee = useSelector(state => state.idee);
  //const user = useSelector( state=> state.auth.user )

  const renderIdees = () => {
    return (
      <>
        {idee.idees.idees.length > 0
          ? idee.idees.idees.map((sidee, index) => {
              return (
                <>
                
                    <Col md={4} >
                            <Card >
                                <Card.Body>
                                <Card.Title>{sidee.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Creer par :
                                    <span className="text-primary"> {sidee.createdBy.firstname} {sidee.createdBy.lastname}</span>
                                </Card.Subtitle>
                                <Card.Text>{sidee.description}</Card.Text>
                                <Button variant="primary"><NavLink style={{color:'white'}} to={`/user/idee/`+sidee._id}>voir</NavLink></Button>
                                </Card.Body>
                            </Card>
                    </Col>
                
                </>
              );
            })
          : null}
      </>
    );
  };

  return (
    <div>
      <Layout sidebar>
        <Container>
          <Row>
            <Col md={12}>
              <div
                className="alert alert-primary"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "20px",
                }}
              >
                <h4>
                  {" "}
                  <FontAwesomeIcon icon={faLightbulb} /> Liste des Idees{" "}
                </h4>
              </div>
              <hr />
            </Col>
          </Row>
          <Row>
           
              {/* here the table */}
              { renderIdees() }
            
          </Row>
        </Container>
      </Layout>
    </div>
  );
};
export default IdeesUser;
