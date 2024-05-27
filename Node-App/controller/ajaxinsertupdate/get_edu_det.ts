import { RowDataPacket } from "mysql2";
import con from "../../models/database"
import { Request, Response } from "express";
import QueryData from "../../interfacefile";

async function edu_det(req: Request, res: Response) {
  let query: QueryData[]  = await con.getall(`select * from edu_detail`) ;
  res.json(query);
}
export default edu_det;
