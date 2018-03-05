import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import axios from "axios";

import { setPodcasts, addPodcast } from "../../actions/podcasts";

import PodcastsPage from "./PodcastsPage";

export class PodcastsPageContainer extends Component {
  componentWillMount() {
    // this.addPodcast("http://feed.syntax.fm/rss");
  }

  render() {
    const { podcasts } = this.props;

    return (
      <div>
        <PodcastsPage podcasts={podcasts} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    podcasts: state.podcasts.podcasts
  };
};

export default connect(mapStateToProps)(
  PodcastsPageContainer
);
