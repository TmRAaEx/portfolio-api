import client from "../lib/db";

export default async function handler(_, res) {
  try {
    const db_client = await client.connect();
    const db = db_client.db("portfolio");
    const collection = db.collection("Projects");
    const projects = await collection.find({}).toArray();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: "Oväntat fel" });
  }
}
