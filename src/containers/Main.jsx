import React, { useState, useEffect } from "react";
import List from "../components/list/List";
import fetchCharacters from "../services/fetchCharacters";

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacters().then((characters) => {
      setCharacters(characters);
      setLoading(false);
    });
  }, []);

  return <>{loading ? <>Loading...</> : <List characters={characters} />}</>;
};

export default Main;
