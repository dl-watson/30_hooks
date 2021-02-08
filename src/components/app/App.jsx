import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../../containers/Main";

const App = () => {
  return (
    <>
      <div className="main">
        <Router>
          <Switch>
            <Route path="/" exact component={Main} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
