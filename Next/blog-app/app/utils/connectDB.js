import mongoose from "mongoose";

let isConnected = false;
export const connectDB = async () => {
    mongoose.set('strictQuery', true);

    try {
        if(!isConnected){
            await mongoose.connect(process.env.MONGODB_URL, {
                dbName: 'NextJS'
            })
            isConnected = true
            console.log("Database connected")
        } else {
            console.log("Database already connected")
        }
    } catch (error) {
        console.log(error)
    }
}