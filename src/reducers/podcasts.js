const initialState = {
  podcasts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PODCAST_SET_PODCASTS": {
      const newState = {
        podcasts: action.podcasts
      };
      return newState;
    }
    case "PODCAST_ADD_PODCAST": {
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
