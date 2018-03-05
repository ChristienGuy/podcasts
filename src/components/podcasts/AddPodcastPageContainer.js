import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addPodcast } from "../../actions/podcasts";
import { BASE_URL } from "../../constants";

import { Redirect } from "react-router-dom";

import AddPodcastPage from "./AddPodcastPage";

class AddPodcastPageContainer extends Component {
  state = {
    podcastAddSuccesful: false,
    podcastAddFailure: false
  };

  submitPodcastForm = e => {
    e.preventDefault();
    this.addPodcast(e.target.url.value);
  };

  addPodcast = async url => {
    const { addPodcast } = this.props;

    try {
      const response = await axios({
        url: `${BASE_URL}/api/podcast/add`,
        data: {
          url
        },
        method: "POST",
        responseType: "json",
        withCredentials: true
      });

      addPodcast(response.data);

      this.setState({
        podcastAddSuccesful: true
      });
    } catch (err) {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    }
  };

  render() {
    const { podcastAddSuccesful, podcastAddFailure } = this.state;
    if (podcastAddSuccesful) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <AddPodcastPage submitPodcastForm={this.submitPodcastForm} />
        {podcastAddFailure && <p>Whoops, something went wrong</p>}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addPodcast
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(AddPodcastPageContainer);
