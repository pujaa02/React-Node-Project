import React from "react";
import { useFormContext } from "react-hook-form";
import { FormData } from "../interfacefile";

const Experience: React.FC = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<FormData>();

  const companyname = watch("companyname") || [];
  const designation = watch("designation") || [];
  const from = watch("from") || [];
  const to = watch("to") || [];

  const validateRow = (
    companyname: string,
    designation: string,
    from: Date,
    to: Date
  ) => {
    const filled = [companyname, designation, from, to].filter(
      (value) => value !== undefined && value !== ""
    ).length;
    return filled === 0 || filled === 4;
  };
  return (
    <div className="application-form-container">
      <form>
        <fieldset className="fieldset form-control">
          <legend>
            <b>Work Experience</b>
          </legend>
          <div className="container_of_experience">
            <div className="row">
              <div className="col">
                <label htmlFor="companyname0">Company name</label>
                <input
                  type="text"
                  className="form-control"
                  id="companyname0"
                  {...register("companyname.0", {
                    required: false,
                    validate: () =>
                      validateRow(
                        companyname[0],
                        designation[0],
                        from[0],
                        to[0]
                      ) || "Fill all fields in this row if any is filled",
                  })}
                />
                {errors.companyname && errors.companyname[0] && (
                  <p className="red">{errors.companyname[0].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="designation0">Designation</label>
                <input
                  type="text"
                  className="form-control"
                  id="designation0"
                  {...register("designation.0", {
                    required: false,
                    validate: () =>
                      validateRow(
                        companyname[0],
                        designation[0],
                        from[0],
                        to[0]
                      ) || "Fill all fields in this row if any is filled",
                  })}
                />
                {errors.designation && errors.designation[0] && (
                  <p className="red">{errors.designation[0].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="from0">From</label>
                <input
                  type="date"
                  className="duration form-control"
                  id="from0"
                  {...register("from.0", {
                    required: false,
                    validate: () =>
                      validateRow(
                        companyname[0],
                        designation[0],
                        from[0],
                        to[0]
                      ) || "Fill all fields in this row if any is filled",
                  })}
                />
                {errors.from && errors.from[0] && (
                  <p className="red">{errors.from[0].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="to0">To</label>
                <input
                  type="date"
                  id="to0"
                  {...register("to.0", {
                    required: false,
                    validate: () =>
                      validateRow(
                        companyname[0],
                        designation[0],
                        from[0],
                        to[0]
                      ) || "Fill all fields in this row if any is filled",
                  })}
                  className="duration form-control"
                />
                {errors.to && errors.to[0] && (
                  <p className="red">{errors.to[0].message}</p>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="companyname1">Company name</label>
                <input
                  type="text"
                  className="form-control"
                  id="companyname1"
                  {...register("companyname.1", {
                    required: false,
                    validate: () =>
                      validateRow(
                        companyname[1],
                        designation[1],
                        from[1],
                        to[1]
                      ) || "Fill all fields in this row if any is filled",
                  })}
                />
                {errors.companyname && errors.companyname[1] && (
                  <p className="red">{errors.companyname[1].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="designation1">Designation</label>
                <input
                  type="text"
                  className="form-control"
                  id="designation1"
                  {...register("designation.1", {
                    required: false,
                    validate: () =>
                      validateRow(
                        companyname[1],
                        designation[1],
                        from[1],
                        to[1]
                      ) || "Fill all fields in this row if any is filled",
                  })}
                />
                {errors.designation && errors.designation[1] && (
                  <p className="red">{errors.designation[1].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="from1">From</label>
                <input
                  type="date"
                  className="duration form-control"
                  id="from1"
                  {...register("from.1", {
                    required: false,
                    validate: () =>
                      validateRow(
                        companyname[1],
                        designation[1],
                        from[1],
                        to[1]
                      ) || "Fill all fields in this row if any is filled",
                  })}
                />
                {errors.from && errors.from[1] && (
                  <p className="red">{errors.from[1].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="to1">To</label>
                <input
                  type="date"
                  id="to1"
                  {...register("to.1", {
                    required: false,
                    validate: () =>
                      validateRow(
                        companyname[1],
                        designation[1],
                        from[1],
                        to[1]
                      ) || "Fill all fields in this row if any is filled",
                  })}
                  className="duration form-control"
                />
                {errors.to && errors.to[1] && (
                  <p className="red">{errors.to[1].message}</p>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="companyname2">Company name</label>
                <input
                  type="text"
                  className="form-control"
                  id="companyname2"
                  {...register("companyname.2", {
                    required: false,
                    validate: () =>
                      validateRow(
                        companyname[2],
                        designation[2],
                        from[2],
                        to[2]
                      ) || "Fill all fields in this row if any is filled",
                  })}
                />
                {errors.companyname && errors.companyname[2] && (
                  <p className="red">{errors.companyname[2].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="designation2">Designation</label>
                <input
                  type="text"
                  className="form-control"
                  id="designation2"
                  {...register("designation.2", {
                    required: false,
                    validate: () =>
                      validateRow(
                        companyname[2],
                        designation[2],
                        from[2],
                        to[2]
                      ) || "Fill all fields in this row if any is filled",
                  })}
                />
                {errors.designation && errors.designation[2] && (
                  <p className="red">{errors.designation[2].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="from2">From</label>
                <input
                  type="date"
                  className="duration form-control"
                  id="from2"
                  {...register("from.2", {
                    required: false,
                    validate: () =>
                      validateRow(
                        companyname[2],
                        designation[2],
                        from[2],
                        to[2]
                      ) || "Fill all fields in this row if any is filled",
                  })}
                />
                {errors.from && errors.from[2] && (
                  <p className="red">{errors.from[2].message}</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="to2">To</label>
                <input
                  type="date"
                  id="to2"
                  {...register("to.2", {
                    required: false,
                    validate: () =>
                      validateRow(
                        companyname[2],
                        designation[2],
                        from[2],
                        to[2]
                      ) || "Fill all fields in this row if any is filled",
                  })}
                  className="duration form-control"
                />
                {errors.to && errors.to[2] && (
                  <p className="red">{errors.to[2].message}</p>
                )}
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Experience;
