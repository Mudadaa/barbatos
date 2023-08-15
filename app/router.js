const express = require('express');
const router = express.Router();

//on importe le controller
const mainController = require('./mainController');

//page d'accueil
router.get('/', mainController.HomePage);
//on exporte le routerrs
module.exports = router;
