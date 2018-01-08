module.exports = function(app){
	var avaliacao = app.controllers.avaliacao;
	app.get('/api/avaliacao',avaliacao.listAvaliacao);
	app.post('/api/avaliacao',avaliacao.saveAvaliacao);
	app.put('/api/avaliacao',avaliacao.updateAvaliacao);
	app.delete('/api/avaliacao',avaliacao.deleteAvaliacao);
}