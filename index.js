// Crear servidor
// 1 traemos la libreria express
const express = require("express");
const server = express();
const db = require('./src/utils/db/db');
console.log('DB dentro de index', db);
db.connectDB();

 const PORT = 3001;

// Rutas

const indexRoutes = require('./src/index/index.routes');
server.use(indexRoutes);


server.listen(PORT, ()=> {
    console.log(`Server  running in http://localhost:${PORT} on port, ${PORT} `);
})

// mongodb+srv://user_1:<password>@cluster0.dna3ovn.mongodb.net/?retryWrites=true&w=majority