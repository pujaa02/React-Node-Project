import * as express from "express";
let route = express.Router();
import { Request, Response } from "express";
// import checkAuth from "../middlewares/checkauth";
import con from "../models/database";
import { check, validationResult } from "express-validator";
import parser from "body-parser";
import { ResultSetHeader, RowDataPacket } from "mysql2";
route.use(parser.json());
route.use(parser.urlencoded({ extended: false }));
// const urlencodedParser = parser.urlencoded({ extended: false });
import sequelize from "../models/sequalize";
import Employee from "./form.controller";

import get_user from "./ajaxinsertupdate/get_user";
import get_emp from "./ajaxinsertupdate/get_emp_det"
import edu_det from "./ajaxinsertupdate/get_edu_det";
import work_exp from "./ajaxinsertupdate/work_exp";
import lan from "./ajaxinsertupdate/language";
import techno from "./ajaxinsertupdate/techno";
import ref from "./ajaxinsertupdate/ref";
import pre from "./ajaxinsertupdate/pre";

// route.get("/users", checkAuth, get_user);
// route.get("/emp", checkAuth, get_emp);
// route.get("/edu", checkAuth, edu_det);
// route.get("/work", checkAuth, work_exp);
// route.get("/lan", checkAuth, lan);
// route.get("/tech", checkAuth, techno);
// route.get("/ref", checkAuth, ref);
// route.get("/pre", checkAuth, pre);

// route.get("/users", get_user);
// route.get("/emp", get_emp);
// route.get("/edu", edu_det);
// route.get("/work", work_exp);
// route.get("/lan", lan);
// route.get("/tech", techno);
// route.get("/ref", ref);
// route.get("/pre", pre);

interface FormData {
  fname: string;
  lname: string;
  designation: string;
  bd: string;
  email: string;
  phone: string;
  zip: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  gender: string;
  rel_status: string;
  // lan1: string;
  // able1?: boolean;
  // lan2: string;
  // able2?: boolean;
  // lan3: string;
  // able3?: boolean;
  // tech1: string;
  // level1: string;
  // tech2: string;
  // level2: string;
  // tech3: string;
  // level3: string;
  // tech4: string;
  // level4: string;
  // name1: string;
  // mobileno1: string;
  // rel1: string;
  // name2: string;
  // mobileno2: string;
  // rel2: string;
  // name3: string;
  // mobileno3: string;
  // rel3: string;
  // preloc: string;
  // notice: string;
  // exctc: string;
  // curctc: string;
  // depa: string;
  // board_name: string[];
  // py: string[];
  // percentage: string[];
  // companyname: string[];
  // designation: string[];
  // from: string[];
  // to: string[];
  // name: string[];
  // mobileno: string[];
  // rel: string[];
}

interface IStringArray extends Array<string | number | boolean> { }


