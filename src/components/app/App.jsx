import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="main">
          <Router>
            <Switch></Switch>
          </Router>
        </div>
      </>
    );
  }
}
