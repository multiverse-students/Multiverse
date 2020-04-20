import React, { Component } from "react";
import "./home.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push("/registration");
    }
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default withRouter(connect(mapStateToProps, null)(Homepage));