route.post(
  "/submit",

  async (req: Request, res: Response) => {
    const data: FormData = req.body.formData;

    let id: number;
    console.log(data);

    const {
      fname,
      lname,
      designation,
      email,
      phone,
      gender,
      rel_status,
      address1,
      address2,
      city,
      state,
      zip,
      bd,
    } = data;

    // const edu = ["ssc", "hsc", "bachelor", "master"];

    // const lan1: IStringArray = ["", "", ""];
    // const lan2: IStringArray = ["", "", ""];
    // const lan3: IStringArray = ["", "", ""];
    // lan1[1] = data.lan1;
    // if (data.able1) {
    //   lan1[2] = data.able1.toString();
    // }
    // lan2[1] = data.lan2;
    // if (data.able2) {
    //   lan2[2] = data.able2.toString();
    // }
    // lan3[1] = data.lan3;
    // if (data.able3) {
    //   lan3[2] = data.able3.toString();
    // }

    // const tech1: IStringArray = ["", "", ""];
    // const tech2: IStringArray = ["", "", ""];
    // const tech3: IStringArray = ["", "", ""];
    // const tech4: IStringArray = ["", "", ""];
    // tech1[1] = data.tech1;
    // tech1[2] = data.level1;
    // tech2[1] = data.tech2;
    // tech2[2] = data.level2;
    // tech3[1] = data.tech3;
    // tech3[2] = data.level3;
    // tech4[1] = data.tech4;
    // tech4[2] = data.level4;

    // const ref1: IStringArray = ["", "", "", ""];
    // const ref2: IStringArray = ["", "", "", ""];
    // const ref3: IStringArray = ["", "", "", ""];
    // ref1[1] = data.name1;
    // ref1[2] = data.mobileno1;
    // ref1[3] = data.rel1;
    // ref2[1] = data.name2;
    // ref2[2] = data.mobileno2;
    // ref2[3] = data.rel2;
    // ref3[1] = data.name3;
    // ref3[2] = data.mobileno3;
    // ref3[3] = data.rel3;

    // const pre: IStringArray = ["", "", "", "", "", ""];
    // pre[1] = data.preloc;
    // pre[2] = data.notice;
    // pre[3] = data.exctc;
    // pre[4] = data.curctc;
    // pre[5] = data.depa;


    let datainserted = await Employee.create({ fname: fname, lname: lname, designation: designation, email: email, phone: phone, gender: gender, rel_status: rel_status, address1: address1, address2: address2, city: city, state: state, zipcode: zip, bd: bd });


    // let emp_detail: number = await con.insert(`INSERT INTO emp_details (fname, lname, designation, email, phone, gender, rel_status, address1, address2, city, state, zipcode, bd) VALUES (?)`, [values]);
    // console.log(emp_detail);

    // id = emp_detail;
    // console.log(id);

    // const len: number = data.board_name.length;

    // for (let i = 0; i < len; i++) {
    //   const eduValues = [
    //     id,
    //     edu[i],
    //     data.board_name[i],
    //     data.py[i],
    //     data.percentage[i],
    //   ];
    //   if (data.board_name[i]) {
    //     let educationdata: number = await con.insert(`INSERT INTO edu_detail (emp_id, type_of_result, Name_of_board_or_course, Passing_year, Percentage) VALUES (?)`, [eduValues]);
    //   }
    // }
    // const wklen = data.companyname.length;
    // for (let i = 0; i < wklen; i++) {
    //   const q2 = `INSERT INTO work_experience (emp_id, company_name, designation, from_date, to_date) VALUES (?, ?, ?, ?, ?)`;
    //   const workValues = [
    //     id,
    //     data.companyname[i],
    //     data.designation[i],
    //     data.from[i],
    //     data.to[i],
    //   ];
    //   if (data.companyname[i]) {
    //     let workdata: number = await con.insert(`INSERT INTO work_experience (emp_id, company_name, designation, from_date, to_date) VALUES (?)`, [workValues]);
    //   }
    // }
    // if (data.lan1) {
    //   lan1[0] = id;
    //   const landata1: number = await con.insert(`INSERT INTO language (emp_id, language_know, rws) VALUES (?)`, [lan1]);
    // }
    // if (data.lan2) {
    //   lan2[0] = id;
    //   const landata2: number = await con.insert(`INSERT INTO language (emp_id, language_know, rws) VALUES (?)`, [lan2]);
    // }
    // if (data.lan3) {
    //   lan3[0] = id;
    //   const landata3: number = await con.insert(`INSERT INTO language (emp_id, language_know, rws) VALUES (?)`, [lan3]);
    // }
    // // ======  techno ===
    // let q4 = `insert into know_techno(emp_id,tech_know ,level_of_technology) values( ? )`;
    // tech1[0] = id;
    // if (data.tech1) {
    //   const techdata1: number = await con.insert(`insert into know_techno(emp_id,tech_know ,level_of_technology) values( ? )`, [tech1]);
    // }
    // tech2[0] = id;
    // if (data.tech2) {
    //   const techdata2: number = await con.insert(`insert into know_techno(emp_id,tech_know ,level_of_technology) values( ? )`, [tech2]);
    // }
    // tech3[0] = id;
    // if (data.tech3) {
    //   const techdata3: number = await con.insert(`insert into know_techno(emp_id,tech_know ,level_of_technology) values( ? )`, [tech3]);
    // }
    // tech4[0] = id;
    // if (data.tech4) {
    //   const techdata4: number = await con.insert(`insert into know_techno(emp_id,tech_know ,level_of_technology) values( ? )`, [tech4]);
    // }
    // //section ref
    // let reflen = data.name;
    // for (let i = 0; i < reflen.length; i++) {
    //   if (data.name[i]) {
    //     const refdata: number = await con.insert(`insert into reference_contact(emp_id, name ,contact_number ,relation) values('${id}','${formData.name[i]}','${formData.mobileno[i]}','${data.rel[i]}')`);
    //   }
    // }
    // //section ended
    // pre[0] = id;
    // const predata: number = await con.insert(`insert into preferences(emp_id, prefered_location,notice_period , expected_ctc,current_ctc , department) values( ? )`, [pre]);
    // res.json(id)
  }
);
// route.get("/update/:id", checkAuth, (req: Request, res: Response) => {
//   let id: number = Number(req.params.id);
//   res.render("ajaxinup/home", { id });
// });

