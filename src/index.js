import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import UsersStore from "./store";
import registerServiceWorker from "./registerServiceWorker";

/**
 * <provider> adds connection between react and redux state
 * store maintains the state of application.
 * from react only actions should communicate with redux state (redux rule)
 * actions are instructions to redux store on how to get new state
 * in this project actions are created from action generators (actions/home.js) cause its generic way of writting actions
 * reducers should be pure functions.. means we can know the output of function all the time (redux rule).
 * from reducer, always new state is returned instead mutating the existing state
 */
ReactDOM.render(
  <Provider store={UsersStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
