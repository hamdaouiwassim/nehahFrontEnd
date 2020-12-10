import React, { useEffect, useState } from "react";
//import moment from "moment";
import { Container, Row, Col, Card , Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../components/Layout";
import { getAllProjects } from "../../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink} from 'react-router-dom'
import {
  faListAlt,
  faPlusSquare,
  faCheckCircle,
  faBan,
  faSignInAlt,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

const UserProjects = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProjects());
  }, []);
  const projet = useSelector(state => state.project);
  const renderProjects = () => {
    return (
      <>
        {projet.projets.length > 0
          ? projet.projets.map((sprojet, index) => {
              return (
                <>
                  <Col md={4}>
                    <Card>
                      <Card.Body>
                        <Card.Title>{sprojet.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Creer par :
                          <span className="text-primary">
                            {" "}
                            {sprojet.createdBy.firstname}{" "}
                            {sprojet.createdBy.lastname}
                          </span>
                        </Card.Subtitle>
                        <Card.Text>{sprojet.description}</Card.Text>
                        <Button variant="primary"><NavLink style={{color:'white'}} to={`/user/projet/`+sprojet._id}>voir</NavLink></Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              );
            })
          : null}
      </>
    );
  }

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
                  <FontAwesomeIcon icon={faListAlt} />
                   Liste des Projets{" "}
                </h4>
              </div>
            </Col>
          </Row>
          <Row>
            
              {/* here the table */}
              {renderProjects()}
          
          </Row>
        </Container>
      </Layout>
    </div>
  );
};
export default UserProjects;
