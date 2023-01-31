import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('Failed to connect', err));
}

export default connectDB;