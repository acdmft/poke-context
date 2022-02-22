import React from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home |</Link>
        <Link to="/login">Login |</Link>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

