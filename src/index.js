import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import routes from "./component/routes";
import App from "./component/App";
import Greetings from "./component/Greetings";
import SignupPage from "./component/SignupPage";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../src/component/rootReducer";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    //使用Chrome的redux 插件
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/" exact component={Greetings} />
        <Route path="/signup" component={SignupPage} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

//
