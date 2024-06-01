import { INTEGER, Model } from "sequelize";
import sequelize from "../models/sequalize";
import { DataTypes } from "sequelize";


export interface EmployeeAttribute extends Model {
    emp_id: string;
    user_id: string;
    fname: string;
    lname: string;
    designation: string;
    email: string;
    phone: string;
    gender: string;
    rel_status: string;
    bd: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipcode: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const phoneValidationRegex:RegExp = /\d{3}-\d{3}-\d{4}/
const Employee = sequelize.define<EmployeeAttribute>("emp_detail", {
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

