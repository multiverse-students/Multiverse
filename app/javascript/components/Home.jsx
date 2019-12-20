import React, { Component } from "react";
import "./home.css";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="commingSoonHomepagewrapper">
        <div>
          <h1 className="commingSoonHomepageTitle">WELCOME TO MULTIVERSE</h1>
          <h4 className="commingSoonHomepageSubtitle">
            open-source project from Microverse students
          </h4>
        </div>
      </div>
    );
  }
}

export default Homepage;
