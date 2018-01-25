module.exports = function(app) {
	var EventsController = {
		listEvents : function(request, response){
			var sql = 'SELECT `id_evento`, `id_estabelecimento`, `nome_evento`, `data`, `descricao`,`horario` FROM tb_eventos WHERE dismist=0';
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
			var sql = 'INSERT INTO tb_eventos(id_estabelecimento, nome_evento, descricao, data, horario, banner, dismist) VALUES (1,"'+events.nome_evento+'","'+events.descricao+'","'+events.data+'","'+events.horario+'","'+events.banner+'",0)'
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		updateEvents : function(request,response){
			var eventId = request.params.eventId;
			var event = request.body;
			var sql = 'UPDATE `tb_eventos` SET `id_estabelecimento`="'+event.id_estabelecimento+'", `nome_evento`="'+event.nome_evento+'", `descricao`="'+event.descricao+'", `data`="'+event.data+'" , `horario`="'+event.horario+'", `banner`="'+event.banner+'" WHERE `id_evento` = "'+eventId+'"';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		deleteEvents : function(request,response){
			var eventId = request.params.eventId;
			var sql = 'UPDATE `tb_eventos` SET `dismist`= 1 WHERE `id_evento` = "'+eventId+'"';
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
