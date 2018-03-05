import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import axios from "axios";

import {
  sessionCheckFailure,
  sessionCheckSuccess
} from "./actions/authentication";

import { setPodcasts } from "./actions/podcasts";

import { BASE_URL } from "./constants";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HeaderContainer from "./components/shared/HeaderContainer";
import LoginPageContainer from "./components/account/LoginPageContainer";
import RegisterPageContainer from "./components/account/RegisterPageContainer";
import PodcastsPageContainer from "./components/podcasts/PodcastsPageContainer";
import AddPodcastPageContainer from "./components/podcasts/AddPodcastPageContainer";

class App extends Component {
  componentWillMount() {
    this.checkSession();
  }

  checkSession = async () => {
    const { sessionCheckFailure, sessionCheckSuccess, setPodcasts } = this.props;

    await axios({
      url: `${BASE_URL}/api/authentication/checksession`,
      method: "GET",
      responseType: "json",
      withCredentials: true
    })
      .then(response => {
        if (response.status === 200) {
          return response.data;
        }
        return null;
      })
      .then(json => {
        if (json.username) {
          sessionCheckSuccess(json);
          setPodcasts(json.podcasts);
        } else {
          sessionCheckFailure();
        }
      })
      .catch(err => {
        sessionCheckFailure(err);
      });
  };

  render() {
    return (
      <Router>
        <Fragment>
          <HeaderContainer />
          <Switch>
            <Route path="/login" component={LoginPageContainer} />
            <Route path="/register" component={RegisterPageContainer} />
            <Route path="/podcast/add" component={AddPodcastPageContainer} />
            <Route path="/" component={PodcastsPageContainer} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      sessionCheckFailure,
      sessionCheckSuccess,
      setPodcasts
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(App);
