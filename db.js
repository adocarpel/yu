const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async()=>{
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(error)
    }

}
module.exports = {connectDB}
