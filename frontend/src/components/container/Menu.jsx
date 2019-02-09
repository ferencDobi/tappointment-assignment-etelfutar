import React from "react";
import { connect } from "react-redux";
import { Card } from "../presentational/Card";

const Menu = ({ meals }) => {
  return (
    <div className="menu">
      {meals.map(meal => <Card key={meal.id} meal={meal} />)}
    </div>
  );
}

const mapStateToProps = ({ meals, menu }) => {
  if (menu) {
    return { meals: meals.filter(meal => meal.category === menu) };
  } else return { meals };
};

export default connect(mapStateToProps)(Menu);