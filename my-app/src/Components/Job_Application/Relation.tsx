import React from "react";
import { useFormContext } from "react-hook-form";
import { FormData } from "../interfacefile";
const Relation: React.FC = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<FormData>();

  const phoneValidationPattern = /^[7-9][0-9]{9}$/;

  const name = watch("name") || [];
  const mobileno = watch("mobileno") || [];
  const rel = watch("rel") || [];

  const validateRow = (name: string, mobileno: number, rel: string) => {
    const filled = [name, mobileno, rel].filter(
      (value) => value !== undefined && value !== ""
    ).length;
    return filled === 0 || filled === 3;
  };

  return (
    <div className="application-form-container">
      <form>
        <fieldset className="fieldset form-control">
          <legend>
            <b>Reference Contact</b>
          </legend>
          <div className="container_of_reference">
            <div className="row">
              <div className="col">
                <label htmlFor="name0"> Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name0"
                  {...register("name.0", {
                    required: false,
                    validate: () =>
                      validateRow(name[0], mobileno[0], rel[0]) ||
                      "Fill all fields in this row if any is filled",
                  })}
                />
                {errors.name && errors.name[0] && (
                  <p className="red">{errors.name[0].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="mobileno0">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobileno0"
                  {...register("mobileno.0", {
                    required: false,
                    pattern: {
                      value: phoneValidationPattern,
                      message: "Invalid mobile number format",
                    },
                    validate: () =>
                      validateRow(name[0], mobileno[0], rel[0]) ||
                      "Fill all fields in this row if any is filled",
                  })}
                />
                {errors.mobileno && errors.mobileno[0] && (
                  <p className="red">{errors.mobileno[0].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="rel0">Relation</label>
                <input
                  type="text"
                  className="form-control"
                  id="rel0"
                  {...register("rel.0", {
                    required: false,
                    validate: () =>
                      validateRow(name[0], mobileno[0], rel[0]) ||
                      "Fill all fields in this row if any is filled",
                  })}
                />
                {errors.rel && errors.rel[0] && (
                  <p className="red">{errors.rel[0].message}</p>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="name1"> Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name1"
                  {...register("name.1", {
                    required: false,
                    validate: () =>
                      validateRow(name[1], mobileno[1], rel[1]) ||
                      "Fill all fields in this row if any is filled",
                  })}
                />
                {errors.name && errors.name[1] && (
                  <p className="red">{errors.name[1].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="mobileno1">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobileno1"
                  {...register("mobileno.1", {
                    required: false,
                    pattern: {
                      value: phoneValidationPattern,
                      message: "Invalid mobile number format",
                    },
                    validate: () =>
                      validateRow(name[1], mobileno[1], rel[1]) ||
                      "Fill all fields in this row if any is filled",
                  })}
                />
                {errors.mobileno && errors.mobileno[1] && (
                  <p className="red">{errors.mobileno[1].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="rel1">Relation</label>
                <input
                  type="text"
                  className="form-control"
                  id="rel1"
                  {...register("rel.1", {
                    required: false,
                    validate: () =>
                      validateRow(name[1], mobileno[1], rel[1]) ||
                      "Fill all fields in this row if any is filled",
                  })}
                />
                {errors.rel && errors.rel[1] && (
                  <p className="red">{errors.rel[1].message}</p>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="name2"> Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name2"
                  {...register("name.2", {
                    required: false,
                    validate: () =>
                      validateRow(name[2], mobileno[2], rel[2]) ||
                      "Fill all fields in this row if any is filled",
                  })}
                />
                {errors.name && errors.name[2] && (
                  <p className="red">{errors.name[2].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="mobileno2">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobileno2"
                  {...register("mobileno.2", {
                    required: false,
                    pattern: {
                      value: phoneValidationPattern,
                      message: "Invalid mobile number format",
                    },
                    validate: () =>
                      validateRow(name[2], mobileno[2], rel[2]) ||
                      "Fill all fields in this row if any is filled",
                  })}
                />
                {errors.mobileno && errors.mobileno[2] && (
                  <p className="red">{errors.mobileno[2].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="rel2">Relation</label>
                <input
                  type="text"
                  className="form-control"
                  id="rel2"
                  {...register("rel.2", {
                    required: false,
                    validate: () =>
                      validateRow(name[2], mobileno[2], rel[2]) ||
                      "Fill all fields in this row if any is filled",
                  })}
                />
                {errors.rel && errors.rel[2] && (
                  <p className="red">{errors.rel[2].message}</p>
                )}
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Relation;
