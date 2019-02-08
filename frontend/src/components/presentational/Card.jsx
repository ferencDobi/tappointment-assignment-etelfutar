import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot, faCarrot } from '@fortawesome/free-solid-svg-icons';

export const Card = ({ meal }) => {
  return (
      <div>
        <h1>{meal.name}</h1>
        { meal.spicy && <FontAwesomeIcon icon={faPepperHot}/> }
        { meal.vegetarian && <FontAwesomeIcon icon={faCarrot}/> }
        <h3>{meal.description}</h3>
        <p>{meal.price}</p>
        <button>Megrendelem</button>
      </div>
  );
};
