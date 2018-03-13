import React, { Fragment } from "react";

import { Link } from "react-router-dom";

const PodcastsPage = ({ podcasts }) => {
  return (
    <div>
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
    {podcasts.map((podcast, index) => <Podcast key={index} podcast={podcast} />)}
  </Fragment>
);

const Podcast = ({ podcast }) => (
  <Link to={`/podcast/${podcast.title}`}>
    <img style={{ width: 100 }} src={podcast.imageUrl} alt="" />
  </Link>
);

export default PodcastsPage;
