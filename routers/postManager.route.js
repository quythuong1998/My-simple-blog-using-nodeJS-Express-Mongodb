var express = require('express');

var postManagerRoute = express.Router();
var postManagerController = require('../controllers/postManager.controller');


postManagerRoute.get('/', postManagerController.index);





module.exports = postManagerRoute;