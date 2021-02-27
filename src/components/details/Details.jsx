import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import client from "../../index";
import { gql } from "apollo-boost";

const Details = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    client
      .query({
        query: gql`
          query {
            villager (name: "${name}") {
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
      .then((character) => {
        setCharacter(character.data.villager);
        setLoading(false);
      });
  }, []);

  return (
    <>{loading ? <>Loading...</> : <ItemDetails character={character} />}</>
  );
};

export default Details;