// route.post(
//   "/update/:id",

//   async (req: Request, res: Response) => {
//     let id: number = Number(req.params.id);
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       const alert = errors.array();
//       return res.render("ajaxinup/home", {
//         alert,
//       });
//     }
//     const formData: FormData = req.body;

//     if (req.params.id) {
//       // Section 1
//       const {
//         fname,
//         lname,
//         designa,
//         email,
//         number,
//         gender,
//         relstatus,
//         add1,
//         add2,
//         city,
//         state,
//         zipcode,
//         dob,
//       } = formData;
//       await con.update(`UPDATE emp_details
//       SET fname='${fname}', lname='${lname}', designation='${designa}', email='${email}', phone='${number}', gender='${gender}',
//       rel_status='${relstatus}', address1='${add1}', address2='${add2}', city='${city}', state='${state}', zipcode='${zipcode}', bd='${dob}'
//       WHERE emp_id='${id}';`) as unknown as Array<ResultSetHeader>;

//       // Section 2
//       const edu = ["ssc", "hsc", "bachelor", "master"];
//       const len: number = formData.board_name.length;
//       const eduDetails = await con.getall(`SELECT edu_id FROM edu_detail WHERE emp_id IN (${id});`) as Array<RowDataPacket>;

//       for (let i = 0; i < len; i++) {
//         if (eduDetails[i]) {
//           await con.update(`UPDATE edu_detail
//             SET Name_of_board_or_course='${formData.board_name[i]}', Passing_year='${formData.py[i]}', Percentage='${formData.percentage[i]}'
//             WHERE emp_id='${id}' AND type_of_result='${edu[i]}' AND edu_id='${eduDetails[i].edu_id}';`) as unknown as Array<ResultSetHeader>;
//         } else {
//           if (formData.board_name[i]) {
//             await con.update(`INSERT INTO edu_detail (emp_id, type_of_result, Name_of_board_or_course, Passing_year, Percentage)
//               VALUES ('${id}', '${edu[i]}', '${formData.board_name[i]}', '${formData.py[i]}', '${formData.percentage[i]}');`) as unknown as Array<ResultSetHeader>;
//           }
//         }
//       }

//       // Section 3

//       const workExperience = await con.getall(`SELECT id AS work_id FROM work_experience WHERE emp_id IN (${id});`) as Array<RowDataPacket>;
//       const wklen: number = formData.companyname.length;
//       for (let i = 0; i < wklen; i++) {
//         if (workExperience[i]) {
//           await con.update(`UPDATE work_experience
//             SET company_name='${formData.companyname[i]}', designation='${formData.designation[i]}', from_date='${formData.from[i]}', to_date='${formData.to[i]}'
//             WHERE emp_id='${id}' AND id='${workExperience[i].work_id}';`) as unknown as Array<ResultSetHeader>;
//         } else {
//           if (formData.companyname[i]) {
//             await con.update(`INSERT INTO work_experience (emp_id, company_name, designation, from_date, to_date)
//               VALUES ('${id}', '${formData.companyname[i]}', '${formData.designation[i]}', '${formData.from[i]}', '${formData.to[i]}');`) as unknown as Array<ResultSetHeader>;
//           }
//         }
//       }

