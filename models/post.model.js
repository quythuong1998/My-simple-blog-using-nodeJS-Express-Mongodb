var mongoose = require('mongoose');
var postSchema = new mongoose.Schema({
    name: String,
	author: String,
	description: String,
	content: String
});

var post = mongoose.model('Post', postSchema, 'post');

module.exports = post;