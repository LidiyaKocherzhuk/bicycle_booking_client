import React from "react";

import { Bicycles, Form, Statistics } from "../components";
import css from "./BicyclePage.module.css";

const BicyclePage = () => {
  return (
    <div className={css.Container}>
      <Bicycles />

      <div className={css.rightSide}>
        <Form />
        <hr />
        <Statistics />
      </div>
    </div>
  );
};

export { BicyclePage };
