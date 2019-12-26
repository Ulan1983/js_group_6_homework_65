import React from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import {BrowserRouter, Switch} from "react-router-dom";
import {Container} from "reactstrap";

const App = () => (
    <BrowserRouter>
      <Container>
        <Layout/>
        <Switch>

        </Switch>
      </Container>
    </BrowserRouter>
  );


export default App;
