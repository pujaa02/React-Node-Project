import con from "../models/database";
import { Request, Response } from "express";
import {
  Edu,
  Emp,
  Language,
  PreferedLocation,
  Reference,
  Technology,
  Workexp,
} from "../interfacefile";

async function get_user(req: Request, res: Response) {
  const query: Emp[] = await con.getall(
    `select emp_id,fname,lname from emp_details`
  );
  res.json(query);
}

async function delete_user(req: Request, res: Response) {
  const id: number = Number(req.params.id);
  try {
    await con.delete(`delete from preferences where emp_id=${id}`);
    await con.delete(`delete from reference_contact where emp_id=${id}`);
    await con.delete(`delete from know_techno where emp_id=${id}`);
    await con.delete(`delete from language where emp_id=${id}`);
    await con.delete(`delete from work_experience where emp_id=${id}`);
    await con.delete(`delete from edu_detail where emp_id=${id}`);
    await con.delete(`delete from emp_details where emp_id=${id}`);
    res.json("Success");
  } catch (error) {
    console.log(error);
    res.json("Failed");
  }
}

async function emp_det(req: Request, res: Response) {
  const id: string = req.params.id;

  const emp: Emp[] = await con.getall(
    `select * from emp_details where emp_id=${id}`
  );
  const edu: Edu[] = await con.getall(
    `select * from edu_detail where emp_id=${id} `
  );
  const workexp: Workexp[] = await con.getall(
    `select * from work_experience where emp_id=${id}`
  );
  const language: Language[] = await con.getall(
    `select * from language where emp_id=${id}`
  );
  const technology: Technology[] = await con.getall(
    `select * from know_techno where emp_id=${id}`
  );
  const referance: Reference[] = await con.getall(
    `select * from reference_contact where emp_id=${id}`
  );
  const preferance: PreferedLocation[] = await con.getall(
    `select * from preferences where emp_id=${id}`
  );

  let board_name: Array<string> = [];
  let py: Array<number | string> = [];
  let percentage: Array<number | string> = [];

  let result_type: string[] = ["ssc", "hsc", "bachelor", "master"];

  for (let i = 0; i < edu.length; i++) {
    if (result_type[i] === edu[i].type_of_result) {
      board_name.push(edu[i].Name_of_board_or_course);
      py.push(edu[i].Passing_year);
      percentage.push(edu[i].Percentage);
    } else {
      board_name.push("");
      py.push("");
      percentage.push("");
    }
  }
  const experience: Array<object> = [];


  for (let i = 0; i < workexp.length; i++) {
    experience.push(workexp[i]);
  }

  let hindi: string = "";
  let english: string = "";
  let gujarati: string = "";
  let read1: string = "";
  let read2: string = "";
  let read3: string = "";
  let write1: string = "";
  let write2: string = "";
  let write3: string = "";
  let speak1: string = "";
  let speak2: string = "";
  let speak3: string = "";



  for (let i = 0; i < language.length; i++) {
    switch (language[i].language_know) {
      case "hindi":
        hindi = "hindi";
        let rws: string[] = (language[i].rws).split(",");
        for (let j = 0; j < rws.length; j++) {
          if (rws[j] === "read") {
            read1 = "read1"
          }
          if (rws[j] === "write") {
            write1 = "write1"
          }
          if (rws[j] === "speak") {
            speak1 = "speak1"
          }
        }
        break;
      case "english":
        english = "english"
        let rws2: string[] = (language[i].rws).split(",");
        for (let j = 0; j < rws2.length; j++) {
          if (rws2[j] === "read") {
            read2 = "read2"
          }
          if (rws2[j] === "write") {
            write2 = "write2"
          }
          if (rws2[j] === "speak") {
            speak2 = "speak2"
          }
        }
        break;
      case "gujarati":
        gujarati = "gujarati"
        let rws3: string[] = (language[i].rws).split(",");
        for (let j = 0; j < rws3.length; j++) {
          if (rws3[j] === "read") {
            read3 = "read3"
          }
          if (rws3[j] === "write") {
            write3 = "write3"
          }
          if (rws3[j] === "speak") {
            speak3 = "speak3"
          }
        }
        break;
      default:
      // code block
    }
  }
  let php: string = "";
  let level1: string = "";
  let mysql: string = "";
  let level2: string = "";
  let laravel: string = "";
  let level3: string = "";
  let oracle: string = "";
  let level4: string = "";

  for (let i = 0; i < technology.length; i++) {
    switch (technology[i].tech_know) {
      case "php":
        php = "php";
        level1 = technology[i].level_of_technology;
        break;
      case "mysql":
        mysql = "mysql"
        level2 = technology[i].level_of_technology;
        break;
      case "laravel":
        laravel = "laravel"
        level3 = technology[i].level_of_technology;
      case "oracle":
        oracle = "oracle"
        level4 = technology[i].level_of_technology;
        break;
      default:
      // code block
    }
  }

  let relation: Array<object> = [];

  for (let i = 0; i < referance.length; i++) {
    relation.push(referance[i]);
  }
  let finaldata = {
    fname: emp[0].fname,
    lname: emp[0].lname,
    designa: emp[0].designation,
    email: emp[0].email,
    phone: emp[0].phone,
    gender: emp[0].gender,
    rel_status: emp[0].rel_status,
    address1: emp[0].address1,
    address2: emp[0].address2,
    city: emp[0].city,
    state: emp[0].state,
    zipcode: emp[0].zipcode,
    bd: emp[0].bd,
    board_name,
    py,
    percentage,
    experience,
    hindi,
    english,
    gujarati,
    read1,
    read2,
    read3,
    write1,
    write2,
    write3,
    speak1,
    speak2,
    speak3,
    php,
    level1,
    mysql,
    level2,
    laravel,
    level3,
    oracle,
    level4,
    relation,
    preloc: preferance[0].prefered_location,
    notice: preferance[0].notice_period,
    exctc: preferance[0].expected_ctc,
    curctc: preferance[0].current_ctc,
    depa: preferance[0].department,
  };
  res.json({ result: finaldata });
}

export default { get_user, emp_det, delete_user };
