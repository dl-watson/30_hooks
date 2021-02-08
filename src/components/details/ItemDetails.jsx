import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const ItemDetails = ({ character }) => {
  [character] = character;
  return (
    <div>
      {character.name}
      <img src={character.image} />
    </div>
  );
};

ItemDetails.propTypes = {
  character: PropTypes.array,
};

export default ItemDetails;
