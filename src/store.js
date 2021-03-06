import { createStore, combineReducers } from "redux";
import type { Store } from "redux";

import playingEpisodeReducer from "reducers/playingEpisodesReducer";
import AuthenticationReducer from "reducers/authentication";
import PodcastsReducer from "reducers/podcasts";

const store: Store<any> = createStore(
  combineReducers({
    playingEpisode: playingEpisodeReducer,
    authentication: AuthenticationReducer,
    podcasts: PodcastsReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
