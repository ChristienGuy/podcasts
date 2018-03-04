import React, { Fragment } from "react";

import Episode from "../Episode";
import Player from "../Player";

const PodcastsPage = ({ podcasts }) => {
  return (
    <div>
      {/* <form onSubmit={submitPodcastForm}>
        <input
          type="text"
          name="url"
          value={rssUrl}
          onChange={e => {
            this.setState({ rssUrl: e.target.value });
          }}
        />
        <input type="submit" />
      </form> */}
      <Player />
      <PodcastsList podcasts={podcasts} />
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
