import React, { Component } from "react";

import PodcastsPage from "./PodcastsPage";

import Axios from "axios";

export class PodcastsPageContainer extends Component {
  state = {
    podcasts: []
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
    await Axios.get(rssUrl, {
      responseType: "document"
    }).then(res => {
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
        <PodcastsPage podcasts={podcasts} />
      </div>
    );
  }
}

export default PodcastsPageContainer;
