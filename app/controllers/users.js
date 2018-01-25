module.exports = function(app){
	var UsersController = {
		listUsers : function(request,response){
			var sql = 'SELECT `id_usuario`,`nome`, `telefone`, `usuario` FROM `tb_usuarios` WHERE dismist = 0'; 
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		saveUsers : function(request,response){
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
		updateUsers : function(request,response){
			var userId = request.params.userId;
			var user = request.body;
			var sql = 'UPDATE `tb_usuarios` SET `nome`="'+user.nome+'",`telefone`="'+user.telefone+'",`usuario`="'+user.usuario+'",`senha`="'+user.senha+'",`controle`="'+user.controle+'",`id_perfil`="'+user.id_perfil+'" WHERE `id_usuario` = "'+userId+'"';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});

		},
		deleteUsers : function(request,response){
			var userId = request.params.userId;
			var user = request.body;
			var sql = 'UPDATE `tb_usuarios` SET `dismist`= 1 WHERE `id_usuario` = "'+userId+'"';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		login : function(request,response){
			
		}

	};
	return UsersController;
}