const express = require('express');
const controller = require('./user.controller');

const router = express.Router();
//Primero, definimos la ruta a nuestra funcion crear usuario


router.post('/register', controller.registerPost);
router.post('/login', controller.loginPost);



// Exportamos la ruta  de user
module.exports = router;