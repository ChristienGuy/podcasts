import {
  PODCAST_ADD_PODCAST,
  PODCAST_SET_PODCASTS,
  PODCAST_UPDATE_PODCASTS_ATTEMPT
} from "../constants/actionTypes";
// import type { Podcast } from "../reducers/podcasts";
import type { Podcast } from "reducers/podcasts";

export type PodcastAction = {
  type: string,
  podcasts?: Podcast[],
  podcast?: Podcast
};

export const setPodcasts = (podcasts: Podcast[]): PodcastAction => ({
  type: PODCAST_SET_PODCASTS,
  podcasts
});

export const addPodcast = (podcast: Podcast): PodcastAction => ({
  type: PODCAST_ADD_PODCAST,
  podcast
});

export const updatePodcastsAttempt = (): PodcastAction => ({
  type: PODCAST_UPDATE_PODCASTS_ATTEMPT
});
