var jwt = require('jsonwebtoken');

module.exports.requireAuth = function (req, res, next) {

	jwt.verify(req.cookies.token, process.env.JWT_KEY, function (err, decoded) {
		if(err){
			res.redirect('/auth/login');
		}
		next();
	});
}
	
	

	

	 
