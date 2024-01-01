import React from "react";

import css from "./Statistics.module.css";

const Statistics = () => {
  return (
    <div className={css.Container}>
      <h2>STATISTICS</h2>
      <div>Total Bikes : </div>
      <div>Available Bikes : </div>
      <div>Booked Bikes: </div>
      <div>Average bike cost: 0.00 UAH/hr.</div>
    </div>
  );
};

export { Statistics };
