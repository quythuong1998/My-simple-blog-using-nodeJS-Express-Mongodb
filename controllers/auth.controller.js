var auth = require('../models/user.model');

module.exports.index = function(req, res){
    res.render('auth/login');
}

module.exports.login = function (req, res) {
 
    var uname = req.body.username;
    var pwd = req.body.password;

    auth.find({username: uname}).then(function(u){

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

        res.cookie('UserID', isFinded._id, {
            signed: true
        });

        res.redirect('/');
    })
    //console.log(req.body);
}
