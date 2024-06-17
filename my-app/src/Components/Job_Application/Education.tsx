import React from "react";
import { useFormContext } from "react-hook-form";
import { FormData } from "../interfacefile";

const Education: React.FC = () => {
    const {
        register,
        formState: { errors },
        watch,
    } = useFormContext<FormData>();


    const boardNames = watch("board_name") || [];
    const py = watch("py") || [];
    const percentages = watch("percentage") || [];

    const validateDate = (py: number) => {
        const date: Date = new Date()
        const curyear: number = date.getFullYear();
        if (py > curyear) {
            return "Please Enter Valid Year";
        }
        return true;
    }
    const validateRow = (boardName: string, py: number, percentage: number) => {
        const filled = [boardName, py, percentage].filter(
            (value) => value !== undefined && value !== ""
        ).length;
        if (filled === 0) {
            return true;
        }
        if (filled === 3) {
            const date: Date = new Date()
            const curyear: number = date.getFullYear();
            if (py > curyear) {
                return "Please Enter Valid Year";
            }
            return true;
        }
        return "Fill All fields in this rows if any is field";
    };
    return (
        <div className="application-form-container">
            <form>
                <fieldset className="fieldset form-control">
                    <legend>
                        <b>Education_details</b>
                    </legend>
                    <div className="container_of_education">
                        <h5>SSC result</h5>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="board_name">Name of Board</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="board1"
                                    {...register("board_name.0", {
                                        required: "Required!!",

                                    })}
                                />
                                {errors.board_name && errors.board_name[0] && (
                                    <p className="red">{errors.board_name[0].message}</p>
                                )}
                            </div>
                            <div className="col">
                                <label htmlFor="passing_year">Passing year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="py1"
                                    {...register("py.0", {
                                        required: "Required!!",
                                        validate: () =>
                                            validateDate(py[0]),
                                        pattern: {
                                            value: /^[0-9]{4}$/,
                                            message: "Passing year must be a 4-digit number",
                                        },
                                    })}
                                />
                                {errors.py && errors.py[0] && (
                                    <p className="red">{errors.py[0].message}</p>
                                )}
                            </div>
                            <div className="col">
                                <label htmlFor="percentage">Percentage</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="percentage1"
                                    {...register("percentage.0", {
                                        required: "Required!!",
                                        pattern: {
                                            value: /^([1-9][0-9]?|([1-9][0-9])?.[0-9]{1,2})$/,
                                            message: "Enter valid Percentage",
                                        },
                                    })}
                                />
                                {errors.percentage && errors.percentage[0] && (
                                    <p className="red">{errors.percentage[0].message}</p>
                                )}
                            </div>
                        </div>
                        <hr />
                        <h5>HSC result</h5>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="board_name2">Name of Board</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="board2"
                                    {...register("board_name.1", {
                                        required: "Required!!",

                                    })}
                                />
                                {errors.board_name && errors.board_name[1] && (
                                    <p className="red">{errors.board_name[1].message}</p>
                                )}
                            </div>
                            <div className="col">
                                <label htmlFor="passing_year">Passing year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="py2"
                                    {...register("py.1", {
                                        required: "Required!!",
                                        validate: () =>
                                            validateDate(py[1]),
                                        pattern: {
                                            value: /^[0-9]{4}$/,
                                            message: "Passing year must be a 4-digit number",
                                        },
                                    })}
                                />
                                {errors.py && errors.py[1] && (
                                    <p className="red">{errors.py[1].message}</p>
                                )}
                            </div>
                            <div className="col">
                                <label htmlFor="percentage">Percentage</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="percentage2"
                                    {...register("percentage.1", {
                                        required: "Required!!",

                                        pattern: {
                                            value: /^([1-9][0-9]?|([1-9][0-9])?.[0-9]{1,2})$/,
                                            message: "Enter valid Percentage",
                                        },
                                    })}
                                />
                                {errors.percentage && errors.percentage[1] && (
                                    <p className="red">{errors.percentage[1].message}</p>
                                )}
                            </div>
                        </div>
                        <hr />
                        <h5>Bachelor degree</h5>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="course_name">Course Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="course1"
                                    {...register("board_name.2", {
                                        required: "Required!!",

                                    })}
                                />
                                {errors.board_name && errors.board_name[2] && (
                                    <p className="red">{errors.board_name[2].message}</p>
                                )}
                            </div>
                            <div className="col">
                                <label htmlFor="passing_year">Passing year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="py3"
                                    {...register("py.2", {
                                        required: "Required!!",
                                        validate: () =>
                                            validateDate(py[2]),
                                        pattern: {
                                            value: /^[0-9]{4}$/,
                                            message: "Passing year must be a 4-digit number",
                                        },
                                    })}
                                />
                                {errors.py && errors.py[2] && (
                                    <p className="red">{errors.py[2].message}</p>
                                )}
                            </div>
                            <div className="col">
                                <label htmlFor="percentage">Percentage</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="percentage3"
                                    {...register("percentage.2", {
                                        required: "Required!!",
                                        pattern: {
                                            value: /^([1-9][0-9]?|([1-9][0-9])?.[0-9]{1,2})$/,
                                            message: "Enter valid Percentage",
                                        },
                                    })}
                                />
                                {errors.percentage && errors.percentage[2] && (
                                    <p className="red">{errors.percentage[2].message}</p>
                                )}
                            </div>
                        </div>
                        <hr />
                        <h5>Master degree</h5>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="course_name">Course Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="course2"
                                    {...register("board_name.3", {
                                        validate: () =>
                                            validateRow(boardNames[3], py[3], percentages[3]),
                                    })}
                                />
                                {errors.board_name && errors.board_name[3] && (
                                    <p className="red">{errors.board_name[3].message}</p>
                                )}
                            </div>
                            <div className="col">
                                <label htmlFor="passing_year">Passing year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="py4"
                                    {...register("py.3", {
                                        validate: () =>
                                            validateRow(boardNames[3], py[3], percentages[3]),
                                        pattern: {
                                            value: /^[0-9]{4}$/,
                                            message: "Passing year must be a 4-digit number",
                                        },
                                    })}
                                />
                                {errors.py && errors.py[3] && (
                                    <p className="red">{errors.py[3].message}</p>
                                )}
                            </div>
                            <div className="col">
                                <label htmlFor="percentage">Percentage</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="percentage4"
                                    {...register("percentage.3", {
                                        validate: () =>
                                            validateRow(boardNames[3], py[3], percentages[3]),
                                        pattern: {
                                            value: /^([1-9][0-9]?|([1-9][0-9])?.[0-9]{1,2})$/,
                                            message: "Enter valid Percentage",
                                        },
                                    })}
                                />
                                {errors.percentage && errors.percentage[3] && (
                                    <p className="red">{errors.percentage[3].message}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Education;
