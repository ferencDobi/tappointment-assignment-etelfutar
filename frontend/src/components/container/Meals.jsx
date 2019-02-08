import React from "react";
import { connect } from "react-redux";
import { Card } from "../presentational/Card";

const Meals = ({ meals }) => {
  return (
    <div>
      {meals.map(meal => <Card key={meal.id} meal={meal} />)}
    </div>
  );
}

const mapStateToProps = ({ meals }) => ({ meals });

export default connect(mapStateToProps)(Meals);