import React, { Component } from "react";

import { connect } from "react-redux";

import PodcastsPage from "./PodcastsPage";

export class PodcastsPageContainer extends Component {
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

export default connect(mapStateToProps)(PodcastsPageContainer);
