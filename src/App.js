import React, { Component, Fragment } from "react";

import Player from "./components/Player";
import Episode from "./components/Episode";
import axios from "axios";

class App extends Component {
  state = {
    podcasts: [],
    rssUrl: ""
  };

  componentWillMount() {
    this.addPodcast("http://feed.syntax.fm/rss");
  }

  submitPodcastForm = e => {
    e.preventDefault();
    this.addPodcast(this.state.rssUrl);
    this.setState({ rssUrl: "" });
  };

  addPodcast = async rssUrl => {
    const podcast = await this.getPodcast(rssUrl);
    this.setState(state => ({
      podcasts: [...state.podcasts, podcast]
    }));
  };

  getPodcast = async rssUrl => {
    let podcast = {};
    await axios
      .get(rssUrl, {
        responseType: "document"
      })
      .then(res => {
        podcast = {
          title: res.data.querySelector("title").textContent,
          image: res.data.querySelector("image url").textContent,
          link: res.data.getElementsByTagName("link")[0].textContent,
          episodes: this.getEpisodes(res.data)
        };
      });

    return podcast;
  };

  getEpisodes = podcastXml => {
    const episodeElements = podcastXml.querySelectorAll("channel item");
    const episodes = [];

    episodeElements.forEach(element => {
      episodes.push({
        title: element.querySelector("title").textContent,
        pubDate: element.querySelector("pubDate").textContent,
        image: element
          .getElementsByTagName("itunes:image")[0]
          .getAttribute("href"),
        description: element.querySelector("description").textContent,
        duration: element.getElementsByTagName("itunes:duration")[0]
          ? element.getElementsByTagName("itunes:duration")[0].textContent
          : "",
        link: element.querySelector("link").textContent
      });
    });

    return episodes;
  };

  render() {
    const { podcasts, rssUrl } = this.state;
    return (
      <div>
        <form onSubmit={this.submitPodcastForm}>
          <input
            type="text"
            name="url"
            value={rssUrl}
            onChange={e => {
              this.setState({ rssUrl: e.target.value });
            }}
          />
          <input type="submit" />
        </form>
        <Player />
        <PodcastsList podcasts={podcasts} />
      </div>
    );
  }
}

const PodcastsList = ({ podcasts }) => (
  <Fragment>
    {podcasts.map(podcast => <Podcast key={podcast.title} podcast={podcast} />)}
  </Fragment>
);

const Podcast = ({ podcast }) => (
  <div>
    <h2>{podcast.title}</h2>
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

export default App;
