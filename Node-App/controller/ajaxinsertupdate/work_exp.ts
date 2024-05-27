import con from "../../models/database"
import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import QueryData from "../../interfacefile";

async function work_exp(req: Request, res: Response) {
  let query: QueryData[] = await con.getall(`select * from work_experience`);
  res.json(query);
}
export default work_exp;
