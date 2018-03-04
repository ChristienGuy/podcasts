import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BASE_URL } from "../../constants";

import LoginPage from "./LoginPage";
import axios from "axios";

export class LoginPageContainer extends Component {
  login = async userData => {
    const loginResponse = await axios({
      method: "POST",
      url: `${BASE_URL}/api/authentication/login`,
      data: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log("====================================");
    console.log(loginResponse);
    console.log("====================================");
  };

  render() {
    return (
      <div>
        <LoginPage login={this.login} />
      </div>
    );
  }
}

export default LoginPageContainer;
