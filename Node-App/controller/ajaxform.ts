import * as express from "express";
const route = express.Router();
import { Request, Response } from "express";
import { FormData, Ids, getIds } from "../interfacefile";
import con from "../models/database";
import parser from "body-parser";
route.use(parser.json());
route.use(parser.urlencoded({ extended: false }));

interface IStringArray extends Array<string | number | Date | boolean> { };


const insertform = async (req: Request, res: Response) => {
    const formData: FormData = req.body;

    let id: number;
    const experience_data = formData["experience"];
    const relation_data = formData["relation"];

    try {
        const values: IStringArray = [
            formData.fname,
            formData.lname,
            formData.designa,
            formData.email,
            formData.phone,
            formData.gender,
            formData.rel_status,
            formData.address1,
            formData.address2,
            formData.city,
            formData.state,
            formData.zipcode,
            formData.bd,
        ];
        const emp_detail: number = await con.insert(
            `INSERT INTO emp_details (fname, lname, designation, email, phone, gender, rel_status, address1, address2, city, state, zipcode, bd) VALUES (?)`,
            [values]
        );

        id = emp_detail;

        const edu: IStringArray = ["ssc", "hsc", "bachelor", "master"];

        for (let i = 0; i < 4; i++) {
            const eduValues: (string | number | boolean | Date)[] = [
                id,
                edu[i],
                formData.board_name[i],
                formData.py[i],
                formData.percentage[i],
            ];
            if (formData.board_name[i] !== "") {
                await con.insert(
                    `INSERT INTO edu_detail (emp_id, type_of_result, Name_of_board_or_course, Passing_year, Percentage) VALUES (?)`,
                    [eduValues]
                );
            }
        }

        for (let i = 0; i < experience_data.length; i++) {
            const workValues: (string | number | Date)[] = [
                id,
                experience_data[i].companyname,
                experience_data[i].designation,
                experience_data[i].from_date,
                experience_data[i].to_date,
            ];
            if (experience_data[i].companyname !== "") {
                await con.insert(
                    `INSERT INTO work_experience(emp_id,companyname,designation,from_date,to_date) VALUES (?)`,
                    [workValues]
                );
            }

        }

        let language: boolean[] = [];
        let rws: string[] = [];
        let able1: string[] = [];
        let able2: string[] = [];
        let able3: string[] = [];

        if (formData.hindi) {
            language.push(formData.hindi);
            if (formData.read1) {
                able1.push("read");
            }
            if (formData.write1) {
                able1.push("write")
            }
            if (formData.speak1) {
                able1.push("speak")
            }
        } else {
            language.push(false);
        }
        if (formData.english) {
            language.push(formData.english)
            if (formData.read2) {
                able2.push("read");
            }
            if (formData.write2) {
                able2.push("write")
            }
            if (formData.speak2) {
                able2.push("speak")
            }
        } else {
            language.push(false);
        }
        if (formData.gujarati) {
            language.push(formData.gujarati)
            if (formData.read3) {
                able3.push("read");
            }
            if (formData.write3) {
                able3.push("write")
            }
            if (formData.speak3) {
                able3.push("speak")
            }
        } else {
            language.push(false);
        }

        rws.push(able1.join(), able2.join(), able3.join())

        for (let i = 0; i < language.length; i++) {
            if (language[i]) {
                await con.insert(`INSERT INTO language (emp_id, language_know, rws) VALUES ('${id}', '${language[i]}', '${rws[i]}');`);
            }
        }
        //technology

        const tech: IStringArray = [];
        const level: IStringArray = [];

        if (formData.php) {
            tech.push(formData.php);
            level.push(formData.level1)
        }
        if (formData.mysql) {
            tech.push(formData.mysql);
            level.push(formData.level2)
        }
        if (formData.laravel) {
            tech.push(formData.laravel);
            level.push(formData.level3)
        }
        if (formData.oracle) {
            tech.push(formData.oracle);
            level.push(formData.level4)
        }


        for (let i = 0; i < tech.length; i++) {
            if (tech[i]) {
                await con.insert(`INSERT INTO know_techno (emp_id, tech_know, level_of_technology) VALUES ('${id}', '${tech[i]}', '${level[i]}');`);
            }
        }


        for (let i = 0; i < relation_data.length; i++) {
            const relation: IStringArray = [
                id,
                relation_data[i].name,
                relation_data[i].mobileno,
                relation_data[i].rel,
            ];
            if (relation_data[i].name !== "") {
                await con.insert(
                    `insert into reference_contact(emp_id, name ,mobileno,rel) values ( ? )`,
                    [relation]
                );
            }
        }
        const pre: Array<string | number> = [
            id,
            formData.preloc.join(),
            formData.notice,
            formData.exctc,
            formData.curctc,
            formData.depa,
        ];
        await con.insert(
            `insert into preferences(emp_id, prefered_location,notice_period , expected_ctc,current_ctc , department) values( ? )`,
            [pre]
        );
        res.json({ msg: "Success" });
    } catch (error) {
        console.log(error);
        res.json({ msg: "Failed" });
    }
};

