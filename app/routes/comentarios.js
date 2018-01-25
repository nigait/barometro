module.exports = function(app){
	var comentarios = app.controllers.comentarios;
	app.get('/api/comentarios/:typeComment/:idRef',comentarios.listComentarios); // typeComment define o tipo de comentario, idRef indice referecia do local ou evento.
	app.post('/api/comentarios',comentarios.saveComentarios);
	app.put('/api/comentarios/:typeComment/:idRef',comentarios.updateComentarios);
	app.delete('/api/comentarios/:typeComment/:idRef',comentarios.deleteComentarios);
}