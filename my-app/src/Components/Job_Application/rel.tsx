import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { FormData } from "../interfacefile";

const Relation: React.FC = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<FormData>();

    const { fields, remove, append } = useFieldArray({
        control,
        name: "relation",
    });
    const phoneValidationPattern: RegExp = /^[7-9][0-9]{9}$/;
    return (
        <div className="application-form-container">
            <form>
                <fieldset className="fieldset form-control">
                    <legend>
                        <b>Reference Contact</b>
                    </legend>
                    <div className="container_of_reference">
                        {fields.map((field, index) => (
                            <div className="row" key={field.id}>
                                <div className="col">
                                    <label htmlFor={`relation.${index}.name`}>Name</label>
                                    <input
                                        {...register(`relation.${index}.name`, {
                                            required: "Name is required",
                                        })}
                                        className={errors?.relation?.[index]?.name ? "error" : ""}
                                        defaultValue={field.name}
                                    />
                                    {errors?.relation?.[index]?.name && (
                                        <p className="error-message">
                                            {errors.relation?.[index]?.name?.message}
                                        </p>
                                    )}
                                </div>
                                <div className="col">
                                    <label htmlFor={`relation.${index}.mobileno`}>mobileno</label>
                                    <input
                                        placeholder="[7-9][0-9]{9}"
                                        {...register(`relation.${index}.mobileno`, {
                                            required: "Mobile Number is required",
                                            pattern: {
                                                value: phoneValidationPattern,
                                                message: "Enter Valid Mobile Number",
                                            },
                                        })}
                                        className={
                                            errors?.relation?.[index]?.mobileno ? "error" : ""
                                        }
                                        defaultValue={field.mobileno}
                                    />
                                    {errors?.relation?.[index]?.mobileno && (
                                        <p className="error-message">
                                            {errors.relation?.[index]?.mobileno?.message}
                                        </p>
                                    )}
                                </div>
                                <div className="col">
                                    <label htmlFor={`relation.${index}.rel`}>rel</label>
                                    <input
                                        {...register(`relation.${index}.rel`, {
                                            required: "relation is required",
                                        })}
                                        className={errors?.relation?.[index]?.rel ? "error" : ""}
                                        defaultValue={field.rel}
                                    />
                                    {errors?.relation?.[index]?.rel && (
                                        <p className="error-message">
                                            {errors.relation?.[index]?.rel?.message}
                                        </p>
                                    )}
                                </div>
                                <div className="col">
                                    <button
                                        id="del_btn"
                                        type="button"
                                        onClick={() => remove(index)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                        <button
                            id="insertbtn"
                            type="button"
                            onClick={() =>
                                append({
                                    name: "",
                                    mobileno: "",
                                    rel: "",
                                })
                            }
                        >
                            Add Referance
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Relation;
