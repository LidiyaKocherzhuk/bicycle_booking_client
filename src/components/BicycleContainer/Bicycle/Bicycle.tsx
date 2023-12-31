import React, { FC, PropsWithChildren } from "react";

import { IBicycle } from "../../../intefaces";
import css from "./Bicycle.module.css";

interface IProps extends PropsWithChildren {
  bicycle: IBicycle;
}
const Bicycle: FC<IProps> = ({ bicycle }) => {
  const { ID, name, type, color, price, status } = bicycle;

  return (
    <div className={css.Container}>
      <div className={css.description}>
        <div className={css.label}>
          <span>{name.toUpperCase()}</span> - {type.toUpperCase()}(
          {color.toUpperCase()})
        </div>

        <div className={css.id}>ID: {ID}</div>
      </div>

      <div>STATUS: {status}</div>

      <div>{price}</div>
    </div>
  );
};

export { Bicycle };
