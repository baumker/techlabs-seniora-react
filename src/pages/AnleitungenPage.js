import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Navigation from "../comps/Navigation";
import Footer from "../comps/Footer";
import { Link } from "react-router-dom";

import "./AnleitungenPage.css";

import WhatsAppLogo from "../assets/WhatsApp.svg";
import ZoomLogo from "../assets/zoom.svg";
import BahnLogo from "../assets/bahn.svg";

function AnleitungenPage() {
  return (
    <div>
      <Navigation />
      <Container className="col-xxl-8 px-4 py-5">
        <h1>Ich interessiere mich für</h1>
        <p>
          Hier finden Sie einfache Anleitungen für beliebte Anwendungen wie
          WhatsApp, die Bahn App und Zoom, die speziell für Senioren entwickelt
          wurden. Entdecken Sie, wie Sie mit Familie und Freunden in Kontakt
          bleiben, Ihre Reisen planen und an virtuellen Treffen teilnehmen
          können – alles in verständlicher Sprache und Schritt für Schritt
          erklärt!
        </p>
      </Container>
      <Container className="col-xxl-8 px-4">
        <h2>Klicken Sie auf eine App, die Sie kennenlernen wollen</h2>
      </Container>
      <Container className="col-xxl-8 px-4">
        <Row>
          <Col col-sm>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={WhatsAppLogo}
                className="card-image"
              />
              <Card.Body>
                <Card.Title>Whatsapp</Card.Title>
                <Card.Text>
                  Einfache WhatsApp-Anleitungen für Senioren, um mit Familie und
                  Freunden in Kontakt zu bleiben!
                </Card.Text>
                <Button variant="primary" as={Link} to="/whatsapp">
                  Zu den Anleitungen
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col col-sm>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={ZoomLogo} className="card-image" />
              <Card.Body>
                <Card.Title>Zoom</Card.Title>
                <Card.Text>
                  Entdecken Sie leicht verständliche Anleitungen für Zoom, um
                  mühelos an Videoanrufen und Online-Meetings teilzunehmen!
                </Card.Text>
                <Button variant="primary" as={Link} to="/zoom">
                  Zu den Anleitungen
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col col-sm>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={BahnLogo} className="card-image" />
              <Card.Body>
                <Card.Title>Bahn</Card.Title>
                <Card.Text>
                  Nutzen Sie unsere einfachen Anleitungen für die Bahn App, um
                  Ihre Reisen bequem zu planen und Tickets zu buchen!
                </Card.Text>
                <Button variant="primary" as={Link} to="/bahn">
                  Zu den Anleitungen
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default AnleitungenPage;
