import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import {Container} from "semantic-ui-react";
import Items from "./components/Items"
import Navbar from "./components/Navbar";
import About from "./components/About"
import Home from "./components/Home";
import NoMatch from "./components/NoMatch"

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/items" components={Items} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
