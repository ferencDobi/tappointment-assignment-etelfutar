import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
import { Card } from '../presentational/Card';

const Menu = ({ meals, addToCart }) => {
  return (
    <div className="menu">
      {meals.map(meal => <Card key={meal.id} meal={meal} addToCart={addToCart} />)}
    </div>
  );
}

const mapStateToProps = ({ meals, menu }) => {
  if (menu) {
    return { meals: meals.filter(meal => meal.category === menu) };
  } else return { meals };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => {
      dispatch(addToCart(item));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);