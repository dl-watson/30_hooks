import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/ItemDetails.css";

const ItemDetails = ({ character }) => {
  [character] = character;
  return (
    <div className={styles.ItemDetails}>
      {character.name}
      <img src={character.image} />
      <div className={styles.details}>
        <p>Quote: {character.quote}</p>
        <p>Personality: {character.personality}</p>
        <p>Birthday: {character.birthday}</p>
        <p>Species: {character.species}</p>
        <p>Phrase: {character.phrase}</p>
      </div>
    </div>
  );
};

ItemDetails.propTypes = {
  character: PropTypes.array,
};

export default ItemDetails;
