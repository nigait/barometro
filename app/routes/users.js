module.exports = function(app){
	var users = app.controllers.users;
	app.get('/api/users',users.listUsers);
	app.post('/api/users',users.saveUsers);
	app.put('/api/users',users.updateUsers);
	app.delete('/api/users',users.deleteUsers);
}