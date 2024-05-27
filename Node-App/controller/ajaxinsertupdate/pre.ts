import con from "../../models/database";
import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import QueryData from "../../interfacefile";

async function pre(req: Request, res: Response) {
  let query: QueryData[] =await con.getall(`select * from preferences`) ;
  res.json(query);
}
export default pre;
