import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import axios from "axios";

import {
  sessionCheckFailure,
  sessionCheckSuccess,
  sessionCheckAttempt
} from "./actions/authentication";

import { AuthenticationState } from "./constants/authenticationState";

import { setPodcasts, updatePodcastsAttempt } from "./actions/podcasts";

import { BASE_URL } from "./constants";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Player from "./components/shared/Player";

import HeaderContainer from "./components/shared/HeaderContainer";
import LoginPageContainer from "./components/account/LoginPageContainer";
import RegisterPageContainer from "./components/account/RegisterPageContainer";
import PodcastsPageContainer from "./components/podcasts/PodcastsPageContainer";
import AddPodcastPageContainer from "./components/podcasts/AddPodcastPageContainer";
import EpisodesPageContainer from "./components/podcasts/EpisodesPageContainer";

export class App extends Component {
  componentWillMount() {
    this.checkSession();
  }

  updatePodcasts = e => {
    const { setPodcasts, updatePodcastsAttempt } = this.props;

    updatePodcastsAttempt();
    axios({
      method: "GET",
      url: `${BASE_URL}/api/podcast/update`,
      withCredentials: true
    })
      .then(response => {
        if (response.status === 200) {
          return response.data;
        }
        return null;
      })
      .then(podcasts => {
        setPodcasts(podcasts);
      });
  };

  checkSession = async () => {
    const {
      sessionCheckFailure,
      sessionCheckSuccess,
      sessionCheckAttempt,
      setPodcasts
    } = this.props;

    sessionCheckAttempt()

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
          // session is checked succesfully, go check for updates to podcasts
          this.updatePodcasts()
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
          {this.props.authState === AuthenticationState.CHECKING_SESSION &&
            <p>Loading...</p>
          }
          {this.props.authState === AuthenticationState.LOGGED_IN && 
            <Fragment>
              <Switch>
                <Route path="/login" component={LoginPageContainer} />
                <Route path="/register" component={RegisterPageContainer} />
                <Route
                  path="/podcast/add"
                  component={AddPodcastPageContainer}
                />
                <Route
                  path="/podcast/:name"
                  component={EpisodesPageContainer}
                />
                <Route path="/" component={PodcastsPageContainer} />
              </Switch>
              <Player />
            </Fragment>
          }
          {this.props.authState === AuthenticationState.NOT_AUTHENTICATED && 
            <Fragment>
              <Switch>
                <Route path="/" component={LoginPageContainer} />
                <Route path="/login" component={LoginPageContainer} />
              </Switch>
            </Fragment>
          }
        </Fragment>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      sessionCheckAttempt,
      sessionCheckFailure,
      sessionCheckSuccess,
      setPodcasts,
      updatePodcastsAttempt
    },
    dispatch
  );
};

const mapStateToProps = state => {
  return {
    authState: state.authentication.authenticationState
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
