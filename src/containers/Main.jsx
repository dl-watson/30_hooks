import React, { useState, useEffect } from "react";
import List from "../components/list/List";

const Main = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // fetchCharacters()
  }, []);

  return (
    <>
      <List characters={characters} />
    </>
  );
};

export default Main;
