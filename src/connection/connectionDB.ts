import mongoose from "mongoose";
export const ConnectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("mongoDB is connected");
    });
    connection.on("error", () => {
      console.log("mongoDB is not connected");
    });
  } catch (error: any) {
    console.log("connection faild");
  }
};
