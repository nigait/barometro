var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cors = require('cors');
var hash = require('crypto-toolkit').Hash('hex');
// var FCM = require('fcm-node');
// var serverkey = '';
// var fcm = new FCM(serverkey);
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'bd_b_barometro'
});
connection.connect();

module.exports = function(){
	var app = express();
	app.set('db', connection);
	app.set('hash', hash);
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended : false}));
	app.use(cors({credentials : true}));
	load('controllers',{cwd : 'app'})
	.then('routes')
	.into(app);
	return app;
}





