module.exports = function(app) {
	var AvaliacaoController = {
		listAvaliacao : function(request, response){
			var sql = 'SELECT `id_usuario_app`, `tipo_avaliacao`, `voto`, `id_referencia_avaliacao` FROM tb_avaliacao WHERE dismist=0';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		saveAvaliacao : function(request, response){
			var avaliacao = request.body;
			var sql = 'INSERT INTO tb_avaliacao(id_usuario_app, tipo_avaliacao, voto, id_referencia_avaliacao, dismist) VALUES (1,"'+avaliacao.tipo_avaliacao+'","'+avaliacao.voto+'","'+avaliacao.id_referencia_avaliacao+'",0)'
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		updateAvaliacao : function(request,response){
			
		},
		deleteAvaliacao : function(request,response){
			
		}
	};
	return AvaliacaoController;
}
