module.exports = function(app) {
	var EventsController = {
		listEvents : function(request, response){
			var sql = 'SELECT `id_estabelecimento`, `id_evento`, `nome_evento`, `data`, `descricao`,`horario` FROM tb_eventos WHERE dismist=0';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		saveEvents : function(request, response){
			var events = request.body;
			var sql = 'INSERT INTO tb_eventos (banner, data, descricao, dismist, horario, id_estabelecimento, id_evento, nome_evento) VALUES ("'+events.banner+'","'+events.data+'","'+events.descricao+'",0, "'+events.horario+'", "'+events.id_estabelecimento+'", "'+events.id_evento+'", "'+events.nome_evento+'")'
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		}
	};
	return EventsController;
}
