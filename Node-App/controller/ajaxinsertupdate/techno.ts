import con from "../../models/database"
import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import QueryData from "../../interfacefile";

async function tech(req: Request, res: Response) {
  let query: QueryData[] = await con.getall(`select * from know_techno`);
  res.json(query);
}
export default tech;
