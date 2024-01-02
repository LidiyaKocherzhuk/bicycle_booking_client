import React, { ChangeEventHandler, FC, PropsWithChildren } from "react";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch } from "../../../hooks";
import { IBicycle } from "../../../intefaces";
import { bicycleActions } from "../../../redux";
import css from "./Bicycle.module.css";

interface IProps extends PropsWithChildren {
  bicycle: IBicycle;
}

const statusArr: string[] = ["Available", "Busy", "Unavailable"];
const Bicycle: FC<IProps> = ({ bicycle }) => {
  const { _id, ID, name, type, color, price, status } = bicycle;
  const dispatch = useAppDispatch();

  const changeStatus: ChangeEventHandler<HTMLSelectElement> = (e) => {
    dispatch(
      bicycleActions.update({
        id: _id,
        updateData: {
          status: e.target.value,
        },
      }),
    );
  };

  const deleteBicycle = () => {
    dispatch(bicycleActions.deleteBicycle(_id));
    dispatch(bicycleActions.deleteById({ id: _id }));
  };

  return (
    <div
      className={`${css.Container} ${
        status === "Available"
          ? css.statusAvailable
          : status === "Busy"
            ? css.statusBusy
            : css.statusUnavailable
      }`}
    >
      <div className={css.description}>
        <div className={css.label}>
          <span>{name.toUpperCase()}</span> - {type.toUpperCase()}(
          {color.toUpperCase()})
        </div>

        <div className={css.id}>ID: {ID}</div>

        <div className={css.status}>
          <p>STATUS:</p>
          <select
            onChange={changeStatus}
            className="form-select"
            id={css.formSelect}
          >
            <option>{status}</option>

            {statusArr.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={css.rightSide}>
        <IoMdClose onClick={deleteBicycle} className={css.deleteBtn} />
        <div className={css.price}>{price}.00 UAH/hr.</div>
      </div>
    </div>
  );
};

export { Bicycle };
