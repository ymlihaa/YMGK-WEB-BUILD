import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Logo from "./components/Logo";
import WrappedNormalLoginForm from "./components/Login";
import Tablo from "./components/Table";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container className="container">
      <Header />
      <Logo />
      <WrappedNormalLoginForm />
      <Tablo />
    </Container>
  );
}

export default App;
