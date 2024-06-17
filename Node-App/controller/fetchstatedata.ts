import { Request, Response } from "express";
import { State, City } from "../interfacefile";
import con from "../models/database";

async function get_state(req: Request, res: Response) {
    const query: State[] = await con.getall(`select * from states`);
    res.json(query);
}

async function get_cities(req: Request, res: Response) {
    const id: number = Number(req.params.id);
    const query: City[] = await con.getall(`select * from cities where state_id=${id}`);
    res.json(query);
}
async function get_city(req: Request, res: Response) {
    const query: City[] = await con.getall(`select * from cities`);
    res.json(query);
}

export default { get_state, get_cities, get_city };