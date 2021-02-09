import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Audio from "react-audio-player";
import Main from "../../containers/Main";
import Details from "../details/Details";

const App = () => {
  return (
    <>
      <Router>
        <Audio
          src="public/audio/background-music.mp4"
          autoPlay
          loop={true}
          volume={0.2}
        />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/details/:name" component={Details} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
