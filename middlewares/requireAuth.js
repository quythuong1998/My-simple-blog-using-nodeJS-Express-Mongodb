var user = require('../models/user.model');

//yeu cau nguoi dung dang nhap neu ho chua dang nhap

module.exports.requireAuth = function (req, res, next) {
	if(!req.signedCookies.userId){ //day chi la demo cach hoat dong khi co cookies, khong dung trong bai toan thuc te
		res.redirect('auth/login');
		return;
    }
    
	user.find({_id: req.signedCookies.userId}).then(function (u) {
		if(!u){
			//res.redirect('/auth/login');		
			return;
		}
		res.locals.user = u[0];
		next();
	})
	
	

	

	 
}