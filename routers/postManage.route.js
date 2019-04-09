var express = require('express');
var postManageRoute = express.Router();
var postManageController = require('../controllers/postManage.controller');


postManageRoute.get('/postmanage', postManageController.index);
postManageRoute.get('/newpost', postManageController.newPost);
postManageRoute.post('/newpost',postManageController.postValidation, postManageController.postPost);
module.exports = postManageRoute;