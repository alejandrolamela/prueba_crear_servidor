const mongoose = require('mongoose');
const password= 'user_1';
const dbName= 'pokedex';
const DB_URL = `mongodb+srv://user_1:${password}@cluster0.dna3ovn.mongodb.net/${dbName}`;

const connectDB = async()=>{
      try {
        mongoose.set('strictQuery', true);
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