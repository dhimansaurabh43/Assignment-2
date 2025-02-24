import mongoose from "mongoose"; //imported mongoose


//async function to connect to DB
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://saurabh:saurabh@games.iogeh.mongodb.net/?retryWrites=true&w=majority&appName=games");
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

export default connectDB;
