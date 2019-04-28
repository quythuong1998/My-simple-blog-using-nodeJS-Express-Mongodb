const category = require('../models/category.model');

//dung de load category 
module.exports.loadCaterogy = function(req, res, next){
	category.find().then(function(cate){
		res.locals.cate = cate
   });
   next();
}