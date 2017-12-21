module.exports = function(app) {
	var EventsController = {
		listEvents : function(request, response){
			var sql = 'SELECT `id_estabelecimento`, `nome_evento`, `data`, `descricao`,`horario` FROM tb_eventos WHERE dismist=0';
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
			var sql = 'INSERT INTO tb_eventos (INSERT INTO `tb_eventos`(id_estabelecimento, nome_evento, descricao, data, horario, banner, dismist) VALUES (1,"'+events.nome_evento+'","'+events.descricao+'","'+events.data+'","'+events.horario+'","'+events.banner+'",0)'
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		updateEvents : function(request,response){
			
		},
		deleteEvents : function(request,response){
			
		}
	};
	return EventsController;
}
