import React from "react";

import { useAppSelector } from "../../hooks";
import css from "./Statistics.module.css";

const Statistics = () => {
  const { bicycles, availableCount, busyCount, averageCost } = useAppSelector(
    (state) => state.bicycleReducer,
  );

  return (
    <div className={css.Container}>
      <h2>STATISTICS</h2>
      <div>Total Bikes : {bicycles.length}</div>
      <div>Available Bikes : {availableCount}</div>
      <div>Booked Bikes: {busyCount}</div>
      <div>Average bike cost: {averageCost}.00 UAH/hr.</div>
    </div>
  );
};

export { Statistics };
