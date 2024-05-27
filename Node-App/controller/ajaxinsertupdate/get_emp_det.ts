import con from "../../models/database"
import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import QueryData from "../../interfacefile";

async function emp_det(req: Request, res: Response) {
  let query: QueryData[]  = await con.getall(`select * from emp_details`) ;
  res.json(query);
}
export default emp_det;