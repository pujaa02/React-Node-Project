import con from "../../models/database"
import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import QueryData from "../../interfacefile";

async function get_user(req: Request, res: Response) {
  let query : QueryData[] = await con.getall(`select emp_id,fname,lname from emp_details`) ;
  res.json(query);
}
export default get_user;
