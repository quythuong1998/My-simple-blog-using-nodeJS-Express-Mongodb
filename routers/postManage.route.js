var express = require('express');
var postManageRoute = express.Router();
var postManageController = require('../controllers/postManage.controller');


postManageRoute.get('/postmanage', postManageController.index);
postManageRoute.get('/newpost', postManageController.newPost);

module.exports = postManageRoute;