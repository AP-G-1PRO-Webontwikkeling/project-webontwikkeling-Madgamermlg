import dotenv, { config } from "dotenv";
import { MongoClient } from "mongodb";
import { FatedSummons } from "./interface";

dotenv.config();

const dbconnect: string = process.env.databaseURL ?? "";
const client = new MongoClient(dbconnect);
async function infoCards(): Promise<FatedSummons[]> {
    try {
        await client.connect()
        const database = client.db("FatedSummons");
        const collection = database.collection<FatedSummons>("Cards");
        console.log("Connection established");

        return (await collection?.find().toArray()) ?? [];
    } finally {
        await client.close();
        console.log("Connection closed")
    }
}
