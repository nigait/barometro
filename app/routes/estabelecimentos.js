module.exports = function(app){
	var estabelecimentos = app.controllers.estabelecimentos;
	app.get('/api/estabelecimentos',estabelecimentos.listEstabelecimentos);
	app.post('/api/estabelecimentos',estabelecimentos.saveEstabelecimentos);
	app.put('/api/estabelecimentos',estabelecimentos.updateEstabelecimentos);
	app.delete('/api/estabelecimentos',estabelecimentos.deleteEstabelecimentos);
}