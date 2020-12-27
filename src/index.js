import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { myReducer } from "./reducers/myReducer";
import thunk from "redux-thunk";
import { reactReduxFirebase , getFirebase } from "react-redux-firebase";
import {  reduxFirestore , getFirestore } from "redux-firestore";
import { firebaseApp } from "./firebase/fbconfig";




const store = createStore(
  myReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase , getFirestore})),
    reactReduxFirebase(firebaseApp),
    reduxFirestore(firebaseApp),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {" "}
      <App />{" "}
    </Router>
  </Provider>,
  document.getElementById("root")
);
