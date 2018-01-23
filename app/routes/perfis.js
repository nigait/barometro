module.exports = function(app){
	var perfis = app.controllers.perfis;
	app.get('/api/perfis',perfis.listPerfis);
	app.post('/api/perfis',perfis.savePerfis);
	app.put('/api/perfis',perfis.updatePerfis);
	app.delete('/api/perfis',perfis.deletePerfis);
}