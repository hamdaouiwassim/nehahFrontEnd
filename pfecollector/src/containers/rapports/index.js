import React, { useEffect , useState} from "react";
import { Container, Row, Col, Table, Pagination } from "react-bootstrap";
import { useDispatch , useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { getAllRapports , DeleteRapport } from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faLightbulb,
  faPlusSquare,
  faCheckCircle,
  faBan,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

const Rapports = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRapports());
  }, []);

  const deleteRapport = (rapportId) => {
    /* eslint no-restricted-globals:0 */
    if ( confirm(`voulez-vous vraiment supprimer cette rapport`) ){
    dispatch(DeleteRapport(rapportId))
    dispatch(getAllRapports());
    }
  }
  const rapport = useSelector((state) => state.rapport);
  const renderRapports = () => {
    return (
      <Table responsive="sm" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Projet</th>
            <th>Document</th>
            <th>visibilite</th>
            <th>FeedBack</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rapport.rapports.length > 0
            ? rapport.rapports.map((rr, index) => {
                return (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{rr.projet.name}</td>
                      <td>
                        <button className="btn btn-primary"> Voir </button>{" "}
                      </td>
                      <td>{rr.visibilite}</td>

                      <td>{rr.feedback}</td>
                      <td>
                        <button
                          class="btn btn-danger"
                          onClick={() => deleteRapport(rr._id)}
                        >
                          <FontAwesomeIcon icon={faBan} />
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })
            : null}
        </tbody>
      </Table>
    );
  };


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
                  <FontAwesomeIcon icon={faBook} /> Liste des Rapports{" "}
                </h4>
                
              </div>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              {/* here the table */}
              {renderRapports()}
      
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};
export default Rapports
