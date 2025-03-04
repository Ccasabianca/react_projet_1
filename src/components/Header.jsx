import { Navbar, Container } from "react-bootstrap";
import logo from '../assets/images/imgheader.webp';
import "../assets/styles/header.scss";

function Header() {
  return (
    <header>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>
            <img
              className="logo"
              src={logo}
              alt="Mexicain avec un chapeau qui joue de la guitare."
              height="50"
            />
          </Navbar.Brand>
          <a href="index.html">Accueil</a>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
