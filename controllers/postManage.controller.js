const post = require('../models/post.model');
const category = require('../models/category.model');

module.exports.index = function (req, res) {
	
	//load all categoris:
	var categoris= [];
	category.find().then(function(p){
	 		categoris = p
		});
	
		//console.log(categoris);

	//load all posts:
	var page = parseInt((req.query.page)) || 1; 
	var postPerPage = 4;

	var start = (page - 1) * postPerPage;
	var end = page * postPerPage;

	post.find().sort({_id: -1}).then(function(p){

		res.render('postManage/index', {
			categoris,
			posts: p.slice(start, end),
			pages: Math.ceil(p.length/postPerPage),
			currentPage: page
		});
	}) 
}

module.exports.getPostByCategory = function(req, res){
	var id = req.params.id;
	
	var categoris= [];
	category.find().then(function(p){
	 		categoris = p
		});
	
	var page = parseInt((req.query.page)) || 1; 
	var postPerPage = 4;

	var start = (page - 1) * postPerPage;
	var end = page * postPerPage;

	post.find({category: id}).sort({_id: -1}).then(function(p){
		res.render('postmanage/index', {
			categoris,
			posts: p.slice(start, end),
			pages: Math.ceil(p.length/postPerPage),
			currentPage: page
		})
	});
}

module.exports.newCategory = function(req,res){
	res.render('postManage/newCategory');
}

module.exports.postNewCategory = function(req, res){
	var categoryDetail = new category({
		name: req.body.name
	});
	categoryDetail.save();
	res.redirect('/manage/postmanage');
}

module.exports.newPost = function (req, res) {
    category.find().then(function(cate){
		res.render('postManage/newPost', {
			categoris: cate
		})
   });
    //res.render('postManage/newPost');
}

module.exports.postPost = function (req, res){
    var postDetails = new post({
        name: req.body.name,
        author: req.body.author,
        description: req.body.description,
		content: req.body.content,
		category: req.body.category,
		image: req.file.path.split('/').slice(1).join('/'),
		date: new Date()
    });
    postDetails.save();
    res.redirect('/manage/postmanage');
}

module.exports.postValidation = function (req, res, next) {
	
	var errors = [];

	if(!req.body.name){
		errors.push('Name of the post is required !');
	}

	if(!req.body.author){
		errors.push('Author of the post is required !');
	}
	if(!req.body.content){
		errors.push('Content of the post is required !');
	}

	if(errors.length){ //neu co loi
		res.render('postManage/newPost', {
			errors: errors,
			values: req.body
		});
	return;
	}

	next();

}

module.exports.categoryValidation = function (req, res, next) {
	
	var errors = [];

	if(!req.body.name){
		errors.push('Name of the post is required !');
	}

	if(errors.length){ //neu co loi
		res.render('postManage/newcategory', {
			errors: errors,
			values: req.body
		});
	return;
	}

	next();

}


