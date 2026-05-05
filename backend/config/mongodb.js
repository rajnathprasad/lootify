import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/fitverse`);
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Failed:", error);
    }
};

export default connectDB;