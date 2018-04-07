import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route path="/" component={NavigationBar} />
        <Route path="/" component={this.props.children} />
      </div>
    );
  }
}

export default App;
