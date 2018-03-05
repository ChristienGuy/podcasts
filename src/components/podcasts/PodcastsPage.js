import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import Episode from "../Episode";
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
    <img style={{ width: 100 }} src={podcast.image} alt="" />
    <EpisodeList episodes={podcast.episodes} />
  </div>
);

const EpisodeList = ({ episodes }) => (
  <ul>
    {episodes.map((episode, index) => (
      <li key={index}>
        <Episode episode={episode} />
      </li>
    ))}
  </ul>
);

export default PodcastsPage;
