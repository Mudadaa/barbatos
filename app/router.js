const express = require('express');
const router = express.Router();

//on importe le controller
const mainController = require('./mainController');

//page d'accueil
router.get('/', mainController.homePage);
//on exporte le router
module.exports = router;
