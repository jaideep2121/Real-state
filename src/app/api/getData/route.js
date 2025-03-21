import db from "../../db/db";
import User from "../../models/model";



export async function GET(req) {
  try {
    await db();
    const data = await User.find({}).sort({ createdAt: -1 }); // Sort by latest
    console.log(data);
    return Response.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
