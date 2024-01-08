import "./Bicycles.css";

import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { bicycleActions } from "../../../redux";
import { Bicycle } from "../Bicycle";

const Bicycles = () => {
  const { bicycles } = useAppSelector((state) => state.bicycleReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(bicycleActions.getAll());
  }, []);

  useEffect(() => {
    dispatch(bicycleActions.countData({ bicycles }));
  }, [bicycles]);

  return (
    <div className={"Bicycles"}>
      {bicycles.map((bicycle) => (
        <Bicycle key={bicycle._id} bicycle={bicycle} />
      ))}
    </div>
  );
};

export { Bicycles };
