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
export interface ValidateRegdata {
    fn: string;
    ln: string;
    mail: string;
    number: string;
    gen: string;
    dob: string;
}
export interface Validatepass {
    password: string;
    confirmpass: string
}
export interface Validatelogin {
    mail: string;
    pass: string;
}
export interface Value {
    id: string;
    code: string;
}