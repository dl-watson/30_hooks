import fetch from "cross-fetch";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "https://fast-basin-17322.herokuapp.com/graphql",
  fetch,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
