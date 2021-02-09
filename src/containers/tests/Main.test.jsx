global.fetch = require("node-fetch");

import React from "react";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "../Main";

describe("Main component", () => {
  afterEach(() => cleanup());
  it("tests that loading behavior works as expected", () => {
    render(<Main />);

    const loading = screen.getByTestId("loading");

    return waitFor(() => {
      expect(loading).toHaveTextContent("Loading...");
    });
  });

  it("tests that the List displays after loading is finished", () => {
    render(<Main />);

    const mainEntrypoint = screen.getByTestId("main-entrypoint");
    const listItem = screen.queryByTestId("unordered-list");

    setTimeout(() => {
      return waitFor(() => {
        expect(mainEntrypoint).toContainElement(listItem);
      });
    }, 5000);
  });
});
