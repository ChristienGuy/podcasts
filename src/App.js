import React, { Component } from "react";

import LoginPageContainer from "./components/account/LoginPageContainer";
import PodcastsPageContainer from "./components/podcasts/PodcastsPageContainer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginPageContainer} />
          <Route path="/" component={PodcastsPageContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
