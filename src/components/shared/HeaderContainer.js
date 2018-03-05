import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { logoutFailure, logoutSuccess } from "../../actions/authentication";
import { setPodcasts } from "../../actions/podcasts";

import { BASE_URL } from "../../constants";
import axios from "axios";

import Header from "./Header";

class HeaderContainer extends Component {
  logout = async () => {
    const { logoutFailure, logoutSuccess, setPodcasts } = this.props;

    await axios({
      url: `${BASE_URL}/api/authentication/logout`,
      method: "GET",
      responseType: "json",
      withCredentials: true
    })
      .then(response => {
        if (response.status === 200) {
          setPodcasts([]);
          return logoutSuccess();
        }
        return logoutFailure(`Error: ${response.status}`);
      })
      .catch(err => {
        logoutFailure(err);
      });
  };

  render() {
    const { authentication } = this.props;
    return <Header authentication={authentication} logout={this.logout} />;
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      logoutFailure,
      logoutSuccess,
      setPodcasts
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
