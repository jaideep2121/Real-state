"use server";

import db from "../db/db";
import User from "../models/model";

export const getStore = async () => {
  try {
    await db();

    // Fetch all user data
    const res = await User.find({});
    console.log(res);

    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
