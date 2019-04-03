var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username: String,
    password: String, 
    nameUSer: String
})

var user = mongoose.model('User', userSchema, 'user');
module.exports = user;