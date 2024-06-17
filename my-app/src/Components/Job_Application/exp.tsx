import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { FormData } from "../interfacefile";

const Experience: React.FC = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<FormData>();

    const { fields, remove, append } = useFieldArray({
        control,
        name: "experience",
    });

    const regex: RegExp = /^\d{4}-\d{2}-\d{2}$/;

    function isValidDate(dateString: string): boolean {
        const date: Date = new Date(dateString);
        return !isNaN(date.getTime());
    }

    const checkDate = (dateString: string): boolean => {
        const check: boolean = regex.test(dateString) && isValidDate(dateString);
        if (check) {
            const date: Date = new Date();
            const enterdate: Date = new Date(dateString);
            if (date < enterdate) {
                return false;
            }
            return true;
        } else {
            return false;
        }
    };
    return (
        <div className="container_of_experience_form">
            <fieldset className="fieldset form-control">
                <legend>
                    <b>Work Experience</b>
                </legend>
                <div className="container_of_experience">
                    {fields.map((field, index) => (
                        <div className="row" key={field.id}>
                            <div className="col">
                                <label htmlFor={`experience.${index}.companyname`}>
                                    CompanyName
                                </label>
                                <input
                                    {...register(`experience.${index}.companyname`, {
                                        required: "Company name is required",
                                    })}
                                    className={
                                        errors?.experience?.[index]?.companyname ? "error" : ""
                                    }
                                    defaultValue={field.companyname}
                                />
                                {errors?.experience?.[index]?.companyname && (
                                    <p className="error-message">
                                        {errors.experience?.[index]?.companyname?.message}
                                    </p>
                                )}
                            </div>
                            <div className="col">
                                <label htmlFor={`experience.${index}.designation`}>
                                    Designation
                                </label>
                                <input
                                    {...register(`experience.${index}.designation`, {
                                        required: "Designation is required",
                                    })}
                                    className={
                                        errors?.experience?.[index]?.designation ? "error" : ""
                                    }
                                    defaultValue={field.designation}
                                />
                                {errors?.experience?.[index]?.designation && (
                                    <p className="error-message">
                                        {errors.experience?.[index]?.designation?.message}
                                    </p>
                                )}
                            </div>
                            <div className="col">
                                <label htmlFor={`experience.${index}.from_date`}>From</label>
                                <input
                                    placeholder="yyyy-mm-dd"
                                    {...register(`experience.${index}.from_date`, {
                                        required: "From date is required",
                                        validate: (value) => checkDate(value) || "Please Enter Valid Date!!"
                                    })}
                                    className={errors?.experience?.[index]?.from_date ? "error" : ""}
                                    defaultValue={field.from_date}
                                />
                                {errors?.experience?.[index]?.from_date && (
                                    <p className="error-message">
                                        {errors.experience?.[index]?.from_date?.message}
                                    </p>
                                )}
                            </div>
                            <div className="col">
                                <label htmlFor={`experience.${index}.to_date`}>To</label>
                                <input
                                    placeholder="yyyy-mm-dd"
                                    {...register(`experience.${index}.to_date`, {
                                        required: "To date is required",
                                        validate: (value) => checkDate(value) || "Please Enter Valid Date!!"
                                    })}
                                    className={errors?.experience?.[index]?.to_date ? "error" : ""}
                                    defaultValue={field.to_date}
                                />
                                {errors?.experience?.[index]?.to_date && (
                                    <p className="error-message">
                                        {errors.experience?.[index]?.to_date?.message}
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
                                companyname: "",
                                designation: "",
                                from_date: "",
                                to_date: "",
                            })
                        }
                    >
                        Add Work Experience
                    </button>
                </div>
            </fieldset>
        </div>
    );
};

export default Experience;