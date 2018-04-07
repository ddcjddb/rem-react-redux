import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import routes from "./component/routes";
import App from "./component/App";
import Greetings from "./component/Greetings";
import SignupPage from "./component/SignupPage";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducers = (state = {}) => state;

const store = createStore(reducers, applyMiddleware(thunk));

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
