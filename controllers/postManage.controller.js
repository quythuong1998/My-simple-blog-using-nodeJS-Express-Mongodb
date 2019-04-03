var post = require('../models/post.model');

module.exports.index = function (req, res) {
    post.find().then(function (p) {
        
        res.render('postManage/index', {
            posts: p
        }); 
    })
    //
}



