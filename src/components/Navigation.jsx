import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logoimage from "../assets/house.png";

function Navigation() {
    return (
        <Navbar expand="lg" style={{ backgroundColor: "white", padding: "20px" , border:"0.5px solid black"}}>
          <Container>
          <img
              src={logoimage}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Navigation;