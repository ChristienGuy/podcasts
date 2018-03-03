import { createStore, combineReducers } from "redux";

import playingEpisodeReducer from "./reducers/playingEpisodesReducer";

const store = createStore(
  combineReducers({ playingEpisode: playingEpisodeReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
