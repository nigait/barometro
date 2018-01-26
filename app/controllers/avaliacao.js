module.exports = function(app) {
	var AvaliacaoController = {
		listAvaliacao : function(request, response){
			var typeAval = request.params.typeAval;
			var idRef = request.params.idRef;
			var sql = 'SELECT `id_avaliacao`,`id_usuario_app`,`voto`, `tipo_avaliacao`, `id_referencia_avaliacao` FROM tb_avaliacao WHERE dismist=0 AND tipo_avaliacao = '+typeAval+' AND id_referencia_avaliacao = '+idRef;
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
			var sql = 'INSERT INTO tb_avaliacao(id_usuario_app,voto, tipo_avaliacao, id_referencia_avaliacao, dismist) VALUES ("'+avaliacao.id_usuario_app+'","'+avaliacao.voto+'","'+avaliacao.tipo_avaliacao+'","'+avaliacao.id_referencia_avaliacao+'",0)'
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		updateAvaliacao : function(request,response){
			var avalId = request.params.avalId;
			var avaliacao = request.body;
			var sql = 'UPDATE `tb_avaliacao` SET `id_usuario_app`="'+avaliacao.id_usuario_app+'",`voto`="'+avaliacao.voto+'",`tipo_avaliacao`="'+avaliacao.tipo_avaliacao+'",`id_referencia_avaliacao`="'+avaliacao.id_referencia_avaliacao+'" WHERE  `id_avaliacao` = "'+avalId+'"';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});	
		},
		deleteAvaliacao : function(request,response){
			var avalId = request.params.avalId;
			var aval = request.body;
			var sql = 'UPDATE `tb_avaliacao` SET `dismist`= 1 WHERE `id_avaliacao` = "'+avalId+'"';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		}
	};
	return AvaliacaoController;
}
