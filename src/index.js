import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import routes from "./component/routes";
import App from "./component/App";
import Greetings from "./component/Greetings";
import SignupPage from "./component/SignupPage";

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/" exact component={Greetings} />
      <Route path="/signup" component={SignupPage} />
    </div>
  </Router>,
  document.getElementById("root")
);

//
