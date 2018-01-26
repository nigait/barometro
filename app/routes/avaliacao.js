module.exports = function(app){
	var avaliacao = app.controllers.avaliacao;
	app.get('/api/avaliacao/:typeAval/:idRef',avaliacao.listAvaliacao);
	app.post('/api/avaliacao',avaliacao.saveAvaliacao);
	app.put('/api/avaliacao/:avalId',avaliacao.updateAvaliacao);
	app.delete('/api/avaliacao/:avalId',avaliacao.deleteAvaliacao);
}