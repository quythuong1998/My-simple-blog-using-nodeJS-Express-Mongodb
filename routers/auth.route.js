var express = require('express');
var authRoute = express.Router();
var authController = require('../controllers/auth.controller');

authRoute.get('/login', authController.index);
authRoute.post('/login', authController.login);


module.exports = authRoute;

//var requireAuth = require('../middlewares/requireAuth');
