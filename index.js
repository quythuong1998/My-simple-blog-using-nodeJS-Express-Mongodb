const express = require('express');
const app = express();
const port = 3000;

//thiet lap PUG - VIEW ENGINE
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res ){
    res.render('index');
}); //index.pug trong views

//khu vuc require route:
var postManagerRoute = require('./routers/postManager.route');

app.use('/postmanager', postManagerRoute);


app.listen(port, function(){
	console.log('server listening on port '+ port);
});

