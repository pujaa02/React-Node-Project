import { Request } from "express";

interface QueryData {
    id: number | string;
    city: string;
    state_id: number | string;
    name: string;
    country_id: number | string;
    edu_id: number | string;
    emp_id: number | string;
    type_of_result: string;
    Name_of_board_or_course: string;
    Passing_year: number | string;
    Percentage: number | string;
    fname: string;
    lname: string;
    designation: string;
    email: string;
    phone: number | string;
    gender: string;
    rel_status: string;
    address1: string;
    address2: string;
    state: string;
    zipcode: string;
    bd: Date | string;
    lan_id: number | string;
    language_know: string;
    rws: string;
    pre_id: string;
    prefered_location: string;
    notice_period: string;
    expected_ctc: string;
    current_ctc: string;
    department: string;
    ref_id: number | string;
    contact_number: number | string;
    relation: string;
    tech_know: string;
    level_of_technology: string;
    company_name: string;
    from_date: Date | string;
    to_date: Date | string;
}

export default QueryData;