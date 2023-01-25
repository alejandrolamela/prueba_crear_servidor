
const express = require('express');
const controller = require('./delivery.controller');
const router = express.Router();

router.delete('/delete/:id', controller.deleteDelivery);
router.put('/edit/:id', controller.editPut);
router.post('/create', controller.createPost);
router.get('/', controller.indexGet);

module.exports = router;