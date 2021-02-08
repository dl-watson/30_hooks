import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchCharacterByName from "../../services/fetchCharacterByName";
import ItemDetails from "./ItemDetails";

const Details = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    return fetchCharacterByName(name).then((character) => {
      setCharacter(character);
      setLoading(false);
    });
  }, []);

  return (
    <>{loading ? <>Loading...</> : <ItemDetails character={character} />}</>
  );
};

export default Details;
