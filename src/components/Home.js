import React, { Component } from "react";
import "./About.scss"

class Home extends Component {

  render() {
    return (
      <div>
        <img className="profile" src={`${process.env.PUBLIC_URL}kevin-le.jpeg`} alt=""/>
      </div>
    );
  }
}

export default Home;