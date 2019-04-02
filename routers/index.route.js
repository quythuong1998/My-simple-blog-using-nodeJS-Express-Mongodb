var express = require('express');
var indexRoute = express.Router();
var indexController = require('../controllers/index.controller');

indexRoute.get('/', indexController.index);
indexRoute.get('/:id', indexController.view);

module.exports = indexRoute;