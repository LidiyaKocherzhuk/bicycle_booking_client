import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { bicycleActions } from "../../../redux";
import { Bicycle } from "../Bicycle";
import css from "./Bicycles.module.css";

const Bicycles = () => {
  const { bicycles } = useAppSelector((state) => state.bicycleReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(bicycleActions.getAll());
  }, []);

  return (
    <div className={css.Container}>
      {bicycles.map((bicycle) => (
        <Bicycle key={bicycle._id} bicycle={bicycle} />
      ))}
    </div>
  );
};

export { Bicycles };
