import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOO_DB_URI);
    console.log("Database connection successfull!");
  } catch (error) {
    console.log("Database connection fail!");
    console.log(error);
  }
};

export default connectDB;
