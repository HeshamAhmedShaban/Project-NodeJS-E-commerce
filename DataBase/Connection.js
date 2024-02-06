
import mongoose from "mongoose";

let connection = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/projectNode');
        console.log('DataBase Connected');
    } catch (error) {
        console.log('Error DataBase', error);
    }
}

export default connection;