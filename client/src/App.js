import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import {Container} from "semantic-ui-react";
import Items from "./components/Items"
import Navbar from "./components/Navbar";
import About from "./components/About"
import FetchUser from "./components/FetchUser"
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Register from "./components/Register";
import Login from "./components/Login"
// import ProtectedRoute from "/components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <FetchUser>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path = "/register" component={Register} />
            <Route exact path = "/login" component={Login} />
            <Route exact path="/about" component={About} />
            <Route exact path="/items" components={Items} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </Container>
    </>
  );
}

export default App;
