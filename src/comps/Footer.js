import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="fixed-bottom">
      <Navbar
        bg="light"
        expand="lg"
        className="d-flex justify-content-center flex-column mt-auto"
      >
        <Container className="d-flex justify-content-center flex-column">
          <Nav>
            <Nav.Link as={Link} to="/">
              Start
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              Über uns
            </Nav.Link>
            <Nav.Link as={Link} to="/anleitungen">
              Anleitungen
            </Nav.Link>
            <Nav.Link as={Link} to="/#">
              Impressum
            </Nav.Link>
            <Nav.Link as={Link} to="/#">
              Datenschutz
            </Nav.Link>
          </Nav>
        </Container>
        <Container className="d-flex justify-content-center">
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} Seniora</p>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
