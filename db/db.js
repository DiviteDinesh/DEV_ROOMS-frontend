import mongoose from "mongoose";

import dotenv from 'dotenv';
dotenv.config();  // Ensure environment variables are loaded
function connect() {
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        // console.log(process.env.MONGODB_URI+ "\n");
        console.log(err + " not connected to mongodb");
    })
}
// console.log("connected to mongodb");

export default connect;