module.exports = function(app){
	var checking = app.controllers.checking;
	app.get('/api/checking',checking.listChecking);
	app.post('/api/checking',checking.saveChecking);
	app.put('/api/checking',checking.updateChecking);
	app.delete('/api/checking',checking.deleteChecking);
}