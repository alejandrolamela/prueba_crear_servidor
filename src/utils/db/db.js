const mongoose = require('mongoose');
const password= 'user_1';

const DB_URL = `mongodb+srv://user_1:${password}@cluster0.clyen4r.mongodb.net/?retryWrites=true&w=majority`;


const connectDB = async()=>{
      try {
        mongoose.set('strictQuery', true); //Esto se pone para que no me de warmings, es obligatorio
        const db = await mongoose.connect(DB_URL);
        const {name, host} = db.connection;
        console.log(`Server conectado a la base de datos ${name} en ${host}`)

      } catch (error) {
        console.log(`Error , ${error}`);
      }
}

module.exports = {
    connectDB,
}