import { createStore, combineReducers } from "redux";

import playingEpisodeReducer from "./reducers/playingEpisodesReducer";
import AuthenticationReducer from "./reducers/authentication";

const store = createStore(
  combineReducers({ 
    playingEpisode: playingEpisodeReducer,
    authentication: AuthenticationReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
