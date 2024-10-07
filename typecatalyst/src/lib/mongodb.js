import mongoose from "mongoose";

export const connectMongodb = async () => {
    if (mongoose.connections[0].readyState) {
        console.log("MongoDB already connected");
        return; 
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error); 
    }
};

