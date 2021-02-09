import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/ItemDetails.css";

const ItemDetails = ({ character }) => {
  [character] = character;
  return (
    <div className={styles.ItemDetails}>
      {character.name}
      <img src={character.image} />
    </div>
  );
};

ItemDetails.propTypes = {
  character: PropTypes.array,
};

export default ItemDetails;
