
var post = require('../models/post.model');

module.exports.index = function(req, res) {

    


    post.find().sort({_id: -1}).then(function (post) {
        // if(post[1].description)
        console.log(post[1].description.length);
        var string1;
        var string2;
        if(post[1].description.length > 200){
            string1 = post[1].description.slice(0, 115) + "...";
        }
        if(post[2].description.length > 200){
            string2 = post[2].description.slice(0, 115) + "...";
        }

        res.render('index', {
            posts: post.slice(3,post.length),
            oneNewestPost: post[0],
            twoNewestPost1: post[1],
            post1Des: string1, 
            twoNewestPost2: post[2],
            post2Des: string2,                 
        })
  
    })
}

module.exports.view = function (req, res) {
    var id = req.params.id;
    post.find({_id: id}).then(function (p) {
        res.render('post/view', {
            posts: p[0]
        })
        //console.log(p);
    })
}


