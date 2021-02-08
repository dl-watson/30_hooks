import React, { useState, useEffect } from "react";
import List from "../components/list/List";
import fetchCharacters from "../services/fetchCharacters";

const Main = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters().then((characters) => {
      setCharacters(characters);
    });
  }, []);

  return (
    <>
      <List characters={characters} />
    </>
  );
};

export default Main;
