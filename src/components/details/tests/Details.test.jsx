import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import Details from "../Details";

describe("Details component", () => {
  afterEach(() => cleanup());

  it("renders Details", () => {
    const { asFragment } = render(
      <Router>
        <Route path="/details/:name" component={Details} />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
