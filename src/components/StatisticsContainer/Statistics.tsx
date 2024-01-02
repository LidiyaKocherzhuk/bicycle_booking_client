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
      <div>
        Total Bikes : <b>{bicycles.length}</b>
      </div>
      <div>
        Available Bikes : <b>{availableCount}</b>
      </div>
      <div>
        Booked Bikes: <b>{busyCount}</b>
      </div>
      <div>
        Average bike cost: <b>{averageCost}</b>.00 UAH/hr.
      </div>
    </div>
  );
};

export { Statistics };
