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

import { setPodcasts } from "../../actions/podcasts";
export class LoginPageContainer extends Component {
  state = {
    redirect: false,
    loginFailed: false
  };
  login = async userData => {
    const {
      loginAttempt,
      loginSuccess,
      loginFailure,
      setPodcasts
    } = this.props;

    loginAttempt();

    await axios({
      method: "POST",
      url: `${BASE_URL}/api/authentication/login`,
      data: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json"
      },
      responseType: "json",
      withCredentials: true
    })
      .then(response => {
        if (response.status === 200) {
          return response.data;
        }
      })
      .then(user => {
        if (user) {
          loginSuccess(user);
          setPodcasts(user.podcasts);
          this.setState({ redirect: true });
        } else {
          loginFailure(new Error("Authentication Failed"));
        }
      })
      .catch(err => {
        this.setState({ loginFailed: true });
      });
  };

  render() {
    const { redirect, loginFailed } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <LoginPage login={this.login} />
        {loginFailed && <p>Something went wrong</p>}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loginAttempt,
      loginFailure,
      loginSuccess,
      setPodcasts
    },
    dispatch
  );
};
export default connect(null, mapDispatchToProps)(LoginPageContainer);