const updateform = async (req: Request, res: Response) => {
    const emp_id: number = Number(req.params.id);
    let id: number;
    const formData: FormData = req.body;
    const experience_data = formData["experience"];
    const relation_data = formData["relation"];
    try {
        await con.delete(`delete from preferences where emp_id=${emp_id}`);
        await con.delete(`delete from reference_contact where emp_id=${emp_id}`);
        await con.delete(`delete from know_techno where emp_id=${emp_id}`);
        await con.delete(`delete from language where emp_id=${emp_id}`);
        await con.delete(`delete from work_experience where emp_id=${emp_id}`);
        await con.delete(`delete from edu_detail where emp_id=${emp_id}`);
        await con.delete(`delete from emp_details where emp_id=${emp_id}`);
        const values: IStringArray = [
            formData.fname,
            formData.lname,
            formData.designa,
            formData.email,
            formData.phone,
            formData.gender,
            formData.rel_status,
            formData.address1,
            formData.address2,
            formData.city,
            formData.state,
            formData.zipcode,
            formData.bd,
        ];
        const emp_detail: number = await con.insert(
            `INSERT INTO emp_details (fname, lname, designation, email, phone, gender, rel_status, address1, address2, city, state, zipcode, bd) VALUES (?)`,
            [values]
        );

        id = emp_detail;

        const edu: IStringArray = ["ssc", "hsc", "bachelor", "master"];

        for (let i = 0; i < 4; i++) {
            const eduValues: (string | number | boolean | Date)[] = [
                id,
                edu[i],
                formData.board_name[i],
                formData.py[i],
                formData.percentage[i],
            ];
            if (formData.board_name[i] !== "") {
                await con.insert(
                    `INSERT INTO edu_detail (emp_id, type_of_result, Name_of_board_or_course, Passing_year, Percentage) VALUES (?)`,
                    [eduValues]
                );
            }
        }

        for (let i = 0; i < experience_data.length; i++) {
            const workValues: (string | number | Date)[] = [
                id,
                experience_data[i].companyname,
                experience_data[i].designation,
                experience_data[i].from_date,
                experience_data[i].to_date,
            ];
            if (experience_data[i].companyname !== "") {
                await con.insert(
                    `INSERT INTO work_experience(emp_id,companyname,designation,from_date,to_date) VALUES (?)`,
                    [workValues]
                );
            }

        }
        //language

        let language: boolean[] = [];
        let rws: string[] = [];
        let able1: string[] = [];
        let able2: string[] = [];
        let able3: string[] = [];

        if (formData.hindi) {
            language.push(formData.hindi);
            if (formData.read1) {
                able1.push("read");
            }
            if (formData.write1) {
                able1.push("write")
            }
            if (formData.speak1) {
                able1.push("speak")
            }
        } else {
            language.push(false);
        }
        if (formData.english) {
            language.push(formData.english)
            if (formData.read2) {
                able2.push("read");
            }
            if (formData.write2) {
                able2.push("write")
            }
            if (formData.speak2) {
                able2.push("speak")
            }
        } else {
            language.push(false);
        }
        if (formData.gujarati) {
            language.push(formData.gujarati)
            if (formData.read3) {
                able3.push("read");
            }
            if (formData.write3) {
                able3.push("write")
            }
            if (formData.speak3) {
                able3.push("speak")
            }
        } else {
            language.push(false);
        }

        rws.push(able1.join(), able2.join(), able3.join())

        for (let i = 0; i < language.length; i++) {
            if (language[i]) {
                await con.insert(`INSERT INTO language (emp_id, language_know, rws) VALUES ('${id}', '${language[i]}', '${rws[i]}');`);
            }
        }
        //technology

        const tech: IStringArray = [];
        const level: IStringArray = [];

        if (formData.php) {
            tech.push(formData.php);
            level.push(formData.level1)
        }
        if (formData.mysql) {
            tech.push(formData.mysql);
            level.push(formData.level2)
        }
        if (formData.laravel) {
            tech.push(formData.laravel);
            level.push(formData.level3)
        }
        if (formData.oracle) {
            tech.push(formData.oracle);
            level.push(formData.level4)
        }


        for (let i = 0; i < tech.length; i++) {
            if (tech[i]) {
                await con.insert(`INSERT INTO know_techno (emp_id, tech_know, level_of_technology) VALUES ('${id}', '${tech[i]}', '${level[i]}');`);
            }
        }

        //referance


        for (let i = 0; i < relation_data.length; i++) {
            const relation: IStringArray = [
                id,
                relation_data[i].name,
                relation_data[i].mobileno,
                relation_data[i].rel,
            ];
            if (relation_data[i].name !== "") {
                await con.insert(
                    `insert into reference_contact(emp_id, name ,mobileno,rel) values ( ? )`,
                    [relation]
                );
            }
        }
        // Preferences
        const pre: Array<string | number|string[]> = [
            id,
            (formData.preloc),
            formData.notice,
            formData.exctc,
            formData.curctc,
            formData.depa,
        ];
        await con.insert(
            `insert into preferences(emp_id, prefered_location,notice_period , expected_ctc,current_ctc , department) values( ? )`,
            [pre]
        );
        res.json({ msg: "Success" });
    } catch (error) {
        console.log(error);

        res.json({ msg: "Failed" });
    }
};

export default { insertform, updateform };
