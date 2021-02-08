import React, { useState, useEffect } from "react";
import fetchCharacterByName from "../../services/fetchCharacterByName";
import ItemDetails from "./ItemDetails";

const Details = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return fetchCharacterByName().then((character) => {
      setCharacter(character);
      setLoading(false);
    });
  });

  return (
    <>{loading ? <>Loading...</> : <ItemDetails character={character} />}</>
  );
};

Details.propTypes = {};

export default Details;
