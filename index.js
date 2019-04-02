require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

//thiet lap PUG - VIEW ENGINE
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
//connect database mongodb by mongoose
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true } ,  function (err) {
    if (err) throw err;
    console.log('Successfully connected');
})

//khu vuc require route:
var postManagerRoute = require('./routers/postManager.route');
var indexRoute = require('./routers/index.route');

app.use('/', indexRoute);
app.use('/postmanager', postManagerRoute);




app.listen(port, function(){
	console.log('server listening on port '+ port);
});

