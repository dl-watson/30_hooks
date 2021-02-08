import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import List from "../List";

describe("List component", () => {
  afterEach(() => cleanup());
  it("renders List", () => {
    const { asFragment } = render(
      <Router>
        <List characters={[{}]} />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
