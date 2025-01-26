import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Seniora
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              Über uns
            </Nav.Link>
            <NavDropdown title="Anleitungen" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/anleitungen">
                Übersicht
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/whatsapp">
                WhatsApp
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/bahn">
                Bahn
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/zoom">
                Zoom
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
