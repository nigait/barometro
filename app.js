var app = require('./config/express')();
var http = require('http').Server(app);
http.listen(3003,function (){
	console.log('hey I am running!!!');
	
});

