import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import Player from "../Player";

const PodcastsPage = ({ podcasts }) => {
  return (
    <div>
      <Player />
      {podcasts.length ? (
        <PodcastsList podcasts={podcasts} />
      ) : (
        <Link to="/podcast/add">No podcasts yet, add one!</Link>
      )}
    </div>
  );
};

const PodcastsList = ({ podcasts }) => (
  <Fragment>
    {podcasts.map(podcast => <Podcast key={podcast.title} podcast={podcast} />)}
  </Fragment>
);

const Podcast = ({ podcast }) => (
  <div>
    <Link to={`/podcast/${podcast.title}`}>
      <img style={{ width: 100 }} src={podcast.image.url} alt="" />
    </Link>
    {/* <EpisodeList episodes={podcast.episodes} /> */}
  </div>
);

export default PodcastsPage;
