import "./Form.css";

import { joiResolver } from "@hookform/resolvers/joi";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { IBicycleData } from "../../intefaces";
import { bicycleActions } from "../../redux";
import { bicycleValidator } from "../../validators";

const Form = () => {
  const { error } = useAppSelector((state) => state.bicycleReducer);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isDirty },
  } = useForm<IBicycleData>({
    mode: "onTouched",
    resolver: joiResolver(bicycleValidator),
  });

  const dispatch = useAppDispatch();

  const save: SubmitHandler<IBicycleData> = (bicycleData) => {
    dispatch(bicycleActions.create(bicycleData));
    // reset();
  };

  return (
    <div className={"Form"}>
      <form>
        <input type="text" {...register("name")} placeholder={"Name*"} />
        <input type="text" {...register("type")} placeholder={"Type*"} />
        <input type="text" {...register("color")} placeholder={"Color*"} />
        <input
          type="number"
          {...register("wheelSize")}
          placeholder={"Wheel size*"}
        />
        <input type="number" {...register("price")} placeholder={"Price*"} />
        <input
          type="text"
          {...register("ID")}
          placeholder={"ID (slug): ХХХХХХХХХХХХХ*"}
        />
        <input
          id={"description"}
          type="text"
          {...register("description")}
          placeholder={"Description*"}
        />

        {error && <div className={"Form_error"}>( {error} )</div>}
        {isDirty && !isValid && (
          <div className={"Form_error"}>
            ( All text fields minimum length should be 5 characters! )
          </div>
        )}
        <div className={"Form_tips"}>( * - required field! )</div>

        <button onClick={handleSubmit(save)} disabled={!isValid}>
          SAVE
        </button>
        <button onClick={reset}>CLEAR</button>
      </form>
    </div>
  );
};

export { Form };
