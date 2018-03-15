import React, { Component } from "react";
import { connect } from "react-redux";
import EpisodesPage from "./EpisodesPage";

class EpisodesPageContainer extends Component {
  state = {
    podcast: {
      episodes: []
    }
  };

  componentWillReceiveProps(nextProps) {
    const { podcasts } = nextProps;

    this.setPodcast(podcasts);
  }

  componentWillMount() {
    const { podcasts } = this.props;
    this.setPodcast(podcasts);
  }

  setPodcast = podcasts => {
    const { match: { params: { name } } } = this.props;
    if (podcasts.length) {
      const podcast = podcasts.find(p => p.title === name);

      this.setState({
        podcast
      });
    }
  };

  render() {
    const { podcast } = this.state;
    const sortedEpisodes = podcast.episodes.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
    return <EpisodesPage episodes={sortedEpisodes} />;
  }
}

const mapStateToProps = ({ podcasts, authentication }) => ({
  podcasts: podcasts.podcasts,
  authentication
});

export default connect(mapStateToProps)(EpisodesPageContainer);
