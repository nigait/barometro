module.exports = function(app){
	var EstabelecimentosController = {
		listEstabelecimentos : function(request,response){
			var sql = 'SELECT `nome`, `telefone`, `usuario` FROM `tb_usuarios` WHERE dismist = 0'; 
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		saveEstabelecimentos : function(request,response){
			var user = request.body;
			var sql = 'INSERT INTO tb_usuarios(nome, telefone, usuario, senha, controle, id_perfil, dismist) VALUES ("'+user.nome+'", "'+user.telefone+'", "'+user.usuario+'", "'+user.senha+'", "'+user.controle+'", 3,0)';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		updateEstabelecimentos : function(request,response){
			
		},
		deleteEstabelecimentos : function(request,response){
			
		},
		login : function(request,response){
			
		}

	};
	return EstabelecimentosController;
}