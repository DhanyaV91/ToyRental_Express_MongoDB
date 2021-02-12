const express = require('express');
const router = express.Router();
const { updateToy } = require('./controller/toycontroller');

//http://localhost:port/toys - GET for getAllToys and POST for saveToy methods
//router.route('/').get(getToys);
//router.route('/').post(saveToy);
//http://localhost:port/[id] - Directly provide the id instead of '?id=' or any other URL suffixes - FOR MySQL
//Put http://localhost:5003/toys/Ludo as well as provide {"name":"Ludo"} in the Body part of request - FOR MONGODB
//router.route('/:name').get(getToy);
//Put http://localhost:5003/toys/Ludo as well as provide {"name":"Ludo"} in the Body part of request - FOR MONGODB
//router.route('/:name').delete(removeToy);
router.route('/:name/:type').put(updateToy);
module.exports = router;