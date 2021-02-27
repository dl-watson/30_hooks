import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import styles from "./styles/List.css";

const List = ({ characters }) => {
  const characterList = characters.map((character) => {
    return (
      <li key={uuid()} className={styles.listItem}>
        {character.name}
        <Link to={`/details/${character.name}`}>
          <img src={character.image} />
        </Link>
      </li>
    );
  });

  return (
    <ul data-testid="unordered-list" className={styles.List}>
      {characterList}
    </ul>
  );
};

List.propTypes = {
  characters: PropTypes.array,
};

export default List;
