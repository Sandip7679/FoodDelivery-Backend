import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://sandipberaetc:7602203089sb@cluster0.pawcl.mongodb.net/startbackend').then(()=>console.log('db connected'))
}