import React, { useState, useEffect } from "react";
import List from "../components/list/List";
import client from "../providers/graphql";
import { gql } from "apollo-boost";

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .query({
        query: gql`
          query {
            allVillagers {
              _id
              name
              image
              personality
              species
              phrase
              quote
              birthday
            }
          }
        `,
      })
      .then((characters) => {
        setCharacters(characters.data.allVillagers);
        setLoading(false);
      });
  }, []);

  return (
    <div data-testid="main-entrypoint">
      {loading ? (
        <div data-testid="loading">Loading...</div>
      ) : (
        <List characters={characters} />
      )}
    </div>
  );
};

export default Main;
