import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Logo from "./components/Logo";
import WrappedNormalLoginForm from "./components/Login";

function App() {
  return (
    <div>
      <Header />

      <Container className="container">
        <Logo />
        <WrappedNormalLoginForm />
      </Container>
    </div>
  );
}

export default App;
