import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from "../assets/images/imgheader.webp";
import "../assets/styles/header.scss";

function Header({ cartCount }) {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <img
              className="logo"
              src={logo}
              alt="Mexicain avec un chapeau qui joue de la guitare."
              height="50"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="index.html">Accueil</Nav.Link>
              <Nav.Link href="#">Panier ({cartCount})</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
