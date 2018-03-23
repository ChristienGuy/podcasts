import React, { Fragment } from "react";
import { connect } from "react-redux";
import { format } from "date-fns";
import { SET_PLAYING_EPISODE } from "../actions";


const Episode = ({ episode, setPlayingEpisode }) => (
  <Fragment>
    <h3
      onClick={() => {
        setPlayingEpisode(episode);
      }}
    >
      <Date dateString={episode.pubDate} /> - {episode.title}
    </h3>
  </Fragment>
);

const Date = ({ dateString }) => {
  return (
    <div>
      { format(dateString, "MMM - d") }
    </div>
  )
};

const mapStateToProps = ({ playingEpisode }) => {
  return {
    playingEpisode: playingEpisode.episode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPlayingEpisode: episode => {
      dispatch(SET_PLAYING_EPISODE(episode));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Episode);
