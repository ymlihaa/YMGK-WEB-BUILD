import React from "react";
import Media from "react-bootstrap/Media";
import logo from "../logo.png";

function Logo() {
  return (
    <Media className="logo">
      <img width={480} height={480} src={logo} alt="Generic placeholder" />
    </Media>
  );
}
export default Logo;
