module.exports = function(app){
	var comentarios = app.controllers.comentarios;
	app.get('/api/comentarios',comentarios.listComentarios);
	app.post('/api/comentarios',comentarios.saveComentarios);
	app.put('/api/comentarios',comentarios.updateComentarios);
	app.delete('/api/comentarios',comentarios.deleteComentarios);
}