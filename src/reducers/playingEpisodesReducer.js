const initialState = {
  episode: null,
  position: 0
};

const playingEpisodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PLAYING_EPISODE":
      return {
        episode: action.episode,
        position: 0
      };
    default:
      return state;
  }
};

export default playingEpisodeReducer;
