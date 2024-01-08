import "./BicyclePage.css";

import React from "react";

import { Bicycles, Form, Statistics } from "../components";

const BicyclePage = () => {
  return (
    <div className={"BicyclePage"}>
      <Bicycles />

      <div className={"BicyclePage_rightSide"}>
        <Form />
        <hr />
        <Statistics />
      </div>
    </div>
  );
};

export { BicyclePage };
