module.exports = function(app){
	var token = app.controllers.token;
	app.get('/api/token',token.listToken);
	app.post('/api/token',token.saveToken);
	app.put('/api/token',token.updateToken);
	app.delete('/api/token',token.deleteToken);
}