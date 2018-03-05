export const setPodcasts = podcasts => ({
  type: "PODCAST_SET_PODCASTS",
  podcasts
});

export const addPodcast = podcast => ({
  type: "PODCAST_ADD_PODCAST",
  podcast
});
