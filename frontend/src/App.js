import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateMeme from "./components/create-meme";
import EditMeme from "./components/edit-meme";
import MemeList from "./components/meme-list";
import ShowMeme from "./components/show-meme"
import LandingPage from "./components/landing-page"

function App() {
  return (<Router>
    <div className="App">
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route path="/memes/:id/edit" component={EditMeme} />
                <Route path="/memes/:id" component={ShowMeme} />
                <Route path="/memes" component={MemeList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;