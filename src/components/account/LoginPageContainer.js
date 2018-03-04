import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BASE_URL } from "../../constants";

import LoginPage from "./LoginPage";
import axios from "axios";

import { Redirect } from "react-router-dom";
import {
  loginAttempt,
  loginFailure,
  loginSuccess
} from "../../actions/authentication";

export class LoginPageContainer extends Component {
  state = {
    redirect: false
  };
  login = async userData => {
    const { loginAttempt, loginSuccess, loginFailure } = this.props;

    loginAttempt();

    await axios({
      method: "POST",
      url: `${BASE_URL}/api/authentication/login`,
      data: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json"
      },
      responseType: 'json'
    })
      .then(response => {
        if (response.status === 200) {
          return response.data;
        }
      })
      .then(json => {
        if (json) {
          loginSuccess(json);
          this.setState({ redirect: true });
        } else {
          loginFailure(new Error("Authentication Failed"));
        }
      });
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <LoginPage login={this.login} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loginAttempt,
      loginFailure,
      loginSuccess
    },
    dispatch
  );
};
export default connect(null, mapDispatchToProps)(LoginPageContainer);
