require('dotenv').config();
var express = require('express');
var app = express();
var port = 3000;
var cookieParser = require('cookie-parser');
app.use(cookieParser(process.env.SESSION_SECRET)); //day la secret, dang ra phai generate mot chuoi ngau nhien nao no de vao day
var jwt = require('jsonwebtoken');

//connect database mongodb by mongoose
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true } ,  function (err) {
    if (err) throw err;
    console.log('Successfully connected');
})


//thiet lap PUG - VIEW ENGINE
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));



var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


//khu vuc require route:
var indexRoute = require('./routers/index.route');
var authRoute = require('./routers/auth.route');
var postManageRoute = require('./routers/postManage.route');
var requireAuth = require('./middlewares/requireAuth');

app.use('/', indexRoute);
app.use('/manage', requireAuth.requireAuth, postManageRoute);
app.use('/auth', authRoute);





app.listen(port, function(){
	console.log('server listening on port '+ port);
});

