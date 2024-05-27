import con from "../../models/database"
import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import QueryData from "../../interfacefile";

async function ref(req: Request, res: Response) {
  let query: QueryData[] = await con.getall(`select * from reference_contact`);
  res.json(query);
}
export default ref;
