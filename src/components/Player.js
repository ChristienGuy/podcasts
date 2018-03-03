import React, { Fragment } from "react";
import { connect } from "react-redux";

export const Player = ({ episode }) => {
  return (
    <div>
      {episode && (
        <Fragment>
          <h2>{episode.title}</h2>
          <audio src={episode.link} />
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = ({ playingEpisode }) => {
  return {
    episode: playingEpisode.episode
  };
};

export default connect(mapStateToProps)(Player);
