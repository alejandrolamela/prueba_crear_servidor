const express = require('express');
const router = express.Router();
const controller = require('./index.controller');


router.get('/', controller.rootGet);

 router.get('/movies' , controller.moviesGet);

 router.get('/movies/:movie', controller.movieGet );

//  Ahora lo hacemos exportable

module.exports = router;