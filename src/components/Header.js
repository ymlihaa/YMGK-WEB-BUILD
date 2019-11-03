import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Media from "react-bootstrap/Media";
import logo from "../logo.png";
function Header() {
  return (
    <Navbar className="navbar" variant="light" bg="light">
      <Navbar.Brand>
        <Media>
          <img width={70} height={70} src={logo} alt="Generic placeholder" />
          <Media.Body>
            <h1>FIRAT ÜNİVERSİTESİ</h1>
          </Media.Body>
        </Media>
      </Navbar.Brand>
    </Navbar>
  );
}
export default Header;