//       // Languages
//       const languages: string[] = [];
//       const rws = [];
//       if (formData.lan1) {
//         languages.push(formData.lan1);
//         rws.push(formData.able1);
//       }
//       if (formData.lan2) {
//         languages.push(formData.lan2);
//         rws.push(formData.able2);
//       }
//       if (formData.lan3) {
//         languages.push(formData.lan3);
//         rws.push(formData.able3);
//       }
//       await con.delete(`DELETE FROM language WHERE emp_id='${id}';`) as unknown as Array<ResultSetHeader>;
//       for (let i = 0; i < languages.length; i++) {
//         await con.insert(`INSERT INTO language (emp_id, language_know, rws)
//           VALUES ('${id}', '${languages[i]}', '${rws[i]}');`) as unknown as Array<ResultSetHeader>;
//       }

//       // Technologies
//       const tech: string[] = [];
//       const level: string[] = [];
//       if (formData.tech1) {
//         tech.push(formData.tech1);
//         level.push(formData.level1);
//       }
//       if (formData.tech2) {
//         tech.push(formData.tech2);
//         level.push(formData.level2);
//       }
//       if (formData.tech3) {
//         tech.push(formData.tech3);
//         level.push(formData.level3);
//       }
//       if (formData.tech4) {
//         tech.push(formData.tech4);
//         level.push(formData.level4);
//       }
//       const technoDetails = await con.getall(
//         `SELECT id AS tech_id FROM know_techno WHERE emp_id IN (${id});`
//       ) as Array<RowDataPacket>;
//       for (let i = 0; i < tech.length; i++) {
//         if (technoDetails[i]) {
//           await con.update(`UPDATE know_techno
//             SET tech_know='${tech[i]}', level_of_technology='${level[i]}'
//             WHERE emp_id='${id}' AND id='${technoDetails[i].tech_id}';`) as unknown as Array<ResultSetHeader>;
//         } else {
//           if (tech[i]) {
//             await con.insert(`INSERT INTO know_techno (emp_id, tech_know, level_of_technology)
//               VALUES ('${id}', '${tech[i]}', '${level[i]}');`) as unknown as Array<ResultSetHeader>;
//           }
//         }
//       }

//       // References
//       const references = await con.getall(
//         `SELECT ref_id FROM reference_contact WHERE emp_id IN (${id});`
//       ) as Array<RowDataPacket>;
//       const refLen = formData.name.length;
//       for (let i = 0; i < refLen; i++) {
//         if (references[i]) {
//           await con.update(`UPDATE reference_contact
//             SET name='${formData.name[i]}', contact_number='${formData.mobileno[i]}', relation='${formData.rel[i]}'
//             WHERE emp_id='${id}' AND ref_id='${references[i].ref_id}';`) as unknown as Array<ResultSetHeader>;
//         } else {
//           if (formData.name[i]) {
//             await con.insert(`INSERT INTO reference_contact (emp_id, name, contact_number, relation)
//               VALUES ('${id}', '${formData.name[i]}', '${formData.mobileno[i]}', '${formData.rel[i]}');`) as unknown as Array<ResultSetHeader>;
//           }
//         }
//       }

//       // Preferences
//       const { preloc, notice, exctc, curctc, depa } = formData;
//       await con.update(`UPDATE preferences
//         SET prefered_location='${preloc}', notice_period='${notice}', expected_ctc='${exctc}', current_ctc='${curctc}', department='${depa}'
//         WHERE emp_id='${id}';`) as unknown as Array<ResultSetHeader>;
//     }
//     res.json("data updated");
//   }
// );
// route.get("/showupdate", checkAuth, (req: Request, res: Response) => {
//   res.send("Data is Succesfully Updated!!");
// });

export default route;
