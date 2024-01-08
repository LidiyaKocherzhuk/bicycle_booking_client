import "./Bicycle.css";

import React, { ChangeEventHandler, FC, PropsWithChildren } from "react";
import { IoMdClose } from "react-icons/io";

import { useAppDispatch } from "../../../hooks";
import { IBicycle } from "../../../intefaces";
import { bicycleActions } from "../../../redux";

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
      className={`Bicycle ${
        status === "Available"
          ? "statusAvailable"
          : status === "Busy"
            ? "statusBusy"
            : "statusUnavailable"
      }`}
    >
      <div className={"Bicycle_description"}>
        <div className={"label"}>
          <span>{name.toUpperCase()}</span> - {type.toUpperCase()}(
          {color.toUpperCase()})
        </div>

        <div className={"id"}>ID: {ID}</div>

        <div className={"status"}>
          <p>STATUS:</p>
          <select
            onChange={changeStatus}
            className="form-select"
            id={"formSelect"}
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

      <div className={"Bicycle_rightSide"}>
        <IoMdClose onClick={deleteBicycle} className={"deleteBtn"} />
        <div className={"price"}>{price}.00 UAH/hr.</div>
      </div>
    </div>
  );
};

export { Bicycle };
