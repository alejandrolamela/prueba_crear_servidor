//Importamos
const express = require('express');
const controller = require('./restaurant.controller');
const router = express.Router();

//Rutas
// ruta:/movies/post me añade una pelicula a la base de datos
router.post('/create', controller.createPost);
// ruta: /movies/edit/sdfsdfggsdg despues del edit añadimos el id concreto de la pelicula que queramos editar
 router.put('/edit/:id', controller.editPut);
// ruta: /movies/delete
router.delete('/delete/:id', controller.deleteRestaurant);
// ruta: /movies/ me imprime todas las peliculas (cartelera)
router.get('/', controller.indexGet);


//Exportamos nuestras rutas
module.exports = router;