import React from "react";
import { ApolloProvider } from "@apollo/client";
import { render } from "react-dom";
import App from "./components/app/App";
import client from "./providers/graphql";

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
