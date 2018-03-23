import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setPodcasts, updatePodcastsAttempt } from "../../actions/podcasts";
import axios from "axios";

import PodcastsPage from "./PodcastsPage";

import { BASE_URL } from "../../constants/index";

export class PodcastsPageContainer extends Component<{}, {}> {
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

  render() {
    const { podcasts } = this.props;
    return (
      <div>
        <PodcastsPage
          podcasts={podcasts}
          updatePodcasts={this.updatePodcasts}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setPodcasts,
      updatePodcastsAttempt
    },
    dispatch
  );
};

const mapStateToProps = state => {
  return {
    podcasts: state.podcasts.podcasts
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  PodcastsPageContainer
);
