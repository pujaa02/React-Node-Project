export interface RegData {
    fname: string;
    lname: string;
    email: string;
    phone: string;
    gender: string,
    bd: string;
}
export interface LoginData {
    email: string;
    password: string;
}
export interface ApplicationFormData {
    fname: string;
    lname: string;
    designation: string;
    email: string;
    phone: string;
    gender: string,
    rel_status: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipcode: string;
    bd: string;
    // zipcode: string;
}
export interface User {
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
    zipcodecode: string;
    bd: string;
}
export interface propState {
    id: string;
    user_id: string;
    actcode: string
}
export interface PassData {
    pass: string;
    repass: string;
}