module.exports = function(app){
	var horarios = app.controllers.horarios;
	app.get('/api/horarios',horarios.listHorarios);
	app.post('/api/horarios',horarios.saveHorarios);
	app.put('/api/horarios/:horarioId',horarios.updateHorarios);
	app.delete('/api/horarios/:horarioId',horarios.deleteHorarios);
}