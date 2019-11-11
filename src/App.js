import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Image from "./components/Image";
import logo from "./logo.png";
import WrappedNormalLoginForm from "./components/Login";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Image heigth={480} width={480} path={logo} />
        <WrappedNormalLoginForm />
      </div>
    </div>
  );
}

export default App;
