import React, { Component }from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Title from "./Title";

class App extends Component{
  
  render() {
    return (
      <div className="App">
        <Title text="Kevin"></Title>
        <br />
        <Navbar>
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default App;
