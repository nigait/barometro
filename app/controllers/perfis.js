module.exports = function(app){
	var PerfisController = {
		listPerfis : function(request,response){
			var sql = 'SELECT `id_perfil`, `nome_perfil` FROM `tb_perfis` WHERE dismist = 0'; 
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		savePerfis : function(request,response){
			var perfil = request.body;
			var sql = 'INSERT INTO tb_perfis(nome_perfil, dismist) VALUES ("'+perfil.nome_perfil+'",0)';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		updatePerfis : function(request,response){
			var perfilId = request.params.perfilId;
			var perfil = request.body;
			var sql = 'UPDATE `tb_perfis` SET `nome_perfil`="'+perfil.nome_perfil+'" WHERE `id_PERFIL` = "'+perfilId+'"';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		deletePerfis : function(request,response){
			var perfilId = request.params.perfilId;
			var sql = 'UPDATE `tb_perfis` SET `dismist`= 1 WHERE `id_perfil` = "'+perfilId+'"';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		}
	};
	return PerfisController;
}