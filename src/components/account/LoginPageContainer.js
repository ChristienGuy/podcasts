import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BASE_URL } from "../../constants";

import LoginPage from "./LoginPage";
import Axios from "axios";

export class LoginPageContainer extends Component {
  login = async userData => {
    const loginResponse = Axios.post(`${BASE_URL}/api/authentication/login`);
  };

  render() {
    return (
      <div>
        <LoginPage login={this.login} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {};

export default LoginPageContainer;
