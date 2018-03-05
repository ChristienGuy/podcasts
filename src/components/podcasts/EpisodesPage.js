import React from 'react';
import Episode from "../Episode";

const EpisodesPage = ({episodes}) => {
  return (
    <div>
      <EpisodeList episodes={episodes}/>
    </div>
  );
};

const EpisodeList = ({ episodes }) => (
  <ul>
    {episodes.map((episode, index) => (
      <li key={index}>
        <Episode episode={episode} />
      </li>
    ))}
  </ul>
);

export default EpisodesPage;