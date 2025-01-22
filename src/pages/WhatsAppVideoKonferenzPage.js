import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function WhatsAppUebersichtPage() {
  return (
    <div>
      <Container className="col-xxl-8 px-4 py-5">
        <h1>Was wollen Sie lernen?</h1>
        <p>
          WhatsApp ist eine benutzerfreundliche Messaging-App, die es Ihnen
          ermöglicht, mit Freunden und Familie in Kontakt zu bleiben. Besonders
          für Senioren bietet WhatsApp eine einfache Möglichkeit, Nachrichten zu
          senden, Anrufe zu tätigen und Bilder zu teilen. In dieser Übersicht
          finden Sie die wichtigsten Funktionen von WhatsApp, die Ihnen helfen,
          die App besser zu verstehen und optimal zu nutzen. Egal, ob Sie neue
          Kontakte knüpfen oder bestehende Beziehungen pflegen möchten, WhatsApp
          macht die Kommunikation einfach und unkompliziert.
        </p>
      </Container>
      <Container className="col-xxl-8 px-4 ">
        <Row>
          <Col className="col-4">
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Einen Kontakt hinzufügen
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Eine Videokonferenz durchführen
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Die Chat-Funktion sehen
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Sprachnachricht senden
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Videos und Bilder teilen
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WhatsAppUebersichtPage;
