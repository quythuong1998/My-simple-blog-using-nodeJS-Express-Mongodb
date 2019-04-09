var post = require('../models/post.model');

module.exports.index = function (req, res) {
    post.find().then(function (p) {
        
        res.render('postManage/index', {
            posts: p
        }); 
    })
    //
}

module.exports.newPost = function (req, res) {
    
    res.render('postManage/newPost');
}

module.exports.postPost = function (req, res){

    var postDetails = new post({
        name: req.body.name,
        author: req.body.author,
        description: req.body.description,
        content: req.body.content
    });

    postDetails.save();
    res.redirect('/manage/postmanage');
}



