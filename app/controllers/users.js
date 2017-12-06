module.exports = function(app){
	var UsersController = {
		listUsers : function(request,response){
			var sql = 'SELECT * FROM `tb_usuarios` WHERE dismist = 0'; 
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
			
		},
		deleteUsers : function(request,response){
			
		},
		login : function(request,response){
			
		}

	};
	return UsersController;
}