import React from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container} from "reactstrap";
import Pages from "./containers/Pages/Pages";
import EditPage from "./containers/EditPage/EditPage";

const App = () => (
    <BrowserRouter>
      <Container>
        <Layout/>
        <Switch>
          <Route path="/" exact component={Pages}/>
          <Route path="/pages/admin" component={EditPage}/>
          <Route path="/pages/:id" component={Pages}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );


export default App;
