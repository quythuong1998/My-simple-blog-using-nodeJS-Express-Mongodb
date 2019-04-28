var mongoose = require('mongoose');
var postSchema = new mongoose.Schema({
    name: String,
	author: String,
	description: String,
	content: String,
	image: String,
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category'
	},
	date: Date
});

var post = mongoose.model('Post', postSchema, 'post');

module.exports = post;