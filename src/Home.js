import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Result from "./components/Result";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/result" component={Result} />
        </Switch>
      </div>
    </Router>
  );
}

export default Home;
