import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot, faCarrot, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { baseURL } from '../../api/constants';

export const Card = ({ meal }) => {
  return (
      <div className="card">
        <h3>
          {meal.name}
          {meal.spicy && <FontAwesomeIcon icon={faPepperHot} title="Csípős" />}
          {meal.vegetarian && <FontAwesomeIcon icon={faCarrot} title="Vegetáriánus" />}
        </h3>
        <img src={`${baseURL}/images/image_001.jpeg`} alt="food" />
        <p className="description">{meal.description}</p>
        <div className="order">
          <p className="price">{meal.price} Ft</p>
          <button><FontAwesomeIcon icon={faShoppingBasket} /></button>
        </div>
      </div>
  );
};
