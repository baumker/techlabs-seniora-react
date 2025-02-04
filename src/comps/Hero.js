import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import HeroImage from "../assets/hero.png";
import { Outlet, Link } from "react-router-dom";

function Hero() {
  return (
    <Container className="col-xxl-8 px-4 py-5">
      <Row className="align-items-center g-5 py-5">
        <Col>
          <h1>Seniora – Digitale Brücken für ein aktives Leben</h1>
          <p>
            Bei Seniora setzen wir uns dafür ein, älteren Menschen den Zugang zu
            digitalen Produkten zu erleichtern. Ob WhatsApp, Bahn-Apps oder Zoom
            – wir bieten Unterstützung und Schulungen, damit Sie die Vorteile
            der digitalen Welt voll ausschöpfen können. Gemeinsam schaffen wir
            Verbindungen und fördern die Selbstständigkeit im Alltag. Lassen Sie
            uns gemeinsam die digitale Zukunft gestalten!
          </p>
          <Button variant="primary" as={Link} to="/anleitungen">
            Zu den Anleitungen
          </Button>
          <br />
          <br />
        </Col>
        <Col className="order-1 order-md-2">
          <Image src={HeroImage} width={400} height={400} />
        </Col>
      </Row>
      <Outlet />
    </Container>
  );
}

export default Hero;
