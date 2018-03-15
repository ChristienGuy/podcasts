import {
  PODCAST_ADD_PODCAST,
  PODCAST_SET_PODCASTS,
  PODCAST_UPDATE_PODCASTS_ATTEMPT
} from "constants/actionTypes";

import { PodcastState } from "constants/podcastState";

import type { PodcastAction } from "actions/podcasts";

export type Episode = {
  title: string,
  pubDate: Date,
  imageUrl: string,
  description: string,
  duration: string,
  enclosure: Object
  // lastPlayedPosition: Number,
};

export type Podcast = {
  title: string,
  imageUrl: string,
  webUrl: string,
  rssUrl: string,
  episodes: Episode[]
};

const initialState: {
  podcasts: Podcast[],
  podcastState: string
} = {
  podcasts: [],
  podcastState: PodcastState.NOT_LOADED
};

const reducer = (state = initialState, action: PodcastAction) => {
  switch (action.type) {
    case PODCAST_UPDATE_PODCASTS_ATTEMPT: {
      const newState = {
        ...state,
        podcastState: PodcastState.UPDATING
      };

      return newState;
    }
    case PODCAST_SET_PODCASTS: {
      const newState = {
        podcasts: action.podcasts,
        podcastState: PodcastState.LOADED
      };
      return newState;
    }
    case PODCAST_ADD_PODCAST: {
      const newState = {
        podcasts: [...state.podcasts, action.podcast]
      };
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
