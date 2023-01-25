// Crear servidor
// 1 traemos la libreria express
const express = require("express");
const passport = require('passport'); 
const auth = require('./src/utils/auth/index');
auth.activarAutentication();

const db = require('./src/utils/db/db');
console.log('DB dentro de index', db);
db.connectDB();



// Rutas

const usersRoutes = require('./src/api/users/user.routes');
const indexRoutes = require('./src/api/index/index.routes');
const restaurantsRoutes = require('./src/api/restaurants/restaurant.routes');
const deliverysRoutes = require('./src/api/deliverys/delivery.routes');


 const PORT = 3006;
//Servers 
const server = express();

//Esta funcion sirve para cuando vayamos a postmand podamos devolver respuestas json, si no lo ponemos nuestro servidor nunca recebira
//respuestas json, est obligatorio PONER ESTo
server.use(express.json());
// convierte cuando mandamos un form o formData al servidor, quiere decir que cuando esteamos en postman y tenemos puesto el form-data
//necesitamos este codigo para que pueda devolver una respuesta al servidor, por ejemplo un formulario html lo enviaremos en formato form-data
server.use(express.urlencoded({ extended: true }));

//Autenticacion
server.use(passport.initialize());


server.use('/users',usersRoutes);
server.use('/restaurants', restaurantsRoutes);
server.use('/deliverys', deliverysRoutes);
server.use('/',indexRoutes);



// Controlador de errores.
server.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || 'Unexpected Error!';
    return res.status(status).json(message);
 });

server.listen(PORT, ()=> {
    console.log(`Server  running in http://localhost:${PORT} on port, ${PORT} `);
})



// Por aquí pasarán todas las rutas que no existan.
// si no hacen match en las rutas previas, llegarán aquí y harán match con asterisco (todo entra!)
server.use('*', (req, res, next) => {
    return res.status(404).json('No se encuentra la URL. Prueba con otra URL');
})


// mongodb+srv://user_1:<password>@cluster0.dna3ovn.mongodb.net/?retryWrites=true&w=majority