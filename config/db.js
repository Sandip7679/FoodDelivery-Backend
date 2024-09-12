import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect(`${process.env.DBCONNECT_KEY}/startbackend`).then(()=>console.log('db connected'))
}