import mongoose from "mongoose";

const dbURI = process.env.MONGO_URL;

const DB = async () => mongoose.connect(dbURI);

export default DB;
