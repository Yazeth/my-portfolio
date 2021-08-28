import React, { Component } from "react";
import "./About.scss";

class About extends Component {
  
  render() {
    return (
      <div>
        <br />
        <a href="https://github.com/Yazeth">
          <img className="github" src={process.env.PUBLIC_URL + "GitHub_Logo.png"} alt=""/>
        </a>
        <br />
        <a href="https://www.linkedin.com/in/kevin-le-cs/">
          <img className="linkedin" src={process.env.PUBLIC_URL + "Linkedin-Logo.png"} alt=""/>
        </a>
      </div>
    );
  }
}

export default About;