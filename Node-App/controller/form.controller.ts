import { INTEGER } from "sequelize";
import sequelize from "../models/sequalize";
import { DataTypes } from "sequelize";

const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/
const Employee = sequelize.define("emp_detail", {
    emp_id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    fname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    designation: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            validator: function (v: string) {
                return phoneValidationRegex.test(v);
            },
        }
    },
    gender: {
        type: DataTypes.STRING,
    },
    rel_status: {
        type: DataTypes.STRING,
    },
    address1: {
        type: DataTypes.STRING,
    },
    address2: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.STRING,
    },
    zipcode: {
        type: DataTypes.STRING,
    },
    bd: {
        type: DataTypes.DATEONLY,
    },
});

export default Employee;

