var express = require('express');
var postManageRoute = express.Router();
var postManageController = require('../controllers/postManage.controller');

postManageRoute.get('/postmanage', postManageController.index);

module.exports = postManageRoute;