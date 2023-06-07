const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
const connectDB = async() => {

    try {
        const conn = await mongoose.connect(process.env.mongodb_URI);
        console.log('database suuccefkly connected:');
    }catch(error){
        console.log(error);
    }
}

module.exports = connectDB;
 