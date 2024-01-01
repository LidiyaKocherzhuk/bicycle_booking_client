import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAppDispatch } from "../../hooks";
import { IBicycleData } from "../../intefaces";
import { bicycleActions } from "../../redux";
import css from "./Form.module.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors, isValid },
  } = useForm<IBicycleData>({
    mode: "onTouched",
    // resolver: joiResolver(carValidator),
  });

  const dispatch = useAppDispatch();

  const save: SubmitHandler<IBicycleData> = (bicycleData) => {
    dispatch(bicycleActions.create(bicycleData));
  };

  return (
    <div className={css.Form}>
      <form onSubmit={handleSubmit(save)}>
        <input type="text" {...register("name")} placeholder={"Name"} />
        <input type="text" {...register("type")} placeholder={"Type"} />
        <input type="text" {...register("color")} placeholder={"Color"} />
        <input
          type="number"
          {...register("wheelSize")}
          placeholder={"Wheel size"}
        />
        <input type="number" {...register("price")} placeholder={"Price"} />
        <input
          type="text"
          {...register("ID")}
          placeholder={"ID (slug): ХХХХХХХХХХХХХ"}
        />
        <input
          id={css.description}
          type="text"
          {...register("description")}
          placeholder={"Description"}
        />
        <button>SAVE</button>
        <button onClick={() => reset()}>CLEAR</button>
      </form>
    </div>
  );
};

export { Form };
