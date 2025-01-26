import Navigation from "../comps/Navigation";
import Footer from "../comps/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

import ProgressBar from "react-bootstrap/ProgressBar";

function NextStepsPage() {
  const now = 70;

  const newBadge = (des, style) => {
    return <Badge bg={style}>{des}</Badge>;
  };

  return (
    <div>
      <Navigation />
      <Container className="col-xxl-8 px-4 py-5">
        <Row>
          <Col>
            <h1>Milestone Recap</h1>

            <h2 className="mt-4">Projektfortschritt</h2>
            <ProgressBar now={now} label={`${now}%`} />
          </Col>
          <h2 className="mt-4">Nächste Schritte</h2>
          <Col className="col-6">
            <ListGroup>
              <ListGroup.Item action>
                Überarbeitung der Screenshots und Beschreibungen
                {newBadge("Update")}
              </ListGroup.Item>
              <ListGroup.Item action>
                Weitere Anleitungen hinzufügen
                {newBadge("New", "success")}
              </ListGroup.Item>
              <ListGroup.Item action>
                Refractoring der Hauptkomponente {newBadge("Update")}
              </ListGroup.Item>
              <ListGroup.Item action>
                Anbindung einer Datenbank {newBadge("New", "success")}
              </ListGroup.Item>
              <ListGroup.Item action>
                Fortschritt in den einzlnen Anleitungen speichern
                {newBadge("New", "success")}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default NextStepsPage;
