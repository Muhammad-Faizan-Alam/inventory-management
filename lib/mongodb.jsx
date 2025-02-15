import mongoose from "mongoose";


    

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conneted to DB");
    } catch (error) {
        console.log("DB not connected", error);
    }
};

export default connectdb;