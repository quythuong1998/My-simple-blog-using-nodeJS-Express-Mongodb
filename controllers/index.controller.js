
var post = require('../models/post.model');

module.exports.index = function(req, res) {

    
    var page = parseInt((req.query.page)) || 1; 
	var postPerPage = 4;

	var start = ((page - 1) * postPerPage);
	var end = page * postPerPage;


	post.find().sort({_id: -1}).then(function(p){
        // var string1;
        // var string2;
        // if(p[1].description.length > 200){
        //     string1 = p[1].description.slice(0, 115) + "...";
        // }
        // if(p[2].description.length > 200){
        //     string2 = p[2].description.slice(0, 115) + "...";
        // }

		res.render('index', {
			posts: p.slice(start, end),
			pages: Math.ceil(p.length/postPerPage),
            currentPage: page,

             oneNewestPost: p[0],
            // twoNewestPost1: p[1],
            // post1Des: string1, 
            // twoNewestPost2: p[2],
            // post2Des: string2,  
		});
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


