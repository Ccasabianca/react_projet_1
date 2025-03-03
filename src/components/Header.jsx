import { Navbar } from "react-bootstrap";
import "../header.scss";

function Header() {
  return (
    <header>
      <Navbar bg="light" padding="2">
        <img
          className="logo"
          src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-
3262834_960_720.png"
          alt="Mexicain avec un chapeau qui joue de la guitare."
        />
        <nav className="ms-auto">
          <a href="index.html">Accueil</a>
        </nav>
      </Navbar>
    </header>
  );
}

export default Header;
