module.exports = function(app) {
	var CheckingController = {
		listChecking : function(request, response){
			var sql = 'SELECT `id_usuario_app`, `id_estabelecimento`, `datacadastro` FROM tb_checking WHERE dismist=0';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		saveChecking : function(request, response){
			var checking = request.body;
			var sql = 'INSERT INTO tb_checking(id_usuario_app, id_estabelecimento, datacadastro, dismist) VALUES (1,1,"'+checking.datacadastro+'",0)';
			app.get('db').query(sql, function(err,rows){
				if (err == null){
					response.json(rows)
				} else {
					response.json(err)
				}
			});
		},
		updateChecking : function(request,response){
			
		},
		deleteChecking : function(request,response){
			
		}
	};
	return CheckingController;
}
