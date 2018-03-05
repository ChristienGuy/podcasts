import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import store from "./store";
import { Provider } from "react-redux";

import { injectGlobal } from "styled-components";

injectGlobal`
  body {
    box-sizing: border-box;
    padding-top: 60px;
  }
  * {
    box-sizing: inherit;
  }
`;
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
