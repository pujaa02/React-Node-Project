
export interface Emp {
    emp_id: number;
    fname: string;
    lname: string;
    designation: string;
    email: string;
    phone: string;
    gender: string;
    rel_status: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipcode: string;
    bd: string;
}
export interface FormData {
    fname: string;
    lname: string;
    designation: string;
    bd: string;
    email: string;
    phone: string;
    zipcode: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    gender: string;
    rel_status: string;
}
export interface UserAttributes {
    id: string;
    user_id: string;
    fname: string;
    lname: string;
    email: string;
    phone: string;
    gender: string;
    bd: string;
    password: string
    access_key: string;
    isdeleted: string;
}
export interface PasswordData {
    pass: string;
    repass: string;
}
export interface PayloadData {
    id: string;
    email: string
}
export interface RegisterData {
    fname: string;
    lname: string;
    email: string;
    phone: string;
    gender: string;
    bd: string;
}
