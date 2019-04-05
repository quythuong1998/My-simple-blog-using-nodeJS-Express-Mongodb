var user = require('../models/user.model');
var jwt = require('jsonwebtoken');

module.exports.index = function(req, res){
    res.render('auth/login');
}

module.exports.login = function (req, res) {
 
    var uname = req.body.username;
    var pwd = req.body.password;

    user.find({username: uname}).then(function(u){

        //console.log(u[0]);
        isFinded = u[0];

        if(!isFinded){
            res.render('auth/login',{
                errors: ['User does not exist !'],
                valuesCurent: req.body
            })  
        }
        
        if(isFinded.password !== pwd){
            res.render('auth/login', {
                errors: ['Wrong password !'],
                valuesCurent: req.body
            })
        }

        var token = jwt.sign({ 
            username: isFinded.email, 
            nameUser: isFinded.fullName, 
            _id: isFinded._id}, process.env.JWT_KEY);
        
        res.cookie('token', token);
        res.redirect('/manage/postmanage');
    })
}

